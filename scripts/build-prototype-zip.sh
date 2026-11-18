#!/usr/bin/env bash
# Builds the self-contained, downloadable .zip for one or more restaurant
# reservation prototypes (v1a, v1aB, v1aC, …), served from each version's
# card on prototypes/restaurants.html.
#
# Each zip is built from a staging directory that reproduces the repo's
# relative layout (prototypes/<name>.html + assets/...), so that once
# unzipped on someone's machine, the HTML file's existing relative paths
# (../assets/...) keep working with no edits.
#
# The copy that goes into the zip has its password gate stripped — the gate
# redirects to restaurants.html (checking sessionStorage 'proto_unlocked'),
# which makes no sense in a standalone zip opened locally (restaurants.html
# isn't included, so the redirect 404s and the page never renders). The
# strip removes exactly:
#   1. the <div id="proto-gate">...</div> block
#   2. its following <script>...</script> block (the redirect/unlock logic)
#   3. the "← Versions · V1a[-X]" dev-back link right after it
# The source file in the repo is never touched — only the staged copy is.
#
# Usage:
#   scripts/build-prototype-zip.sh                 # rebuild all known prototypes
#   scripts/build-prototype-zip.sh v1a v1aB         # rebuild just these
#
# Requires: python3, zip (or ditto on macOS — falls back automatically).

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

PROTOTYPES_DIR="prototypes"
DOWNLOADS_DIR="assets/downloads"
# Known prototype basenames (without the restaurants- prefix or .html suffix).
ALL_NAMES=(v1a v1aB v1aC)

if [ "$#" -gt 0 ]; then
  NAMES=("$@")
else
  NAMES=("${ALL_NAMES[@]}")
fi

mkdir -p "$DOWNLOADS_DIR"

for name in "${NAMES[@]}"; do
  html_file="$PROTOTYPES_DIR/restaurants-${name}.html"
  if [ ! -f "$html_file" ]; then
    echo "!! Skipping ${name}: $html_file not found" >&2
    continue
  fi

  echo "== Building restaurants-${name}.zip =="

  stage_dir="$(mktemp -d)"
  trap 'rm -rf "$stage_dir"' EXIT

  staged_html_dir="$stage_dir/prototypes"
  mkdir -p "$staged_html_dir"
  staged_html="$staged_html_dir/restaurants-${name}.html"

  # 1. Copy the HTML, then strip the password-gate block + dev-back link
  #    from the staged copy only (never touches the repo's source file).
  python3 - "$html_file" "$staged_html" <<'PYEOF'
import re
import sys

src_path, dst_path = sys.argv[1], sys.argv[2]
with open(src_path, encoding='utf-8') as f:
    html = f.read()

# Remove the gate <div id="proto-gate">...</div> (non-greedy, DOTALL) and the
# <script> block immediately following it.
gate_div_re = re.compile(
    r'<div id="proto-gate"[^>]*>.*?</div>\s*<script>.*?</script>\s*',
    re.DOTALL,
)
html, n_gate = gate_div_re.subn('', html, count=1)

# Remove the "← Versions · V1a..." dev-back link that immediately follows.
back_link_re = re.compile(
    r'<a href="restaurants\.html" class="dev-back">[^<]*</a>\s*'
)
html, n_link = back_link_re.subn('', html, count=1)

if n_gate == 0:
    print(f"   !! warning: no proto-gate block found in {src_path}", file=sys.stderr)
if n_link == 0:
    print(f"   !! warning: no dev-back link found in {src_path}", file=sys.stderr)

with open(dst_path, 'w', encoding='utf-8') as f:
    f.write(html)
PYEOF

  # 2. Collect every asset the HTML references via a ../assets/... relative
  #    path (covers plain src=/href= attributes AND paths built in inline
  #    JS string literals, e.g. the RESTAURANT_IMAGES table), then copy each
  #    one that actually exists on disk into the staging dir at the same
  #    relative location.
  mapfile -t assets < <(
    grep -oE '\.\./assets/[A-Za-z0-9_./-]+\.[A-Za-z0-9]+' "$html_file" | sort -u
  )

  copied=0
  missing=0
  for rel in "${assets[@]}"; do
    # rel looks like "../assets/foo/bar.webp", written relative to the HTML
    # file inside prototypes/ — so it resolves to "assets/foo/bar.webp" at
    # the repo root (prototypes/ and assets/ are sibling directories).
    src_asset="${rel#../}"
    if [ ! -f "$src_asset" ]; then
      echo "   !! missing on disk, skipped: $rel" >&2
      missing=$((missing + 1))
      continue
    fi
    dest_asset="$stage_dir/$src_asset"
    mkdir -p "$(dirname "$dest_asset")"
    cp "$src_asset" "$dest_asset"
    copied=$((copied + 1))
  done
  echo "   assets copied: $copied (missing: $missing)"

  # 3. Zip the staging dir's contents (prototypes/ + assets/ at top level).
  out_zip="$REPO_ROOT/$DOWNLOADS_DIR/restaurants-${name}.zip"
  rm -f "$out_zip"
  (cd "$stage_dir" && zip -rq "$out_zip" prototypes assets)

  rm -rf "$stage_dir"
  trap - EXIT

  echo "   -> $DOWNLOADS_DIR/restaurants-${name}.zip"
done

echo "Done."
