# Puy du Fou — Design Tokens (Dev Handoff)
> Source: Figma file `Design System Fondamentaux` · Collection: `Variables` · Modes: Light / Dark  
> Generated from Figma MCP · 154 variables

---

## CSS Custom Properties

### Usage
Import these variables at the `:root` level. Apply the `[data-theme="dark"]` override on `<html>` or `<body>` when dark mode is active.

```css
:root { /* Light (default) */ }
[data-theme="dark"] { /* Dark overrides */ }
```

---

## 1. Typography

### Font Families
```css
:root {
  --font-family-headings:      Georgia;        /* Serif — display headings */
  --font-family-headings-sans: Arial;          /* Sans — secondary headings */
  --font-family-body:          Arial;          /* Sans — body copy */
  --font-family-body-serif:    Georgia;        /* Serif — editorial body */
}
```

### Font Weights
```css
:root {
  --font-weight-regular:     Regular;
  --font-weight-medium:      Medium;
  --font-weight-bold:        Bold;
  --font-weight-italic:      Italic;
  --font-weight-bold-italic: Bold Italic;
}
```

### Font Sizes (px)
| Token | Light | Dark |
|---|---|---|
| `--font-size-xxxl` | 72 | 72 |
| `--font-size-xxl` | 64 | 48 |
| `--font-size-xl` | 48 | 48 |
| `--font-size-l` | 36 | 36 |
| `--font-size-ml` | 28 | 28 |
| `--font-size-m` | 24 | 24 |
| `--font-size-sm` | 20 | 20 |
| `--font-size-ms` | 18 | 18 |
| `--font-size-s` | 16 | 16 |
| `--font-size-xs` | 14 | 14 |
| `--font-size-xxs` | 12 | 12 |
| `--font-size-xxxs` | 11 | 10 |
| `--font-size-xxxxs` | 10 | 10 |
| `--font-size-xxxxxs` | 8 | 8 |

```css
:root {
  --font-size-xxxl:   72px;
  --font-size-xxl:    64px;
  --font-size-xl:     48px;
  --font-size-l:      36px;
  --font-size-ml:     28px;
  --font-size-m:      24px;
  --font-size-sm:     20px;
  --font-size-ms:     18px;
  --font-size-s:      16px;
  --font-size-xs:     14px;
  --font-size-xxs:    12px;
  --font-size-xxxs:   11px;
  --font-size-xxxxs:  10px;
  --font-size-xxxxxs: 8px;
}
[data-theme="dark"] {
  --font-size-xxl:  48px;   /* differs from Light */
  --font-size-xxxs: 10px;   /* differs from Light */
}
```

### Line Heights (px)
```css
:root {
  --line-height-xxl:   52px;
  --line-height-xl:    40px;
  --line-height-l:     32px;
  --line-height-m:     24px;
  --line-height-s:     20px;
  --line-height-xs:    16px;
  --line-height-xxs:   14px;
  --line-height-xxxs:  12px;
  --line-height-xxxxs: 10px;
}
```

---

## 2. Spacing (px)

Base unit: **4px**

| Token | Value |
|---|---|
| `--spacing-xxxs` | 2px |
| `--spacing-xxs` | 4px |
| `--spacing-xs` | 6px *(Light) / 8px (Dark)* |
| `--spacing-s` | 8px |
| `--spacing-sm` | 12px |
| `--spacing-md` | 16px |
| `--spacing-lg` | 24px |
| `--spacing-xl` | 32px |
| `--spacing-xxl` | 40px |
| `--spacing-xxxl` | 48px |
| `--spacing-xxxxl` | 64px |

```css
:root {
  --spacing-xxxs:  2px;
  --spacing-xxs:   4px;
  --spacing-xs:    6px;
  --spacing-s:     8px;
  --spacing-sm:    12px;
  --spacing-md:    16px;
  --spacing-lg:    24px;
  --spacing-xl:    32px;
  --spacing-xxl:   40px;
  --spacing-xxxl:  48px;
  --spacing-xxxxl: 64px;
}
[data-theme="dark"] {
  --spacing-xs: 8px;
}
```

---

## 3. Border (px)

```css
:root {
  --border-xxxs: 1px;
  --border-xxs:  2px;
  --border-xs:   3px;
  --border-s:    4px;
  --border-m:    5px;
  --border-l:    6px;
  --border-xl:   8px;
}
```
*(Identical in Light and Dark.)*

