# Design Spec (AI Context)
> Source: Figma `Design System Fondamentaux` · 154 variables · Light + Dark modes
> Use this file as context for any AI-assisted UI generation.

---

## How to Use This File

Feed this file to Claude, Cursor, or any LLM agent at session start. It provides the **closed token set** the AI must pick from, plus the composition and editorial rules that keep output from reading as generic AI-generated UI. The AI must never invent raw hex values, px values, or font names — it must reference tokens by name.

**Rule for AI agents:**
- Colors → always use a `semantic/*` token. Only use `color/*` primitives when building a new semantic token.
- Spacing → always use a `spacing/*` token. Never write `margin: 16px` — write `spacing-md`.
- Typography → always use `font-size-*` and `line-height-*` tokens paired together.
- Shadows → always use `shadow-xs/s/m/l/xl` semantic tokens, never raw rgba values.
- Composition → before laying anything out, do the framing and evidence work in Section 10. A screen that uses every token correctly can still read as generic AI output if it skips that step.

---

## 1. Brand Identity

The visual identity is baroque, theatrical, and warm, not flat or minimal. The design language combines:
- Deep reds and warm beige-golds as the primary palette
- Serif headings (Georgia) for narrative/theatrical register
- Arial for functional UI copy
- Glassmorphism and sticker effects are appropriate for decorative UI elements
- Both light (parchment) and dark (night show) modes are fully supported

---

## 2. Color Palette

### Brand Colors
| Token | Light | Dark | Usage |
|---|---|---|---|
| `semantic-brand-red` | `#B40020` | `#CB1617` | CTAs, badges, active states, brand marks |
| `semantic-logo-line` | `#B40020` | `#CB1617` | Logo outline color |
| `semantic-laiton` | `#A18756` | `#C6A669` | Secondary brand accent, dividers, icons |
| `semantic-night-show` | `#09406D` | `#3D70A2` | Night show content, premium sections |

### Background Tokens
| Token | Light | Dark | Usage |
|---|---|---|---|
| `semantic-bg` | `#FBF7F0` | `#1C1C1B` | App/page background |
| `semantic-bg-cards` | `#FFFFFF` | `#2C2D2D` | Card surfaces |
| `semantic-bg-nav` | `#F6F6F6` | `#2C2D2D` | Bottom nav, tab bars |
| `semantic-bg-nav-stronger` | `#F1EFEF` | `#474949` | Nav active/hover state |
| `semantic-bg-label` | `#E2DED8` | `#333332` | Tags, chips, label backgrounds |

### Text Tokens
| Token | Light | Dark | Usage |
|---|---|---|---|
| `semantic-text` | `#3B311F` | `#F6F6F6` | Primary body text |
| `semantic-text-contrast` | `#1D1D1B` | `#FFFFFF` | High-contrast text on light bg |
| `semantic-text-contrast-opposite` | `#FFFFFF` | `#1D1D1D` | Text on dark/brand-colored surfaces |
| `semantic-grey` | `#616161` | `#A3A3A3` | Secondary/muted text |
| `semantic-grey-darker` | `#1F1F1F` | `#515151` | Tertiary text, captions |

### Status / Feedback Tokens
| Token | Light | Dark | Usage |
|---|---|---|---|
| `semantic-success-promo` | `#009A58` | `#48BF73` | Promo badge, success states |
| `semantic-warning` | `#C6A669` | `#ECCB57` | Warnings, attention states |

### Gradient Tokens
| Token | Light | Dark | Usage |
|---|---|---|---|
| `semantic-gradient-top` | `#C1BDBD00` | `#12121200` | Top of image gradient overlay (transparent) |
| `semantic-gradient-bottom` | `#DCDCDCE5` | `#121212E5` | Bottom of image gradient overlay |

Reserved for photo legibility overlays only (text-over-image scrims). Not a license for decorative background gradients — see Section 9.

### Contrast / Overlay Tokens
| Token | Light | Dark | Usage |
|---|---|---|---|
| `semantic-contrast-opacity-s` | `#0000001A` (10%) | `#FFFFFF1A` | Subtle overlay on surfaces |
| `semantic-contrast-opacity-m` | `#00000040` (25%) | `#FFFFFF40` | Pressed states, modal scrims |

---

## 3. Color Primitives (Reference Only)

Use these only when building new semantic tokens or components that require a full palette step. Do not use primitives directly in component implementations.

### Brand Red Scale
`#C61617` (base) → `#D65247` (80) → `#E68276` (60) → `#F2AEA3` (40) → `#FBDBD5` (20)
Contrast text on brand red: `#FFFFFF`

### Laiton / Bronze Scale
`#C6A669` (base) → `#CFB582` (80) → `#DBC59E` (60) → `#E6D7BA` (40) → `#F1E8D7` (20)
Darker: `#A18756` (−20%) → `#75633F` (−40%) → `#3B311F` (−60%)

