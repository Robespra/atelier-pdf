i18n & Localization
Internationalization (i18n) and Localization (L10n) best practices.

---

## Core Concepts

| Term | Meaning |
|------|---------|
| i18n | Internationalization — making app translatable |
| L10n | Localization — actual translations |
| Locale | Language + Region (en-US, fr-FR) |
| RTL | Right-to-left languages (Arabic, Hebrew) |

---

## When to Use i18n

| Project Type | i18n Needed? |
|---|---|
| Public web app | Yes |
| SaaS product | Yes |
| Internal tool | Maybe |
| Single-region app | Consider future |

---

## Implementation Patterns

React (react-i18next):
```js
import { useTranslation } from 'react-i18next';
function Welcome() {
  const { t } = useTranslation();
  return <h1>{t('welcome.title')}</h1>;
}
```

Next.js (next-intl):
```js
import { useTranslations } from 'next-intl';
export default function Page() {
  const t = useTranslations('Home');
  return <h1>{t('title')}</h1>;
}
```

---

## File Structure

```
locales/
├── en/
│   ├── common.json
│   ├── auth.json
│   └── errors.json
├── fr/
│   ├── common.json
│   ├── auth.json
│   └── errors.json
└── ar/   # RTL
```

---

## Best Practices

✅ DO:
- Use translation keys, not raw text
- Namespace translations by feature
- Support pluralization
- Handle date/number formats per locale (use `Intl.DateTimeFormat`, `Intl.NumberFormat`)
- Plan for RTL from the start
- Use ICU message format for complex strings

❌ DON'T:
- Hardcode strings in components
- Concatenate translated strings (word order differs by language)
- Assume text length (German is ~30% longer than English)
- Forget about RTL layout
- Mix languages in the same file

---

## RTL Support

```css
/* CSS Logical Properties — works in both LTR and RTL */
.container {
  margin-inline-start: 1rem;  /* Not margin-left */
  padding-inline-end: 1rem;   /* Not padding-right */
}

[dir="rtl"] .icon {
  transform: scaleX(-1);
}
```

---

## Common Issues

| Issue | Solution |
|-------|----------|
| Missing translation | Fallback to default language |
| Hardcoded strings | Use linter/checker script |
| Date format | `Intl.DateTimeFormat` |
| Number format | `Intl.NumberFormat` |
| Pluralization | ICU message format |

---

## Checklist Before Shipping

- All user-facing strings use translation keys
- Locale files exist for all supported languages
- Date/number formatting uses `Intl` API
- RTL layout tested (if applicable)
- Fallback language configured
- No hardcoded strings in components