---

## 4. Color — Primitives

### Neutral · Grey
```css
:root {
  --color-black:    #000000;
  --color-grey-90:  #121211;
  --color-grey-80:  #2C2D2D;
  --color-grey-70:  #1C1C1B;
  --color-grey-60:  #464747;
  --color-grey-40:  #464747;
  --color-grey-20:  #818281;
  --color-grey-10:  #F1EEEA;
  --color-grey-00:  #C4C4C4;
  --color-white:    #FFFFFF;
}
```

### Neutral · Beige
```css
:root {
  --color-beige-base:     #C6A669;
  --color-beige-80:       #CFB582;
  --color-beige-60:       #DBC59E;
  --color-beige-40:       #E6D7BA;
  --color-beige-20:       #F1E8D7;
  --color-beige-10:       #F6F6F6;
  --color-beige-contrast: #FBF7F0;
}
```

### Brand · Red
```css
:root {
  --color-brand-red:          #C61617;  /* Main brand red */
  --color-brand-red-80:       #D65247;
  --color-brand-red-60:       #E68276;
  --color-brand-red-40:       #F2AEA3;
  --color-brand-red-20:       #FBDBD5;
  --color-brand-red-contrast: #FFFFFF;
}
```

### Accent · Laiton (Bronze)
```css
:root {
  --color-laiton-base:      #C6A669;
  --color-laiton-80:        #CFB582;
  --color-laiton-60:        #DBC59E;
  --color-laiton-40:        #E6D7BA;
  --color-laiton-20:        #F1E8D7;
  --color-laiton-contrast:  #F1E8D7;
  --color-laiton-darker-20: #A18756;
  --color-laiton-darker-40: #75633F;
  --color-laiton-darker-60: #3B311F;
}
```

### Accent · Laiton Jaune (Gold)
```css
:root {
  --color-laiton-jaune-base:     #C0A669;
  --color-laiton-jaune-80:       #ECCB57;
  --color-laiton-jaune-60:       #F1D57E;
  --color-laiton-jaune-40:       #F6DE9F;
  --color-laiton-jaune-20:       #FAE7BE;
  --color-laiton-jaune-contrast: #E8C328;
}
```

### Accent · Bleu (Blue)
```css
:root {
  --color-bleu-base:      #0B528D;
  --color-bleu-80:        #3D70A2;
  --color-bleu-60:        #7095B8;
  --color-bleu-40:        #A0B9D3;
  --color-bleu-20:        #D3DFEB;
  --color-bleu-contrast:  #FFFFFF;
  --color-bleu-darker-20: #09406D;
  --color-bleu-darker-40: #072D4C;
  --color-bleu-darker-60: #051E33;
}
```

### Accent · Jaune Beige
```css
:root {
  --color-jaune-beige-base:     #E0C332;
  --color-jaune-beige-80:       #ECC637;
  --color-jaune-beige-60:       #F1D57E;
  --color-jaune-beige-40:       #F6E5AF;
  --color-jaune-beige-20:       #FAF3D9;
  --color-jaune-beige-contrast: #FFEFD7;
}
```

### Accent · Promo / Success (Green)
```css
:root {
  --color-promo-base:     #009A58;
  --color-promo-80:       #48BF73;
  --color-promo-60:       #78D594;
  --color-promo-40:       #A2CCB8;
  --color-promo-20:       #CCE4D8;
  --color-promo-contrast: #F0F9F6;
}
```

### Shadow Primitives
Dark overlay scale (`#121211`):
```css
:root {
  --shadow-dark-100: #121211;
  --shadow-dark-90:  #121211E5;
  --shadow-dark-80:  #121211CC;
  --shadow-dark-70:  #121211B2;
  --shadow-dark-60:  #12121199;
  --shadow-dark-50:  #12121180;
  --shadow-dark-40:  #12121166;
  --shadow-dark-30:  #1212114D;
  --shadow-dark-20:  #12121133;
  --shadow-dark-10:  #1212111A;
}
```
Light overlay scale (`#464747`):
```css
:root {
  --shadow-light-100: #121211;
  --shadow-light-90:  #464747E5;
  --shadow-light-80:  #464747CC;
  --shadow-light-60:  #46474799;
  --shadow-light-50:  #46474780;
  --shadow-light-40:  #46474780;
  --shadow-light-30:  #4647474D;
  --shadow-light-20:  #46474733;
  --shadow-light-10:  #4647471A;
}
```

