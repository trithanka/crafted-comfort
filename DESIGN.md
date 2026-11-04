---
name: Crafted Comfort
description: Soft blush ground, near-black ink, terracotta accent. One typeface, square corners, flat surfaces.
colors:
  ground: "#efe8de"
  tone: "#e4dacb"
  accent-tint: "#dccbb6"
  ink: "#2a1710"
  muted: "#62423a"
  accent: "#9a3f1f"
  accent-deep: "#7a2f14"
  on-accent: "#ffffff"
  on-accent-soft: "#eed8cc"
  ink-raised: "#3d2a22"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 6.6vw, 6.5rem)"
    fontWeight: 820
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  heading:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.125rem, 3.8vw, 3.5rem)"
    fontWeight: 760
    lineHeight: 1.02
    letterSpacing: "-0.025em"
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
  small:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0px"
spacing:
  margin: "clamp(16px, 4vw, 56px)"
  gap: "clamp(16px, 2vw, 28px)"
  section: "clamp(96px, 12vw, 200px)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-tone:
    backgroundColor: "{colors.tone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-white:
    backgroundColor: "{colors.on-accent}"
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  input:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: "52px"
  chip:
    backgroundColor: "{colors.tone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
    height: "48px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
---

# Design System: Crafted Comfort

## Overview

**Creative North Star: "The Company Directory"**

The home page does two jobs for the client: say in a few lines who Crafted Comfort is, then show every company it runs. Everything else supports those two. The look is plain and confident: blush ground (a tint of the terracotta itself), near-black type set large, one terracotta for actions and fields, real photographs of each business.

**Key Characteristics:**
- One typeface, Archivo, in five sizes.
- Three colours: sage ground, near-black ink, terracotta (with a light green tint band).
- Square corners, no shadows, no gradients, no decorative motifs.
- Every company gets the same small card: photo, name, what it is, a link.

## Colors

### Primary
- **Terracotta** (`#9a3f1f`): buttons, links, the product-lines field, the about panel and the planner result. White on it is 10:1.
- **Deeper terracotta** (`#7a2f14`): hover and pressed state.

### Tint
- **Clay tint** (`#dccbb6`): the full-width band behind the companies cards.

### Neutral
- **Ground** (`#efe8de`, soft blush so the page never reads as bare white), **Tone** (`#e4dacb`) for alternate sections and secondary buttons, **Ink** (`#2a1710`) for text, the contact form and the footer, **Muted** (`#62423a`) for secondary text, **Raised ink** (`#3d2a22`) for fields on the ink form, **Soft green text** (`#eed8cc`) for secondary text on green.

### Named Rules
**The Three Colour Rule.** Ground, ink, green. Nothing else.

## Typography

Archivo (variable, self-hosted in `fonts/`). Display 820 at `clamp(3.25rem, 6.6vw, 6.5rem)`; Heading 760 at `clamp(2.125rem, 3.8vw, 3.5rem)`; Lead at `clamp(1.1875rem, 1.5vw, 1.375rem)` (bold for item names); Body 17px; Small 14px.

**The Two Line Rule.** Every heading fits on two lines at every width.
**The Five Size Rule.** No sixth size.

## Layout

One pair of side margins, `clamp(16px, 4vw, 56px)`. Sections separated by `clamp(96px, 12vw, 200px)` or a change of ground. Home order: one bento grid (a green intro tile with the name, one sentence and two buttons, then a tile for each of the four companies with a name plate on its photograph),  product lines, try-before-you-buy with the planner, partner panel, contact. Below 860px every split stacks.

## Elevation & Depth

Flat. No shadows.

## Shapes

Square corners everywhere. The only round shapes are the two notches on the contact form ticket.

## Components

### Buttons
Flat fill, square, 52px minimum height. Green primary; ink, tone and white (on green) alternates. Focus: 3px outline outside the button.

### Company entry
Small card on the tone ground, all four in one row so they read at a glance: 4:3 photo, name, what it is, and a "Visit" link; the whole card is one link. Four columns on desktop, two on tablet, two on phones.

### Chips, inputs, navigation
Planner chips are real radio buttons (tone, ink when chosen). Form fields sit on the ink ticket with labels above. Navigation is the logo and three links: Companies, Furniture, Contact.

## Do's and Don'ts

### Do:
- **Do** keep the home hero short and put all companies directly under it.
- **Do** use real photographs of each business, credited when they come from open collections.
- **Do** keep forms honest: they say when a request could not be sent and give the phone number.

### Don't:
- **Don't** add gradients, glow, glass, shadows or decorative patterns.
- **Don't** put a small label above a heading.
- **Don't** show reviews, ratings or customer numbers; none exist.
