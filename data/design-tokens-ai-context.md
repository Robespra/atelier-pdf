# Design Token Spec (AI Context)
> Source: Figma `Design System Fondamentaux` · 154 variables · Light + Dark modes  
> Use this file as context for any AI-assisted UI generation.

---

## How to Use This File

Feed this file to Claude, Cursor, or any LLM agent at session start. It provides the **closed token set** the AI must pick from. The AI must never invent raw hex values, px values, or font names — it must reference tokens by name.

**Rule for AI agents:**
- Colors → always use a `semantic/*` token. Only use `color/*` primitives when building a new semantic token.
- Spacing → always use a `spacing/*` token. Never write `margin: 16px` — write `spacing-md`.
- Typography → always use `font-size-*` and `line-height-*` tokens paired together.
- Shadows → always use `shadow-xs/s/m/l/xl` semantic tokens, never raw rgba values.

---

## 1. Brand Identity

The visual identity is baroque, theatrical, and warm — not flat or minimal. The design language combines:
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

---

## 8. Primitive Shadow Palette (Reference)

Dark overlay primitive: `#121211` at 10%–100% opacity  
Light overlay primitive: `#464747` at 10%–100% opacity

These are the raw building blocks for semantic shadows. Do not use primitives in UI — use semantic shadow tokens.

---

## 9. AI Generation Rules Summary

```
OUTPUT PRIORITY:
  - Always output MOBILE design first — this is a mobile-first product
  - Mobile breakpoint: 390px width, single column, bottom nav pattern
  - Only extend to tablet/desktop if explicitly requested

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

MODE AWARENESS:
  - Always generate for both Light and Dark
  - semantic-bg, semantic-text, semantic-brand-red, shadow-* all differ by mode
  - font-size-xxl and spacing-xs have mode-specific values — flag these in outputs
```
