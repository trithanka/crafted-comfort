---
name: Crafted Comfort
description: A resort you can buy from. Ivory ground, forest-green bands, brass hairlines, Marcellus over Archivo, rounded photographs with soft green shadows.
colors:
  ground: "#f5efe4"
  card: "#fbf8f2"
  tone: "#ebe2d2"
  accent-tint: "#e7dfcf"
  ink: "#1d2a22"
  muted: "#5b5d52"
  accent: "#1f4d3a"
  accent-deep: "#163a2b"
  on-accent: "#f5efe4"
  on-accent-soft: "#cfdccf"
  ink-raised: "#295a45"
  on-ink-soft: "#cfdccf"
  on-ink-muted: "#c3d0c1"
  brass: "#b08a4f"
  brass-text: "#7d5f2e"
  brass-light: "#d9c29a"
typography:
  hero-title:
    fontFamily: "Marcellus, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(3.5rem, 7vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Marcellus, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(3.25rem, 6.6vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Marcellus, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.125rem, 3.8vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.5vw, 1.375rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  sm: "12px"
  strip: "16px"
  md: "20px"
  panel: "28px"
  pill: "999px"
spacing:
  margin: "clamp(16px, 4vw, 56px)"
  gap: "clamp(16px, 2vw, 28px)"
  section: "clamp(96px, 12vw, 200px)"
  section-company: "clamp(48px, 5.5vw, 88px)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
  button-white:
    backgroundColor: "{colors.on-accent}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
    height: "52px"
  button-white-hover:
    backgroundColor: "{colors.on-accent-soft}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
  button-ink-hover:
    backgroundColor: "{colors.ink-raised}"
  button-tone:
    backgroundColor: "{colors.tone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
  button-tone-hover:
    backgroundColor: "{colors.accent-tint}"
  button-line:
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "12px 26px"
  chip:
    backgroundColor: "{colors.tone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
    height: "48px"
  chip-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  field-input:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "52px"
  hero-strip-tile:
    textColor: "{colors.on-accent}"
    rounded: "{rounded.strip}"
    padding: "18px 20px 22px"
  hero-strip-tile-active:
    backgroundColor: "{colors.accent}"
  company-tile:
    backgroundColor: "{colors.card}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
  keyfacts-cell:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    padding: "20px 24px 22px"
  offer-row:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  planner-result:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
  contact-card:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.panel}"
  partner-panel:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.panel}"
  footer:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.on-accent}"
---

# Design System: Crafted Comfort

## Overview

**Creative North Star: "The Resort You Can Buy From"**

Every page arrives the way a guest arrives at Sonapur: a photograph first, full-bleed, under a forest-green veil, with the name set in Marcellus like lettering cut into a brass plate. The furniture and cottages are shown in use, never on a white sweep. The world is warm and unhurried: an ivory ground with sand panels, forest green that takes over whole fields (hero veil, planner result, contact card, partner panel, footer), and brass kept to hairlines, bullets, rules, the motto and focus.

Surfaces are soft and held: pill buttons, photographs and cards rounded at 20px, the larger green cards at 28px, all lifted by low green-tinted shadows rather than grey ones. Motion is slow and courteous: photographs wipe open and settle, the hero rotates through the companies with a timer bar and a pause control, hero photos drift slower than the page, and every travelling effect has a reduced-motion path.

The system refuses two things: the flat company-directory grid the site used to be (square corners, one sans face, a sage ground), and the black-and-gold showroom. Proof is specific and checkable (places, materials, services, a phone number); there are no reviews, ratings or customer counts anywhere.

**Key Characteristics:**
- Photograph first on every page: full-bleed hero under a green veil, then rounded photographs throughout.
- Ivory ground, sand panels, forest green owning whole fields, brass only for hairlines and small marks.
- Marcellus for the name, display and headings; Archivo for everything people read or press.
- Pill buttons, 20px photographs and cards, 28px green cards, soft green-tinted shadows.
- Slow reveals and wipes, a rotating hero you can pause, parallax on hero photos, cross-page view transitions.

## Colors

A warm resort palette: ivory and sand for the ground, one forest green that owns fields, and brass for the engraved details.

### Primary
- **Forest Green** (accent): the house colour. Default button fill, the planner result, the contact card, the partner panel, the selected chip, the reading-progress bar, selection highlight, scrollbar and form accent colour. On light ground it is also the colour of text links and company-card calls to action.
- **Deep Forest** (accent-deep): button hover and the footer field.
- **Raised Forest** (ink-raised): form fields and slot options inside green cards; hover for the ink button.