---

## 5. Color — Semantic

These are the tokens to use in components. They resolve differently in Light and Dark.

```css
:root {
  /* Text */
  --semantic-text:                   #3B311F;
  --semantic-text-contrast:          #1D1D1B;
  --semantic-text-contrast-opposite: #FFFFFF;
  --semantic-grey:                   #616161;
  --semantic-grey-darker:            #1F1F1F;

  /* Backgrounds */
  --semantic-bg:                     #FBF7F0;
  --semantic-bg-cards:               #FFFFFF;
  --semantic-bg-nav:                 #F6F6F6;
  --semantic-bg-nav-stronger:        #F1EFEF;
  --semantic-bg-label:               #E2DED8;

  /* Brand */
  --semantic-brand-red:              #B40020;
  --semantic-logo-line:              #B40020;
  --semantic-laiton:                 #A18756;
  --semantic-night-show:             #09406D;

  /* Status */
  --semantic-success-promo:          #009A58;
  --semantic-warning:                #C6A669;

  /* Gradients */
  --semantic-gradient-top:           #C1BDBD00;  /* transparent */
  --semantic-gradient-bottom:        #DCDCDCE5;

  /* Contrast overlays */
  --semantic-contrast-opacity-s:     #0000001A;  /* 10% black */
  --semantic-contrast-opacity-m:     #00000040;  /* 25% black */
}

[data-theme="dark"] {
  --semantic-text:                   #F6F6F6;
  --semantic-text-contrast:          #FFFFFF;
  --semantic-text-contrast-opposite: #1D1D1D;
  --semantic-grey:                   #A3A3A3;
  --semantic-grey-darker:            #515151;

  --semantic-bg:                     #1C1C1B;
  --semantic-bg-cards:               #2C2D2D;
  --semantic-bg-nav:                 #2C2D2D;
  --semantic-bg-nav-stronger:        #474949;
  --semantic-bg-label:               #333332;

  --semantic-brand-red:              #CB1617;
  --semantic-logo-line:              #CB1617;
  --semantic-laiton:                 #C6A669;
  --semantic-night-show:             #3D70A2;

  --semantic-success-promo:          #48BF73;
  --semantic-warning:                #ECCB57;

  --semantic-gradient-top:           #12121200;
  --semantic-gradient-bottom:        #121212E5;

  --semantic-contrast-opacity-s:     #FFFFFF1A;
  --semantic-contrast-opacity-m:     #FFFFFF40;
}
```

## 6. Shadows — Semantic

```css
:root {
  --shadow-xs: #46474733;
  --shadow-s:  #4647474D;
  --shadow-m:  #46474780;
  --shadow-l:  #464747B2;
  --shadow-xl: #464747E5;
}
[data-theme="dark"] {
  --shadow-xs: #12121133;
  --shadow-s:  #1212114D;
  --shadow-m:  #12121166;
  --shadow-l:  #12121199;
  --shadow-xl: #121211B2;
}
```

---

## Dart Reference (Flutter)

```dart
// AppColors — primitives
static const Color brandRed        = Color(0xFFC61617);
static const Color laitonBase      = Color(0xFFC6A669);
static const Color bleuBase        = Color(0xFF0B528D);
static const Color white           = Color(0xFFFFFFFF);
static const Color black           = Color(0xFF000000);
static const Color grey90          = Color(0xFF121211);

// AppThemeColors — semantic (use via Theme.of(context))
// Light
static const Color semanticText    = Color(0xFF3B311F);
static const Color semanticBg      = Color(0xFFFBF7F0);
static const Color semanticBgCards = Color(0xFFFFFFFF);
static const Color semanticBrandRed= Color(0xFFB40020);
// Dark
static const Color semanticTextDark    = Color(0xFFF6F6F6);
static const Color semanticBgDark      = Color(0xFF1C1C1B);
static const Color semanticBgCardsDark = Color(0xFF2C2D2D);
static const Color semanticBrandRedDark= Color(0xFFCB1617);
```
