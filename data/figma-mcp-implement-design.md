Implement Design with Figma MCP
Structured workflow for translating Figma designs into production-ready code with pixel-perfect accuracy.

---

## Prerequisites

- Figma MCP server connected and accessible
- Figma URL format: `https://figma.com/design/:fileKey/:fileName?node-id=1-2`
- Project with established design system (preferred)

---

## Required Workflow

### Step 1 — Get Node ID

Parse from Figma URL:
- File key: segment after `/design/`
- Node ID: value of `node-id` query parameter

Example:
```
URL:      https://figma.com/design/kL9xQn2VwM8pYrTb4ZcHjF/DesignSystem?node-id=42-15
File key: kL9xQn2VwM8pYrTb4ZcHjF
Node ID:  42-15
```

### Step 2 — Fetch Design Context

```
get_design_context(fileKey=":fileKey", nodeId="1-2")
```

Returns: layout properties, typography specs, color values and tokens, component structure, spacing.

If response too large: use `get_metadata` first to get node map, then fetch individual child nodes.

### Step 3 — Capture Visual Reference

```
get_screenshot(fileKey=":fileKey", nodeId="1-2")
```

Screenshot = source of truth for visual validation throughout implementation.

### Step 4 — Download Required Assets

- Use localhost sources returned by MCP directly — do NOT modify them
- Do NOT import new icon packages
- Do NOT create placeholders when a localhost source is provided

### Step 5 — Translate to Project Conventions

- Treat MCP output (typically React + Tailwind) as design representation, not final code
- Replace Tailwind classes with project's design system tokens
- Reuse existing components instead of duplicating
- Respect existing routing, state management, and data-fetch patterns

### Step 6 — Achieve 1:1 Visual Parity

- Prioritize Figma fidelity
- Avoid hardcoded values — use design tokens
- When DS tokens conflict with Figma specs, prefer DS tokens but adjust minimally for visual match
- Follow WCAG accessibility requirements

### Step 7 — Validate Against Figma

Checklist before marking complete:
- Layout matches (spacing, alignment, sizing)
- Typography matches (font, size, weight, line height)
- Colors match exactly
- Interactive states work (hover, active, disabled)
- Responsive behavior follows Figma constraints
- Assets render correctly
- Accessibility standards met

---

## Implementation Rules

**Component Organization**
- Place components in project's designated design system directory
- Follow project naming conventions
- Avoid inline styles unless truly necessary for dynamic values

**Design System Integration**
- ALWAYS use existing components when possible
- Map Figma design tokens to project design tokens
- Extend existing components rather than creating new ones
- Document any new components added

**Code Quality**
- No hardcoded values — extract to constants or design tokens
- Keep components composable and reusable
- TypeScript types for component props
- JSDoc comments for exported components

---

## Common Issues

**Figma output truncated** → Use `get_metadata` to get node structure, then fetch specific nodes individually.

**Design doesn't match after implementation** → Compare side-by-side with Step 3 screenshot. Check spacing, colors, and typography in the design context data.

**Assets not loading** → Verify Figma MCP server's assets endpoint is accessible. Use localhost URLs directly without modification.

**Design token values differ from Figma** → Prefer project tokens for consistency, adjust spacing/sizing minimally for visual fidelity.

---

## Figma MCP Console — Setup

Connects Claude Desktop directly to Figma via WebSocket.

**Prerequisites:** Node.js 20+ at `/usr/local/bin/node`, Figma Desktop, Personal Access Token (`figd_...`)

**Step 1 — Install globally:**
```
/usr/local/bin/npm install -g figma-console-mcp@latest
```

**Step 2 — Config Claude Desktop:**
File: `~/Library/Application Support/Claude/claude_desktop_config.json`
```json
"mcpServers": {
  "figma-console": {
    "command": "/usr/local/bin/node",
    "args": ["/usr/local/lib/node_modules/figma-console-mcp/dist/local.js"],
    "env": { "FIGMA_ACCESS_TOKEN": "figd_YOUR_TOKEN", "ENABLE_MCP_APPS": "true" }
  }
}
```
⚠️ Use `node` directly — **not npx**.

**Step 3 — Plugin Desktop Bridge in Figma:**
Plugins → Development → Import plugin from manifest

**Step 4 — Restart Claude Desktop:** `Cmd+Q` then reopen.

**Step 5 — Run the plugin:** Open Figma file → run Desktop Bridge → auto-connects via WebSocket.

**Typical use cases:** Token extraction, bulk renaming, DS audit, structural generation.