### Secondary
- **Brass** (brass): the 56px section rule under headings, bullet dots, hairline borders (at 35% alpha) around the key-facts card, input caret. Non-text only: at 2.78:1 on ivory it never carries words.
- **Brass Text** (brass-text): the brass that can carry words and outlines on light ground: key-fact labels and the default focus ring (5.17:1 on ivory).
- **Pale Brass** (brass-light): brass on green. The hero motto, page-hero meta line, footer column headings, mosaic calls to action, the hero timer bar, focus rings and field focus borders inside green fields, hover for white buttons in green cards.

### Neutral
- **Ivory** (ground): page ground, header on inner pages, and the text colour on green (on-accent carries the same value).
- **Linen** (card): cards that sit on ivory or over photographs: key-facts cells, service rows, company tiles under their photo.
- **Sand** (tone): the plate's photograph panel, the tone field, tone buttons, unselected chips.
- **Sand Tint** (accent-tint): the companies band behind the mosaic; hover for tone buttons and chips.
- **Forest Ink** (ink): body text on light ground (13:1 on ivory), the dark field behind hero photos while they load, the ink button.
- **Moss Grey** (muted): secondary text on light ground (5.86:1 on ivory).
- **Sage Mist** (on-accent-soft / on-ink-soft): secondary text on green; also white-button hover.
- **Pale Sage** (on-ink-muted): the quietest text on deep green (footer base line).

### Named Rules
**The Brass Is Engraving Rule.** Brass marks, it never fills. Rules, dots, hairlines, timer bars, the motto and focus rings; never a button, a band or a card. On ivory, words in brass use brass-text; on green, brass-light.

**The Green Owns The Field Rule.** Forest green appears as a whole field (veil, card, panel, footer) or as a small accent (link, chip, progress bar), never as a thin decorative tint in between.

**The Veil Rule.** Text over a photograph always sits on the forest veil: a left-to-right gradient from rgba(16, 40, 30, 0.78–0.8) to 0.2–0.25, plus a bottom gradient to 0.55–0.6; mosaic tiles use a foot veil from 0 at 20% to 0.92 at the bottom.

## Typography

**Display Font:** Marcellus (self-hosted woff2, latin and latin-ext, weight 400; fallback Iowan Old Style, Georgia, serif)
**Body Font:** Archivo (self-hosted variable woff2, weights 100–900, widths 62–125%; fallback Helvetica Neue, Arial, sans-serif)

**Character:** Marcellus is an inscription serif with flared, carved strokes, read as resort signage; Archivo is a sturdy grotesque that keeps prices, places and form labels plain. Body text sets tabular numerals throughout so rates and phone numbers line up.

### Hierarchy
- **Hero title** (Marcellus 400, clamp(3.5rem, 7vw, 6.5rem), line-height 0.98, -0.02em): "Crafted Comfort" on the home hero only.
- **Display** (Marcellus 400, clamp(3.25rem, 6.6vw, 6.5rem), line-height 1, -0.015em, balanced): company names on company-page heroes, max 16ch.
- **Headline** (Marcellus 400, clamp(2.125rem, 3.8vw, 3.5rem), line-height 1.08, -0.01em, balanced): section headings and the planner's answer.
- **Title** (Archivo 700, lead size, line-height 1.25): item names in lists and stages. Card names over photographs (company tiles, service rows, hero strip) switch to Marcellus 400.
- **Lead** (Archivo 400, clamp(1.1875rem, 1.5vw, 1.375rem), line-height 1.45, max 38–44ch): the one about sentence under a title. The home motto uses this size in Marcellus, in pale brass.
- **Body** (Archivo 400, 1.0625rem, line-height 1.55, prose max 62ch): running text.
- **Label** (Archivo 400, 0.875rem, line-height 1.45): breadcrumbs, key-fact labels, form labels (at 650), notes.

### Named Rules
**The Signage Rule.** Marcellus is for names and headings, always at weight 400; it is never bolded, never used for body copy, labels or buttons.

**The Five Sizes Rule.** The ramp is display, heading, lead, body, small, plus the one hero title. Card and panel headings scale the heading clamp down inside their container; they do not introduce a new role.

## Layout

The page is a single column of full-width bands with a fluid side margin (`margin`) and a fluid gutter (`gap`). The home page breathes at the full section rhythm (`section`); company pages tighten it to `section-company` and pull section heads closer (clamp(24px, 3vw, 40px) below the heading instead of clamp(40px, 5vw, 72px)).

