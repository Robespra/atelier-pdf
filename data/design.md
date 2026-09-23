---
version: alpha
name: Puy du Fou
description: Brand design guide for Puy du Fou digital products (apps, web, kiosks). Baroque, theatrical and warm. Color, type and spacing tokens mirror the Figma library "Design System App" (modes Light and Dark); every color has a "-dark" twin.
colors:
  primary: "#B40020"
  primary-dark: "#CB1617"
  primaryContrast: "#FFFFFF"
  semanticBrandRed: "#B40020"
  semanticBrandRed-dark: "#CB1617"
  semanticColorlogoLine: "#B40020"
  semanticColorlogoLine-dark: "#CB1617"
  semanticLaiton: "#A18756"
  semanticLaiton-dark: "#C6A669"
  semanticNightShow: "#09406D"
  semanticNightShow-dark: "#3D70A2"
  semanticBackground: "#FBF7F0"
  semanticBackground-dark: "#1C1C1B"
  semanticBackgroundCards: "#FFFFFF"
  semanticBackgroundCards-dark: "#2C2D2D"
  semanticBackgroundNav: "#F6F6F6"
  semanticBackgroundNav-dark: "#2C2D2D"
  semanticBackgroundNavStronger: "#F1EFEF"
  semanticBackgroundNavStronger-dark: "#474949"
  semanticBackgroundLabel: "#E2DED8"
  semanticBackgroundLabel-dark: "#333332"
  semanticText: "#3B311F"
  semanticText-dark: "#F6F6F6"
  semanticBasicContrastText: "#1D1D1B"
  semanticBasicContrastText-dark: "#FFFFFF"
  semanticBasicContrastOpposite: "#FFFFFF"
  semanticBasicContrastOpposite-dark: "#1D1D1D"
  semanticGrey: "#616161"
  semanticGrey-dark: "#A3A3A3"
  semanticSucessPromo: "#009A58"
  semanticSucessPromo-dark: "#78D594"
  semanticWarningYellow: "#C6A669"
  semanticWarningYellow-dark: "#ECCB57"
  semanticErrorRed: "#B40020"
  semanticErrorRed-dark: "#E68276"
  semanticContrastOpacityS: "#0000001A"
  semanticContrastOpacityS-dark: "#FFFFFF1A"
  semanticContrastOpacityM: "#00000040"
  semanticContrastOpacityM-dark: "#FFFFFF40"
  semanticGradientTop: "#C1BDBD00"
  semanticGradientTop-dark: "#12121200"
  semanticGradientBottom: "#DCDCDCE5"
  semanticGradientBottom-dark: "#121212E5"
  laitonJauneContrast: "#E8C328"
  black: "#000000"
typography:
  headline01:
    fontFamily: Georgia
    fontSize: 48px
    fontWeight: 700
    lineHeight: 48px
  headlineSans01:
    fontFamily: Arial
    fontSize: 48px
    fontWeight: 700
    lineHeight: 48px
  headline02:
    fontFamily: Georgia
    fontSize: 36px
    fontWeight: 700
    lineHeight: 40px
  headlineSans02:
    fontFamily: Arial
    fontSize: 36px
    fontWeight: 700
    lineHeight: 36px
  headline03:
    fontFamily: Georgia
    fontSize: 28px
    fontWeight: 700
    lineHeight: 28px
  headlineSans03:
    fontFamily: Arial
    fontSize: 28px
    fontWeight: 700
    lineHeight: 28px
  headline04:
    fontFamily: Georgia
    fontSize: 20px
    fontWeight: 700
    lineHeight: 28px
  headlineSans04:
    fontFamily: Arial
    fontSize: 20px
    fontWeight: 700
    lineHeight: 24px
  largeBody01:
    fontFamily: Arial
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  largeBodySerif01:
    fontFamily: Georgia
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  italicBody01:
    fontFamily: Georgia
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
  bodyLargeSerif:
    fontFamily: Georgia
    fontSize: 18px
    fontWeight: 400
    lineHeight: 24px
  regularBody01:
    fontFamily: Arial
    fontSize: 16px
    fontWeight: 400
    lineHeight: 20px
  regularBodyBold01:
    fontFamily: Arial
    fontSize: 16px
    fontWeight: 700
    lineHeight: 20px
  regularBodySerif01:
    fontFamily: Georgia
    fontSize: 16px
    fontWeight: 700
    lineHeight: 20px
  smallBody02:
    fontFamily: Arial
    fontSize: 14px
    fontWeight: 400
    lineHeight: 18px
  smallBody02Bold:
    fontFamily: Arial
    fontSize: 14px
    fontWeight: 700
    lineHeight: 18px
  smallBodySerif02:
    fontFamily: Georgia
    fontSize: 14px
    fontWeight: 400
    lineHeight: 18px
  smallBody03:
    fontFamily: Arial
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  smallNavBoldUppercase01:
    fontFamily: Arial
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 18px
  sheet: 28px
  full: 9999px
spacing:
  xxxs: 2px
  xxs: 4px
  xs: 6px
  xs-dark: 8px
  s: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
  xxxl: 48px
  xxxxl: 64px
  page-margin: 20px
  hit-area-min: 48px
