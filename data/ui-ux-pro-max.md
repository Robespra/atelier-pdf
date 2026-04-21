UI/UX Pro Max — Design Intelligence
Comprehensive design reference: 50+ styles, color palettes, font pairings, UX guidelines, and chart types.

---

## When to Apply

**Must use:** New pages, new components, choosing color/typography/layout, reviewing UI for UX/accessibility, navigation structures, animations, design system decisions.

**Recommended:** UI looks "not professional enough," receiving usability feedback, pre-launch optimization, cross-platform alignment.

**Skip:** Pure backend, API/database design, performance unrelated to UI, infrastructure work.

---

## Rule Categories by Priority

| Priority | Category | Impact | Key Checks |
|----------|----------|--------|------------|
| 1 | Accessibility | CRITICAL | Contrast 4.5:1, Alt text, Keyboard nav, Aria-labels |
| 2 | Touch & Interaction | CRITICAL | Min 44×44px, 8px+ spacing, Loading feedback |
| 3 | Performance | HIGH | WebP/AVIF, Lazy loading, CLS < 0.1 |
| 4 | Style Selection | HIGH | Match product type, consistency, SVG icons |
| 5 | Layout & Responsive | HIGH | Mobile-first, no horizontal scroll |
| 6 | Typography & Color | MEDIUM | Base 16px, line-height 1.5, semantic tokens |
| 7 | Animation | MEDIUM | 150–300ms, transform/opacity only |
| 8 | Forms & Feedback | MEDIUM | Visible labels, inline errors, progressive disclosure |
| 9 | Navigation Patterns | HIGH | Predictable back, bottom nav ≤5, deep linking |
| 10 | Charts & Data | LOW | Legends, tooltips, accessible colors |

---

## 1. Accessibility (CRITICAL)

- Contrast 4.5:1 normal text, 3:1 large text
- Visible focus rings (2–4px) on all interactive elements
- Descriptive alt text for meaningful images
- `aria-label` for icon-only buttons
- Tab order matches visual order; full keyboard support
- `label` with `for` attribute on all form inputs
- Skip-to-main-content link for keyboard users
- Sequential h1→h6, no level skipping
- Don't convey info by color alone (add icon/text)
- Support Dynamic Type / system text scaling
- Respect `prefers-reduced-motion`
- Meaningful `accessibilityLabel`/`accessibilityHint` for screen readers

---

## 2. Touch & Interaction (CRITICAL)

- Min 44×44pt (iOS) / 48×48dp (Android) touch targets; extend hit area beyond visual bounds
- Minimum 8px gap between touch targets
- Use tap/click for primary interactions — don't rely on hover alone
- Disable button during async operations; show spinner
- Clear error messages near the problem field
- `cursor: pointer` on all clickable elements
- `touch-action: manipulation` to reduce 300ms tap delay
- Visual feedback on press within 80–150ms (ripple, opacity, elevation)
- Haptic feedback for confirmations — avoid overuse
- Keep primary targets away from notch, Dynamic Island, gesture bar

---

## 3. Performance (HIGH)

- Use WebP/AVIF, responsive images with `srcset/sizes`, lazy load
- Declare `width`/`height` or `aspect-ratio` to prevent layout shift (CLS)
- `font-display: swap/optional` to avoid invisible text (FOIT)
- Preload critical fonts only
- Lazy load non-hero components via dynamic import
- Load third-party scripts `async/defer`
- Avoid frequent layout reads/writes; batch DOM operations
- Virtualize lists with 50+ items
- Keep per-frame work under ~16ms for 60fps
- Skeleton screens instead of blocking spinners for >1s operations

---

## 4. Style Selection (HIGH)

- Match style to product type and industry
- Use same style across all pages
- SVG icons (Heroicons, Lucide) — never emojis as structural icons
- Effects (shadows, blur, radius) aligned with chosen style
- Respect platform idioms (iOS HIG vs Material Design)
- Hover/pressed/disabled states visually distinct
- Consistent elevation/shadow scale for cards, sheets, modals
- Design light/dark variants together
- One icon set with consistent stroke width and corner radius
- Each screen has one primary CTA; secondary actions visually subordinate

---

## 5. Layout & Responsive (HIGH)

