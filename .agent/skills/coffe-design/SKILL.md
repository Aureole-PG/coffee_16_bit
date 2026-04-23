---
name: coffe-design
description: >
  Project-specific design patterns for the Coffee project (Astro 6.x).
  Trigger: When designing UI components, layouts, or pages in this project.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Creating new pages in `src/pages/`
- Creating components in `src/components/`
- Creating layouts in `src/layouts/`
- Adding styles to any `.astro` file
- Working with assets (images, fonts, icons)
- Implementing responsive design

---

## Visual Identity & Art Direction

### Aesthetic
**Retro-modern 16-bit Pixel Art** with a "Lofi Coffee Shop" atmosphere.

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Deep Earth | `#311E1E` | Primary canvas and background |
| Muted Slate | `#546581` | Structural containers, inactive cards |
| Dusty Rose | `#8B6465` | Beveling, shadows, borders (depth) |
| Soft Petal | `#CE999B` | Labels, descriptions, secondary text |
| Vivid Rose | `#FCB5B7` | Alerts, price tags, primary CTAs |

### Depth & Beveling (SNES-style)
```css
/* Example: 3D button effect */
.element {
  background: #546581;
  box-shadow: 
    4px 4px 0 #8B6465,   /* Mid-tone shadow */
    inset 1px 1px 0 rgba(255,255,255,0.1); /* Highlight */
}
```

---

## UX Strategy & Responsive Architecture

### Core Principle
**Mobile-First** design optimized for one-handed thumb interaction.

### Navigation
- **Bottom Dock:** Persistent navigation with chunky, stylized pixel icons
- **Touch Targets:** Minimum 44x44px (WCAG compliance)

### Tablet Optimization
- Single-column scroll → Multi-column **Master-Detail** grid
- Product selection with split view

### Tactile Feedback
- **Pixel-shifting animations:** Visual "pressed" states simulating physical buttons
```css
.btn:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #8B6465;
}
```

---

## Key Interface Features

### Dynamic Roast Slider
- Pixelated bean sprite
- Transitions across rose and earth tones based on selection

### Layered Depth
- `#8B6465` as mid-tone shadow for `#546581` elements
- Mimics classic SNES-style 3D buttons

### Animated Micro-interactions
- Pixelated "steam" effects on hot beverage cards
- Haptic-aligned transition cues

### Visual Performance
- Use `image-rendering: pixelated` for crisp pixel art on high-DPI displays
```css
.pixel-art {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

---

## File Structure

```
src/
├── assets/           # Images, fonts, icons (prefer SVG with pixel aesthetic)
├── components/      # Reusable UI components (.astro)
├── layouts/          # Page layouts (.astro)
├── pages/            # Routes (.astro)
└── styles/          # Global styles (optional)
```

---

## Component Pattern

```astro
---
import coffeeBean from '../assets/coffee-bean.svg';
---

<div class="coffee-card">
  <img src={coffeeBean.src} alt="Coffee" class="pixel-art" />
  <slot />
</div>

<style>
  .coffee-card {
    background: #546581;
    box-shadow: 4px 4px 0 #8B6465;
    border-radius: 8px;
  }
  
  .pixel-art {
    image-rendering: pixelated;
  }
</style>
```

---

### Pixel Button (16-bit)

```astro
---
import Button from '@/components/ui/Button.astro';
---

<Button variant="primary" size="md">Start Game</Button>
<Button variant="secondary" size="sm">Volver</Button>
```

```css
.pixel-button {
  --pixel-border: 8px;
  --btn-bg: #FCB5B7;
  --btn-fg: #311E1E;
  clip-path: polygon(
    var(--pixel-border) 0,
    calc(100% - var(--pixel-border)) 0,
    100% var(--pixel-border),
    100% calc(100% - var(--pixel-border)),
    calc(100% - var(--pixel-border)) 100%,
    var(--pixel-border) 100%,
    0 calc(100% - var(--pixel-border)),
    0 var(--pixel-border)
  );
}

.pixel-button__inner {
  box-shadow:
    inset -6px -6px 0 #8B6465,
    inset 6px 6px 0 rgba(255, 255, 255, 0.25),
    6px 6px 0 #311E1E;
}
```

---\n\n## Pixel Card (16-bit Clickable)\n\n```astro\n---\nimport Card from '@/components/ui/Card.astro';\n---\n\n<Card href="/recetas/mocca" variant="primary" title="Mocca" description="Fine grind, 1:1.5 ratio" />\n<Card variant="secondary" title="French Press" description="Coarse grind, 1:15 ratio" />\n```\n\n```css\n.pixel-card {\n  --pixel-border: 8px;\n  --card-bg: #FCB5B7;\n  --card-fg: #311E1E;\n  clip-path: polygon(\n    var(--pixel-border) 0,\n    calc(100% - var(--pixel-border)) 0,\n    100% var(--pixel-border),\n    100% calc(100% - var(--pixel-border)),\n    calc(100% - var(--pixel-border)) 100%,\n    var(--pixel-border) 100%,\n    0 calc(100% - var(--pixel-border)),\n    0 var(--pixel-border)\n  );\n}\n\n.pixel-card__inner {\n  box-shadow:\n    inset -6px -6px 0 #8B6465,\n    inset 6px 6px 0 rgba(255, 255, 255, 0.25),\n    6px 6px 0 #311E1E;\n}\n```\n\n---\n\n## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Type check
npm run astro check
```

---

## Resources

- **Astro Docs**: https://docs.astro.build
- **Assets**: Place in `src/assets/`, use pixel-art style