### Laiton Jaune / Gold Scale
`#C0A669` (base) → `#ECCB57` (80) → `#F1D57E` (60) → `#F6DE9F` (40) → `#FAE7BE` (20)

### Bleu / Blue Scale
`#0B528D` (base) → `#3D70A2` (80) → `#7095B8` (60) → `#A0B9D3` (40) → `#D3DFEB` (20)
Darker: `#09406D` (−20%) → `#072D4C` (−40%) → `#051E33` (−60%)
Contrast text on bleu: `#FFFFFF`

### Jaune Beige Scale
`#E0C332` (base) → `#ECC637` (80) → `#F1D57E` (60) → `#F6E5AF` (40) → `#FAF3D9` (20)

### Promo / Success Green Scale
`#009A58` (base) → `#48BF73` (80) → `#78D594` (60) → `#A2CCB8` (40) → `#CCE4D8` (20)

### Neutral Grey Scale
`#000000` → `#121211` (90) → `#2C2D2D` (80) → `#1C1C1B` (70) → `#464747` (60/40) → `#818281` (20) → `#C4C4C4` (00) → `#FFFFFF`

### Neutral Beige Scale
`#C6A669` (base) → `#CFB582` (80) → `#DBC59E` (60) → `#E6D7BA` (40) → `#F1E8D7` (20) → `#F6F6F6` (10) → `#FBF7F0` (contrast)

---

## 4. Typography

### Font Families
| Token | Value | Use |
|---|---|---|
| `font-family-headings` | Georgia | Serif display titles, theatrical headings |
| `font-family-headings-sans` | Arial | Sans-serif headings, UI labels |
| `font-family-body` | Arial | All body copy, UI text |
| `font-family-body-serif` | Georgia | Editorial body, long-form content |

### Type Scale — Size + Line Height Pairs

| Step | Size token | Size (px) | Line height token | LH (px) |
|---|---|---|---|---|
| xxxl | `font-size-xxxl` | 72 | — | — |
| xxl | `font-size-xxl` | 64 *(L)* / 48 *(D)* | `line-height-xxl` | 52 |
| xl | `font-size-xl` | 48 | `line-height-xl` | 40 |
| l | `font-size-l` | 36 | `line-height-l` | 32 |
| ml | `font-size-ml` | 28 | — | — |
| m | `font-size-m` | 24 | `line-height-m` | 24 |
| sm | `font-size-sm` | 20 | `line-height-s` | 20 |
| ms | `font-size-ms` | 18 | — | — |
| s | `font-size-s` | 16 | `line-height-xs` | 16 |
| xs | `font-size-xs` | 14 | `line-height-xxs` | 14 |
| xxs | `font-size-xxs` | 12 | `line-height-xxxs` | 12 |
| xxxs | `font-size-xxxs` | 11 *(L)* / 10 *(D)* | `line-height-xxxxs` | 10 |
| xxxxs | `font-size-xxxxs` | 10 | — | — |
| xxxxxs | `font-size-xxxxxs` | 8 | — | — |

**Note:** `font-size-xxl` differs by mode (64px Light, 48px Dark). Use cautiously in adaptive layouts.

Every size must pair with its matching line-height token. A one-off `font-size` value with no scale match, or a size/line-height combo that isn't in this table, is a defect — not a stylistic choice. See Section 9.

### Font Weights
| Token | Value |
|---|---|
| `font-weight-regular` | Regular |
| `font-weight-medium` | Medium |
| `font-weight-bold` | Bold |
| `font-weight-italic` | Italic |
| `font-weight-bold-italic` | Bold Italic |

---

## 5. Spacing Scale

Base unit: **4px**

| Token | px | Multiplier |
|---|---|---|
| `spacing-xxxs` | 2 | 0.5× |
| `spacing-xxs` | 4 | 1× (base) |
| `spacing-xs` | 6 *(L)* / 8 *(D)* | 1.5× |
| `spacing-s` | 8 | 2× |
| `spacing-sm` | 12 | 3× |
| `spacing-md` | 16 | 4× |
| `spacing-lg` | 24 | 6× |
| `spacing-xl` | 32 | 8× |
| `spacing-xxl` | 40 | 10× |
| `spacing-xxxl` | 48 | 12× |
| `spacing-xxxxl` | 64 | 16× |

**Note:** `spacing-xs` has a mode variant (6px Light / 8px Dark).

---

## 6. Border Scale

| Token | px | Usage |
|---|---|---|
| `border-xxxs` | 1 | Hairline dividers |
| `border-xxs` | 2 | Default borders |
| `border-xs` | 3 | Medium borders |
| `border-s` | 4 | Thick borders |
| `border-m` | 5 | Emphasis borders |
| `border-l` | 6 | Heavy borders |
| `border-xl` | 8 | Feature borders |