- `<meta name="viewport" content="width=device-width, initial-scale=1">` — never disable zoom
- Mobile-first design, scale up to tablet and desktop
- Systematic breakpoints: 375 / 768 / 1024 / 1440
- Minimum 16px body text on mobile (avoids iOS auto-zoom)
- Mobile: 35–60 chars per line; desktop: 60–75 chars
- No horizontal scroll on mobile
- 4pt/8dp spacing system
- Consistent `max-width` on desktop (max-w-6xl / 7xl)
- Fixed navbar/bottom bar must reserve safe padding for underlying content
- Prefer `min-h-dvh` over `100vh` on mobile
- Layout readable and operable in landscape mode

---

## 6. Typography & Color (MEDIUM)

- Line-height 1.5–1.75 for body text
- Use platform type system: iOS Dynamic Type / Material 5 type roles
- Font-weight hierarchy: Bold headings (600–700), Regular body (400), Medium labels (500)
- Semantic color tokens (primary, secondary, error, surface) — not raw hex in components
- Dark mode: desaturated/lighter tonal variants, not inverted colors
- Foreground/background pairs: 4.5:1 (AA) or 7:1 (AAA)
- Functional color (error red, success green) must include icon/text
- `font-variant-numeric: tabular-nums` for data columns, prices, timers
- Use whitespace intentionally to group and separate

---

## 7. Animation (MEDIUM)

- 150–300ms for micro-interactions; complex transitions ≤400ms
- Animate `transform`/`opacity` only (never width/height/top/left)
- Skeleton or progress for loading >300ms
- Max 1–2 key animated elements per view
- `ease-out` for entering, `ease-in` for exiting
- Every animation conveys cause-effect — no purely decorative motion
- Forward navigation: animate left/up; backward: right/down
- Animations must be interruptible; user tap cancels in-progress animation
- Never block user input during animation
- Exit animations shorter than enter (~60–70% of enter duration)
- Respect `prefers-reduced-motion`

---

## 8. Forms & Feedback (MEDIUM)

- Visible label per input (never placeholder-only)
- Error message below the related field
- Loading then success/error state on submit
- Mark required fields with asterisk
- Helpful empty state with action when no content
- Auto-dismiss toasts in 3–5s with `aria-live="polite"`
- Confirm before destructive actions
- Validate on blur (not on every keystroke)
- Error messages must state cause + how to fix
- `autocomplete` attributes so browser/OS can autofill
- Show/hide toggle for password fields
- Long forms: auto-save drafts
- After submit error, auto-focus first invalid field

---

## 9. Navigation Patterns (HIGH)

- Bottom navigation max 5 items with labels + icons
- iOS: bottom Tab Bar for top-level navigation
- Android: Top App Bar with navigation icon
- Current location visually highlighted (color, weight, indicator)
- Back navigation predictable; preserves scroll/state
- All key screens reachable via deep link
- Modals and sheets must have clear close/dismiss affordance
- Support system gesture navigation (iOS swipe-back, Android predictive back)
- Never hide tab bar when navigating deeper within a tab
- Never use modals for primary navigation flows

---

## 10. Charts & Data (LOW)

- Match chart type to data: trend → line, comparison → bar, proportion → pie/donut
- Accessible color palettes; avoid red/green only for colorblind users
- Always show legend near chart, not detached below scroll fold
- Tooltips on hover (web) or tap (mobile) showing exact values
- Label axes with units; avoid truncated or rotated labels on mobile
- Show meaningful empty state when no data
- For 1000+ data points, aggregate and provide drill-down
- No pie/donut for >5 categories — switch to bar chart
- Chart entrance animations must respect `prefers-reduced-motion`

---

## Anti-Patterns (Never Do These)

**App UI:**
- Emojis as structural icons → use SVG
- Layout-shifting press states → transform/opacity only
- Hardcoded hex colors in components → use semantic tokens
- Controls that look tappable but do nothing
- Touch targets without adequate hit area
- Fixed UI under notch/gesture areas

**Web:**
- `user-scalable=no` — disables zoom for accessibility users
- `transition: all` — list properties explicitly
- `outline-none` without focus-visible replacement
- `<div onClick>` for navigation — use `<a>` or `<Link>`
- Images without dimensions — causes CLS
- Large lists without virtualization
- Hardcoded date/number formats — use `Intl.*`
- Full-screen blocking spinners — use skeleton views
- Hamburger menus as primary navigation on mobile
- Stacked modals — use navigation within a single modal
