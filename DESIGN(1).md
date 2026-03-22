# Design System Specification

## 1. Overview & Creative North Star
### The Creative North Star: "Precision Ether"
This design system moves away from the rigid, boxed-in structures of traditional documentation and corporate portals. Instead, it adopts **Precision Ether**—an aesthetic that balances the industrial reliability of AWS with the lightness of cloud computing. 

The experience is defined by **intentional asymmetry** and **tonal layering**. We bypass the "standard template" look by using exaggerated typographic scales and overlapping elements that break the container. We treat the digital interface as an editorial space where code meets craftsmanship.

## 2. Colors
Our palette is rooted in the high-contrast tension between `primary` (AWS Orange) and `on_secondary_fixed` (Squid Ink).

- **Primary & Accent:** The `primary` (#FF9900) is used sparingly for high-impact CTAs. For depth, we utilize `primary_container` as a glowing foundation behind critical actions.
- **The "No-Line" Rule:** We do not use 1px solid borders to separate sections. Structure is defined exclusively through background shifts. A section might transition from `surface` (#f8f9f9) to `surface_container_low` (#f3f4f4) to signal a change in context.
- **Surface Hierarchy & Nesting:** Treat the UI as physical layers. An "Information Card" (`surface_container_lowest`) should sit atop a `surface_container_low` section to create a natural, soft lift.
- **The "Glass & Gradient" Rule:** To achieve a premium "developer-first" feel, use Glassmorphism for floating navigation and overlays. Use `surface` at 70% opacity with a `20px` backdrop-blur. 
- **Signature Textures:** For Hero backgrounds, use a subtle radial gradient: `primary_container` (#ff9900) at 5% opacity bleeding into `surface`.

## 3. Typography
We utilize a pairing of **Space Grotesk** for technical authority and **Inter** for high-performance readability.

- **Display (Space Grotesk):** Large-scale headers (e.g., `display-lg` at 3.5rem) use tight letter-spacing (-0.02em) to feel architectural and innovative.
- **Headline & Title (Space Grotesk):** Used for section starts. The geometric nature of the font echoes the precision of cloud architecture.
- **Body & Labels (Inter):** System-critical information is set in Inter. Its neutral character ensures that complex technical data remains legible at any scale.
- **Editorial Contrast:** Create hierarchy by pairing a `display-sm` headline with a `label-md` uppercase sub-header in `primary` (#8a5100) to guide the developer's eye.

## 4. Elevation & Depth
Depth is not a shadow; it is a relationship between light and surface.

- **The Layering Principle:** Avoid elevation shadows where possible. Instead, stack your tokens: `surface_container` (lowest) on top of `surface_container_high` provides all the "lift" required for a modern interface.
- **Ambient Shadows:** For "floating" elements like primary buttons or Modals, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(35, 47, 62, 0.06)`. This uses a tinted version of Squid Ink to mimic natural light.
- **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use `outline_variant` (#dbc2ad) at 15% opacity. It should be felt, not seen.
- **Cloud-Like Cards:** Cards should utilize `roundedness.xl` (1.5rem). Apply a subtle inner glow using a 1px `surface_container_lowest` inset shadow to simulate the edge of a cloud.

## 5. Components

### Buttons: The "Glowing" Standard
- **Primary:** Background `primary_container` (#ff9900). On hover, add a box-shadow glow using `primary` at 40% opacity. Transition property: `all 300px cubic-bezier(0.4, 0, 0.2, 1)`.
- **Secondary:** Transparent background with a "Ghost Border." Text color `on_surface`.
- **Tertiary:** No background. Underline appears only on hover using a 2px `primary` stroke.

### Cards & Lists
- **Rule:** Forbid divider lines.
- **Execution:** Use `spacing.8` (2rem) to separate list items. For cards, use `surface_container_low` backgrounds. On hover, the card should transition to `surface_container_lowest` and scale by `1.02`.

### Inputs & Interaction
- **Fields:** Use `surface_container_highest` for the input track. No borders. On focus, a 2px `primary` bottom-border animates from the center.
- **Chips:** `roundedness.full`. Use `secondary_container` with `on_secondary_container` text for a subtle, tech-focused look.

### Cloud Feature Components
- **Code Snippet Containers:** Use `inverse_surface` (#2e3131) with `roundedness.md`. This creates a high-contrast "Squid Ink" block that feels like a native IDE within the white/gray layout.

## 6. Do's and Don'ts

### Do
- Use **asymmetric padding**. For example, a hero section might have `spacing.24` on the top and `spacing.16` on the bottom to create a sense of upward motion.
- Use **Backdrop Blurs** on sticky headers to maintain a sense of "Cloud" transparency.
- Ensure all "innovative" layouts still pass WCAG AA contrast ratios, particularly when using Orange on light backgrounds.

### Don't
- **No 100% Black:** Never use #000000. Use Squid Ink (`on_secondary_fixed`) for the deepest blacks to keep the palette sophisticated.
- **No Sharp Corners:** Avoid `roundedness.none` unless it's for a very specific technical graph. The "Cloud" aesthetic requires the softness of `roundedness.md` or `lg`.
- **No Crowding:** If a layout feels "busy," increase the vertical spacing by one step on the scale (e.g., move from `spacing.12` to `spacing.16`). Space is a premium design element.