- **Home hero:** at least max(680px, 100svh), content anchored to the foot: title, motto, lead, two pill buttons, the pause control, then the four-company strip (four columns, two under 960px, a compact two-by-two under 640px with the descriptions hidden).
- **Companies mosaic:** three columns (1.3fr 1fr 1fr) with rows of clamp(250px, 24vw, 360px); the lead company spans two rows, the fourth spans two columns. Two columns under 960px with the lead full-width; one column of 280px tiles under 640px.
- **Company hero:** min(80svh, 780px), photograph full-bleed behind, copy and the key-facts card at the foot. The photo stops a foot (clamp(44px, 5vw, 64px)) above the bottom so the card rests half on the photo, half on ivory. Key facts run four columns, two under 1080px, one under 420px.
- **Service rows:** three columns (photo minmax(220px, 30%), body, side minmax(200px, 22%)); the side drops under the body at 1080px; one column with a 16:10 photo under 640px.
- **Splits:** planner and intro splits at 5fr / 7fr; the plate at 1fr / 1fr, min-height 88svh; the partner panel at 63fr / 37fr, min-height 100svh, inset by the side margin. All collapse to one column at 860px.
- **Footer:** 12-column grid (brand 1–4, two link columns, contact 9–12), stacking at 960px.

Touch targets hold 44px minimum on links, tabs, pause and footer links; buttons are 52px.

## Elevation & Depth