components:
  button-primary:
    backgroundColor: "{colors.semanticBrandRed}"
    textColor: "{colors.primaryContrast}"
    typography: "{typography.regularBody01}"
    rounded: "{rounded.full}"
    height: 46px
  button-primary-dark:
    backgroundColor: "{colors.semanticBrandRed-dark}"
    textColor: "{colors.primaryContrast}"
  button-secondary:
    backgroundColor: "{colors.semanticText}"
    textColor: "{colors.semanticBasicContrastOpposite}"
    typography: "{typography.regularBody01}"
    rounded: "{rounded.full}"
    height: 46px
  button-secondary-dark:
    backgroundColor: "{colors.semanticText-dark}"
    textColor: "{colors.semanticBasicContrastOpposite-dark}"
  button-outline:
    backgroundColor: "{colors.semanticBackground}"
    textColor: "{colors.semanticText}"
    typography: "{typography.regularBody01}"
    rounded: "{rounded.full}"
    height: 46px
  chip:
    backgroundColor: "{colors.semanticBackgroundNavStronger}"
    textColor: "{colors.semanticBasicContrastText}"
    typography: "{typography.smallBody03}"
    rounded: "{rounded.full}"
  chip-dark:
    backgroundColor: "{colors.semanticBackgroundNavStronger-dark}"
    textColor: "{colors.semanticBasicContrastText-dark}"
  badge:
    backgroundColor: "{colors.laitonJauneContrast}"
    textColor: "{colors.black}"
    typography: "{typography.smallNavBoldUppercase01}"
    rounded: "{rounded.full}"
  card:
    backgroundColor: "{colors.semanticBackgroundCards}"
    textColor: "{colors.semanticText}"
    typography: "{typography.smallBody02}"
    rounded: "{rounded.md}"
  card-dark:
    backgroundColor: "{colors.semanticBackgroundCards-dark}"
    textColor: "{colors.semanticText-dark}"
  input:
    backgroundColor: "{colors.semanticBackgroundCards}"
    textColor: "{colors.semanticText}"
    typography: "{typography.regularBody01}"
    rounded: "{rounded.xs}"
  overlay:
    backgroundColor: "{colors.semanticBackgroundNav}"
    textColor: "{colors.semanticText}"
    rounded: "{rounded.sheet}"
  overlay-dark:
    backgroundColor: "{colors.semanticBackgroundNav-dark}"
    textColor: "{colors.semanticText-dark}"
---

# Puy du Fou: Design Guide

Read this before designing any Puy du Fou screen, in any product. The YAML above is the closed token set: pick from it, never invent colors, sizes, radii or fonts. The sections below say how to use it. Every color has a `-dark` twin; always design Light and Dark.

## Overview

Baroque, theatrical, warm. Deep red and aged brass on parchment by day; a stage in the dark by night. Photography and illustration carry the spectacle; the interface around them stays quiet, opaque and solid, like a printed programme handed out at the entrance. No glassmorphism, blur or translucent panels.

## Encounter

What the product should do to the person using it. Use it to choose between options the tokens allow; it never overrides tokens or accessibility.

**What it feels like**
- **Scent:** wood smoke, warm hay, beeswax, crushed grass at the edge of the arena.
- **Atmosphere:** the hour the day cools and the torches get lit; the hush before a show begins.
- **Material:** parchment, aged brass, oak, red stage velvet, a wax seal, cut paper.
- **Emotion:** wonder held in check; anticipation; being taken by the hand.
- **Social signal:** for families who want to be transported, not sold to. History told by the fire, never like a museum label.
- **What stays:** the day you still talk about months later.

**What it does, and how**
- **It warms, never chills.** Parchment and warm ink at page level; white only for cards; pure black only for show and night content.
- **It stages, then steps back.** Photography is the stage, full-bleed; the interface is the programme in your hand, calm below it. Text on a photo only with a scrim. With no photo, type becomes the stage: one word in Georgia at the largest size, a few small words around it, tight leading. Keep it for high moments only.
- **It tells, then informs.** Serif names the story; sans carries what you need to act.
- **It guides, one gesture at a time.** One red action per screen; the next step always obvious.
- **It turns a chore into a small ritual.** A code, an empty state, an error gets one cut-out illustration and a line in the storyteller's voice. Illustrations can sit in a round medallion (pale rim, soft shadow), like a cameo or a wax seal, and may overlap the edge of a title or an image. One or two per screen, never scattered.
- **Light means "now".** On dark, a warm red glow behind the subject signals something live. Brass and gold are for ceremonial marks only.
- **It never hurries you, never shouts.** No flashing, no stacked promotions, no urgency tricks. Motion settles, it doesn't bounce.

## Colors

- **Brand red** (`semanticBrandRed`): the only color of action. One dominant red element per screen.
- **Laiton** (`semanticLaiton`): aged brass for dividers, icons, ornament. Not for body text.
- **Night blue** (`semanticNightShow`): night shows and premium moments.
- **Parchment** (`semanticBackground`) under every page; **white** (`semanticBackgroundCards`) for cards only.
- **Ink** (`semanticText`): warm brown-black, never pure black.
- **Status:** `semanticSucessPromo`, `semanticErrorRed`, `semanticWarningYellow`. Never color alone.
- **Scrims:** `semanticGradientTop/Bottom` only behind text on photos.