*(Border values are identical in Light and Dark.)*

A border is for separating surfaces that are otherwise ambiguous, not for propping up a hierarchy that weak type or spacing failed to establish. If removing a border would collapse the layout's meaning, fix the spacing and type scale first.

---

## 7. Shadows — Semantic

Use these tokens for `box-shadow` and elevation. They adapt to mode.

| Token | Light | Dark | Use case |
|---|---|---|---|
| `shadow-xs` | `#46474733` | `#12121133` | Subtle cards, inputs |
| `shadow-s` | `#4647474D` | `#1212114D` | Standard card elevation |
| `shadow-m` | `#46474780` | `#12121166` | Modals, drawers, popovers |
| `shadow-l` | `#464747B2` | `#12121199` | High elevation sheets |
| `shadow-xl` | `#464747E5` | `#121211B2` | Full-screen overlays |

**Recommended shadow usage pattern:**
```css
/* Card */
box-shadow: 0 2px 8px var(--shadow-s);

/* Modal */
box-shadow: 0 8px 32px var(--shadow-m);

/* Full overlay */
box-shadow: 0 0 0 100vmax var(--shadow-xl);
```

Elevation communicates z-order (this surface floats above that one). It is not a decoration budget. A glow, halo, or oversized blur radius around a static element is not an elevation shadow — see Section 9.

---

## 8. Primitive Shadow Palette (Reference)

Dark overlay primitive: `#121211` at 10%–100% opacity
Light overlay primitive: `#464747` at 10%–100% opacity

These are the raw building blocks for semantic shadows. Do not use primitives in UI — use semantic shadow tokens.

---

## 9. Anti-Patterns — Do Not Ship These

This is a closed list of recognizable "generic AI-generated UI" defaults. Treat every item as a defect to catch before output ships, the same way you'd treat an invented hex value. If a generated screen contains any of these, fix it before presenting the result.

