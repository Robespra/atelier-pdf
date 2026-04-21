Responsive Design
Mobile-first layout design, converting fixed layouts to responsive, image optimization per device, and multi-screen support.

---

## Core Principle: Mobile-First

Design from small screens and progressively expand using `min-width` media queries.

```css
/* Default: Mobile */
.container { padding: 1rem; font-size: 14px; }
.grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container { padding: 2rem; font-size: 16px; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; padding: 3rem; }
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

---

## Standard Breakpoints

| Name | Width | Use |
|------|-------|-----|
| Mobile | 320px – 767px | Default (no media query) |
| Tablet | 768px+ | `@media (min-width: 768px)` |
| Desktop | 1024px+ | `@media (min-width: 1024px)` |
| Large | 1440px+ | `@media (min-width: 1440px)` |

---

## Layout Systems

**Flexbox** (1-dimensional — nav bars, card rows):
```css
.card-list { display: flex; flex-direction: column; gap: 1rem; }
@media (min-width: 768px) {
  .card-list { flex-direction: row; flex-wrap: wrap; }
  .card { flex: 1 1 calc(50% - 0.5rem); }
}
```

**CSS Grid** (2-dimensional — dashboards, page layouts):
```css
.dashboard {
  display: grid;
  grid-template-areas: "header" "sidebar" "main" "footer";
}
@media (min-width: 768px) {
  .dashboard {
    grid-template-areas: "header header" "sidebar main" "footer footer";
    grid-template-columns: 250px 1fr;
  }
}
```

---

## Responsive Images

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  alt="Description"
/>
```

Art direction with `<picture>`:
```html
<picture>
  <source media="(max-width: 767px)" srcset="portrait.jpg">
  <source media="(max-width: 1023px)" srcset="square.jpg">
  <img src="landscape.jpg" alt="Art direction example">
</picture>
```

---

## Responsive Typography

Fluid sizing with `clamp()`:
```css
:root {
  --font-size-body: clamp(14px, 2.5vw, 18px);
  --font-size-h1:   clamp(24px, 5vw, 48px);
  --font-size-h2:   clamp(20px, 4vw, 36px);
}
```

---

## Container Queries (Modern)

```css
.card-container { container-type: inline-size; container-name: card; }

@container card (min-width: 400px) {
  .card { display: grid; grid-template-columns: 200px 1fr; }
}
```

---

## Mandatory Rules

✅ Viewport meta tag in all HTML:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

✅ Use relative units: `rem`, `em`, `%`, `vw/vh` (not `px` for layout)

✅ Prefer `min-h-dvh` over `100vh` on mobile

❌ Never: `width: 1200px` (use `max-width: 1200px`)
❌ Never: `user-scalable=no` or `maximum-scale=1`
❌ Never: horizontal scroll on mobile
❌ Never: duplicate styles across breakpoints (common styles as default, differences in media queries)