## Typography

- **Georgia (serif)** is the narrative voice: titles, names of shows and places, welcomes, confirmations.
- **Arial (sans)** is the functional voice: labels, buttons, times, prices, forms.
- Use only the styles in the YAML. `regularBody01` is the default text; nothing readable below 12px.
- Uppercase only for badges and short section labels (`smallNavBoldUppercase01`), a few words, never letter-spaced.

## Layout

- Mobile first; one clear column of content, then widen with more margin, not more elements.
- 4px spacing base. `md` inside components, `lg` between related blocks, `xl`+ between sections. `page-margin` on mobile.
- The most important thing first and largest. Content that doesn't serve the person's goal on this screen leaves it.
- Tap targets at least `hit-area-min` (48px).

## Elevation & Depth

Depth is tonal: parchment page, white card, a 1px `semanticBackgroundNavStronger` outline. On photos or varied backgrounds, replace the solid outline with a soft transparent ring (a 1px shadow at 6 to 8% ink), which adapts to any background. Shadows only when a surface floats above another (overlays, sheets, toasts): soft, two-layer, `#464747` in Light, `#121211` in Dark. No glows, halos or colored shadows.

## Shapes

Soft pills for actions (buttons, chips, badges: `full`); gentle corners for content (cards `md`, overlays `sheet` on top corners, inputs `xs`). Borders 1px to outline, 2px for focus and selection. A border never repairs weak hierarchy.

## Components

The YAML gives the core recipes: primary, secondary and outline buttons, chip, badge, card, input, overlay. Before inventing a new pattern, check whether one of these does the job. A product's own library can extend them, but keeps these colors, shapes and type roles.

- **Item without a box.** For a list of shows, places or offers: the image with `md` corners and a category badge in its top-left corner; below it, on the page, the title in Georgia, a 1px rule, then the details as plain text (duration, price). No card container around the whole.
- **Frame for hover and selection.** A 1px ink frame with a small gap around the whole item, like a picture frame. Not a shadow, not a color change.
- **Split action.** A pill carrying the label, next to a round button carrying the arrow. Label and direction are two shapes that belong together.

## Do's and Don'ts

- Do give each screen one primary action, in brand red.
- Do let photography lead and keep the interface calm around it.
- Do write like a storyteller: "Votre aventure commence ici", not "Booking confirmed". Errors are empathetic and offer a way out; empty states always lead somewhere.
- Do respect WCAG AA: 4.5:1 for text. `semanticWarningYellow` is never text; `semanticLaiton` and `semanticSucessPromo` only for icons or text 24px and above.
- Do keep motion short and calm: most transitions under 300ms, 400ms maximum. See Craft.
- Don't invent tokens, or use primitives directly.
- Don't use emoji, anywhere.
- Don't use gradients, glows, blur or textures for decoration.
- Don't mix icon styles: one outline family, one size per level.
- Don't nest cards, box every element, or turn a sentence into a row of metric tiles.
- Don't use em dashes in copy.

## Craft

Small details that compound. Apply them everywhere.

**Type**
- Balance headlines so lines have even length and no orphan word (`text-wrap: balance`); use `pretty` for paragraphs.
- On the web, render text antialiased on macOS (`-webkit-font-smoothing: antialiased`) at the root, not per element.

**Shape and alignment**
- Nested corners are concentric: outer radius = inner radius + padding, rounded to the nearest token. Never the same radius inside and out.
- Align optically, not only geometrically. Asymmetric icons (play, arrows, chevrons) often need a 1 to 2px nudge to look centered.
- Give images a 1px inner outline at 10% ink (10% white in Dark) so they sit on the page instead of floating.

**Motion**
- Ease-out for anything entering or leaving the screen; never ease-in. Ease-in-out only for things moving from one place to another on screen.
- Press feedback is immediate: opacity to 0.7 plus a subtle scale to 0.97. Never scale alone.
- Never animate from nothing: start scale at 0.95 or more, and move from 8px, not from off-screen.
- Overlays, menus and popovers grow from their trigger, not from the center.
- Interactions must be interruptible: if the person changes their mind mid-animation, the interface follows at once. Use transitions for interactions; keep keyframe sequences for one-off entrances.
- Entrances are split and staggered: title, text, then actions, 80 to 100ms apart, rising 8px while fading in. The first view of a page is the only place motion may take longer than 400ms.
- A short blur (2px) during a crossfade can bridge two states; blur is for motion only, never for a resting surface.
- Remove animation from actions people repeat many times a day. Delight turns into delay.
- Always give feedback: loading while waiting, a clear success when done.
- On the web, once one tooltip is open, the next one opens instantly without delay or animation.

**Composition**
- Unity first: repeated elements share size, spacing and style so the screen reads as one idea.
- Then a little variety to hold attention: a larger feature card, an illustration among photos, a change of rhythm. Never variety for its own sake.