Depth is soft and lifted, tinted forest green rather than grey. Cards and photographs float a little above the ivory ground; hover lifts them further. Photographs carry depth of their own through the veil, a slow settle from scale and parallax.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 2px 6px -2px rgba(22, 58, 43, 0.12), 0 24px 48px -28px rgba(22, 58, 43, 0.45)`): company tiles, service rows, the plate frame, grow tiles, the planner result.
- **Lift** (`box-shadow: 0 4px 10px -4px rgba(22, 58, 43, 0.16), 0 36px 64px -30px rgba(22, 58, 43, 0.55)`): company tiles on hover and focus, the key-facts card on the hero foot, the contact card.
- **Button hover** (`box-shadow: 0 14px 28px -16px rgba(22, 58, 43, 0.6)`): pill buttons on hover, with a 2px rise.

### Named Rules
**The Green Shadow Rule.** Every shadow is cast in deep forest (rgba(22, 58, 43, …)) with a long negative spread: a pool under the object, never a hard edge or a grey halo.

## Shapes

Soft, held corners everywhere a hand would touch. Buttons and chips are full pills (`pill`). Photographs and cards round at `md` (20px): company tiles, service rows, the key-facts card, the plate frame, grow tiles, the planner result. The large green cards round at `panel` (28px): the contact card and the partner panel. Hero-strip tiles round at `strip` (16px), dropping to `sm` (12px) on phones; form fields and slot options use `sm`. The partner panel's photograph is rounded on top only, sinking out of the panel's foot. Bullets are 7px brass circles. Hairlines are 1px brass (key facts, contact divider) or 1px pale brass at 28% around hero-strip tiles.

## Components

### Buttons
Tactile pills that lift on hover and press back down.
- **Shape:** full pill (999px), 52px tall, 14px 30px padding, Archivo 650 at body size, optional 18px arrow icon that slides 4px on hover.
- **Primary:** forest green with ivory text; hover deep forest plus the button-hover shadow and a 2px rise; active presses to translateY(1px) scale(0.98).
- **White:** ivory with green text, for use on green fields and photographs; hover sage mist (pale brass inside the contact card and company hero).
- **Ink:** forest ink, hover raised forest. **Tone:** sand with ink text, hover sand tint.
- **Line:** transparent with a 2px ivory border, on the home hero only; hover fills ivory with ink text.
- **Focus:** 3px solid brass ring, 3px offset; pale brass inside green fields.

### Chips
- **Style:** sand pills (999px), 48px tall, Archivo 650, used as the radio options of the trial-visit planner.
- **State:** hover sand tint; checked fills forest green with ivory text; press scales to 0.96. Without script each chip also shows where the option can be tried.

### Cards / Containers
- **Company mosaic tile:** a photograph filling a 20px card with the foot veil, the Marcellus name (clamp(1.625rem, 2.4vw, 2.25rem), larger on the lead tile), a sage-mist description and a pale-brass call to action. Rest shadow, lift shadow and a 6px rise on hover; the photo scales to 1.04.
- **Key facts:** a 20px card of four linen cells divided by 1px brass hairlines; brass-text labels over Archivo 650 answers (places, hours, phone). Rests on the foot of the company hero with the lift shadow.
- **Service row:** a linen 20px card in three parts: photo, Marcellus name with a price list (tabular numerals, right-aligned), and a side column with the place and one button. The photo wipes open from the left as the row arrives and scales to 1.05 on hover.
- **Planner result:** a forest-green 20px card answering the chosen option with a Marcellus headline (where), a lead line (when) and an action.
- **Partner panel:** an inset forest-green 28px panel with a rounded-top photograph sinking off its foot, drifting slowly (24s scale and translate loop).

### Inputs / Fields
- **Style:** inside the contact card. Raised-forest fields, 52px tall, 12px radius, 1px border of ivory at 16%, ivory text, sage placeholder, sage-mist 650 labels at small size. Selects carry an inline chevron; dates use the dark colour scheme.
- **Slots:** radio rows in the same raised-forest shape; the checked row fills forest green.
- **Focus:** the border turns pale brass, no outline.
- **Error:** invalid fields take a coral border; the status line reads in pale coral for errors and pale green for success.
- **Submit:** full-width white pill, 56px, hover pale brass.

### Navigation
- **Header:** wordmark (52px, 44px under 480px) then Archivo 650 links, 44px tall. On the home page the header sits over the hero in ivory; on company pages it is sticky on ivory, tightens to 8px padding with a 40px wordmark after 24px of scroll, hides while reading down past 320px and returns on any scroll up or keyboard focus.
- **States:** a 2px underline grows from the left on hover and for the current page (green on ivory, ivory on green); with reduced motion it is a static brass underline at 6px offset.
- **Breadcrumbs:** small sage-mist trail over the company hero, slash-separated, hover pale brass.

### Hero strip (signature)
The four companies along the foot of the home hero, each a 16px tile of deep forest at 60% with a pale-brass hairline. Marcellus name, small sage-mist description. The tile in focus fills forest green and a 3px pale-brass timer bar fills along its foot over 5s, then the hero photo cross-fades (0.9s) to the next company. Hover or focus on a tile shows and pauses it; the pause button stops the rotation for touch visitors. With reduced motion the timer bar and pause control are hidden and the fade shortens to 0.3s.

### Brass section rule
A 56px by 2px brass rule set 20px under a section heading, like the line on an engraved plate.

### Footer
Deep forest field: logo and one line, link columns headed in Marcellus pale brass (1.375rem), 44px link targets, and a base line in pale sage with a small white button.

### Motion
- **Reveals:** elements rise 24px and fade over 0.7s on the ease-out curve (cubic-bezier(0.16, 1, 0.3, 1)), staggered 80ms per item; hero copy rises on load at 90ms steps.
- **Wipes:** hero photographs open from the edge with clip-path over 1.1s while the image settles from scale 1.12–1.15.
- **Parallax:** from main.js, the home hero photo moves at 0.28 of the scroll and company-hero photos at 0.08.
- **Reading progress:** a 3px forest-green bar across the top of company pages, driven by the scroll timeline where supported.
- **View transitions:** cross-page navigation fades by default.
- **Reduced motion:** reveals become a 0.3s opacity fade; wipes, drift, parallax, the progress bar, smooth scrolling and view transitions are turned off.

## Do's and Don'ts

### Do:
- **Do** open every page on a full-bleed photograph under the forest veil, with the name in Marcellus.
- **Do** round photographs and cards at 20px, large green cards at 28px, and make every button and chip a full pill.
- **Do** cast shadows in deep forest with the rest and lift values, and lift on hover.
- **Do** keep brass to rules, dots, hairlines, timer bars, the motto and focus rings; use brass-text for brass words on ivory and pale brass on green.
- **Do** let forest green own a whole field (veil, planner result, contact card, partner panel, footer).
- **Do** say specific, checkable things: places, materials, prices, services and the phone number, set in tabular numerals.
- **Do** give every moving thing a reduced-motion path and every rotating thing a pause.

### Don't:
- **Don't** show reviews, ratings, star marks, customer counts or testimonials; none exist.
- **Don't** return to the flat directory look: square corners, one sans face, a flat sage ground, borders instead of depth.
- **Don't** build a black-and-gold showroom: no black fields, no gold fills, no brass buttons or brass bands.
- **Don't** set Marcellus bold or use it for body text, labels or buttons.
- **Don't** set text directly on a photograph without the forest veil.
- **Don't** use grey or hard offset shadows.
- **Don't** use brass (#b08a4f) for text on ivory; it is below text contrast there.
- **Don't** add marketing superlatives; the photographs and the facts do the persuading.