1. All-caps or tracked eyebrows, kickers, overlines, and decorative numbered section labels. Caps are only acceptable on genuine dense-data column headers where they aid scanning (e.g. a metrics table header row), never as an editorial flourish over a heading.
2. Em dashes. Use a comma, colon, period, semicolon, or parentheses instead, whichever a person would naturally reach for in that sentence. Do not substitute an en dash or hyphen as a drop-in replacement; rephrase.
3. Decorative gradients, glows, blobs, stripes, textures, glass, or ornamental shadows. A gradient is allowed only where it does real legibility work (an image scrim per Section 2, or a deliberate, explicitly-approved brand moment) — never as ambient background decoration added for polish.
4. Generic centered hero copy followed by a card grid. A card grid is fine when the items are genuinely parallel and equal-weight; it is a defect when it's the default shape applied regardless of what the content actually needs.
5. Repeated metric boxes when one composed relationship would be clearer. Three boxes reading "10", "4", and "🏷" should be one sentence: "10 questions across 4 categories, with bonus labels."
6. A badge, pill, or rounded capsule for ordinary metadata, chart annotations, or editorial labels. Reserve the pill shape for genuinely interactive, selectable controls (a tab, a filter toggle). Plain colored or weighted text is correct for a status word or a type tag.
7. Cards nested inside cards, or borders used to repair weak hierarchy. See Section 6.
8. A dark rounded rectangle around every chart or calculator. Let the content sit on the page background unless it specifically needs a distinct surface.
9. Arbitrary icon tiles, oversized icons, or mixed icon styles. Pick one icon library and one weight per surface; do not mix filled and outline icons, or emoji and line icons, on the same visual level unless that mix is itself a deliberate, established content convention (e.g. this app's use of emoji as category icons in editorial lists is a content choice, not an icon-tile pattern; do not also wrap those emoji in a colored square).
10. Tiny muted prose, arbitrary font sizes, inconsistent peer values, or misaligned baselines. See the note in Section 4.
11. A narrow table floating inside a wide section, or a wide table compressed into broken words. Size the table's container to the table, or restructure the data (stacked key-value rows on narrow viewports) rather than forcing a mismatch.
12. Decorative charts, redundant visualizations, legends that replace direct labels, or color without meaning. If a value can be stated directly as a number or short label, do not wrap it in a chart for visual interest. Every color used in a diagram must map to something (state, category, sequence), never applied for variety.
13. Repeated full-width bars that do not share a scale or encode a visible difference. If every bar in a set is the same length, it isn't a chart, it's a list, format it as one.
14. Identical section silhouettes across unrelated reader questions. If two sections answer different kinds of questions ("what is this" vs "how do I configure it" vs "is this working"), they should not default to the same title-plus-paragraph-plus-card-grid shape just because it's the template already in hand.
15. Repeated recommendation, summary, rationale, and conclusion sections that say the same thing. State the point once, in the section where it belongs, and let other sections reference it rather than restate it.

---

## 10. Composition — Before You Lay Anything Out

Token compliance and the anti-pattern list in Section 9 keep a screen from looking like generic AI output at the surface level. This section is about the layer underneath: whether the screen is organized around what the reader actually needs, not just whether it avoids clichés. Do this thinking before choosing a layout, not after.

### 10.1 Frame the reader's job
Before generating anything, state in one sentence what the person looking at this screen is trying to do or decide. Not "display the user's stats" but "let a returning player see instantly whether their last session's changes actually paid off." The job determines what counts as signal versus noise on the screen. If you can't state the job in one sentence, ask for clarification rather than defaulting to a generic informational layout.

Different jobs call for different shapes:
- **Orient** ("what is this, where am I") → short framing copy, a small number of clearly labeled entry points.
- **Decide** ("should I do X or Y") → the comparison laid out directly, not buried in prose; the deciding factor visually dominant, not the same weight as supporting details.
- **Monitor** ("is this okay, did anything change") → the current state and the delta from expected/previous, not a wall of historical data with the current state hidden in it.
- **Configure** ("set this up correctly") → sequential, one decision at a time, with the consequence of each choice visible before the next one.
- **Verify** ("did this work") → a direct before/after or pass/fail signal, not a generic summary card.

Naming the job also tells you what to cut. Content that doesn't serve the stated job doesn't belong on the screen, even if it's true and related.

### 10.2 Structure the evidence before the layout
Once the job is clear, lay out the evidence in writing (a short list or outline is enough) before choosing components. For each fact or data point the screen needs to convey, decide:
- Is this the **point** (the thing the reader came here to learn), or is it **support** (context that helps them trust or act on the point)? The point gets the dominant visual position and weight. Support is smaller, later, or collapsed by default.
- Does this fact need a **direct label** (a number, a sentence, a short phrase) or does it genuinely benefit from a **visualization** (a real trend over time, a real proportion, a real comparison across many items)? Default to the direct label. Only reach for a chart when the shape of the data itself is the insight, not the number, e.g. "usage climbed steadily then plateaued" is a chart; "usage is 340" is a number.
- Are two or more facts actually **one relationship** that should be stated together ("3 of 4 categories complete") rather than presented as separate, equally-weighted boxes? Compose them before laying them out. This is the same instinct as Section 9's rule 5, applied earlier in the process, before you've built the boxes to remove.

Write this evidence structure down as a short outline before touching layout. If you skip straight to picking components, you tend to default to one card per fact, which is how Section 9's violations get built in the first place.

### 10.3 Choose a composition that matches the shape of the content
With the job and the evidence structure in hand, choose the layout that fits that specific shape, not the layout that was used for the last screen. Concretely:
- If the evidence is a small number of genuinely equal, parallel items (e.g. Kitchen Sink's component gallery), a grid of matching cards is correct, because the content really is a set of peers.
- If the evidence has a clear point and supporting detail, use an asymmetric layout: the point large and first, support smaller and after, not uniform boxes at the same visual weight.
- If the evidence is sequential (a process, a set of steps, a decision tree), lay it out as a sequence a reader can follow top-to-bottom or left-to-right, not as a grid that erases the order.
- If two unrelated sections happen to reuse the same silhouette because it's convenient, check whether that silhouette actually fits both reader jobs (Section 10.1). If not, that's rule 14 from Section 9, caught before it ships instead of after.

The test for a finished composition: could you describe why this specific arrangement was chosen for this specific content, in one sentence, without saying "because that's the standard layout"? If not, go back to 10.1.

---

## 11. AI Generation Rules Summary

```
OUTPUT PRIORITY:
  - Always output MOBILE design first — this is a mobile-first product
  - Mobile breakpoint: 390px width, single column, bottom nav pattern
  - Only extend to tablet/desktop if explicitly requested

BEFORE LAYOUT:
  - State the reader's job in one sentence (Section 10.1)
  - Structure the evidence: point vs support, label vs chart, composed vs separate (Section 10.2)
  - Choose the composition that matches that specific content shape (Section 10.3)

MUST use:
  - semantic/* tokens for all UI color decisions
  - spacing/* tokens for all padding/margin/gap
  - font-size-* + line-height-* token pairs
  - shadow-xs/s/m/l/xl for elevations

MUST NOT:
  - Invent hex colors not in this file
  - Write raw px values for spacing (use token names)
  - Use color/* primitives directly in component styles
  - Mix font families arbitrarily (Georgia = editorial/theatrical, Arial = UI/functional)
  - Ship any pattern listed in Section 9

MODE AWARENESS:
  - Always generate for both Light and Dark
  - semantic-bg, semantic-text, semantic-brand-red, shadow-* all differ by mode
  - font-size-xxl and spacing-xs have mode-specific values — flag these in outputs
```
