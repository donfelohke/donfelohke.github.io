# Homepage motion and depth implementation — 19 November 2026

## Scope

This implementation extends the existing NAKEBUSEN homepage refresh on the review branch. It changes the visual depth and interaction feedback of the main page without introducing a framework, animation library, external font, autoplay media, analytics, or a new runtime dependency.

## Design decisions

- **Layer hierarchy:** the hero receives a restrained layered surface and ambient brand-colour light; service cards remain opaque and readable; only the sticky header and floating dock use functional glass.
- **Material depth:** subtle inset highlights, low-elevation shadows, border definition and surface gradients distinguish the hero, discovery paths and service cards without turning the page into a stack of floating panels.
- **Tactile feedback:** desktop pointer hover and press states use short, small translations and shadow changes. Keyboard focus remains clearly visible.
- **Entrance motion:** the hero uses a brief one-time fade/translate entrance. Section reveal is a progressive enhancement using the native CSS View Timeline where supported; unsupported browsers retain the complete static layout.
- **No perpetual motion:** no looping animation, auto-moving banner, parallax, flashing, autoplay or motion-dependent content.
- **Reduced motion:** spatial transforms and entrance/reveal animations are disabled when `prefers-reduced-motion: reduce` is active. Non-spatial colour and border feedback remains available.
- **Reduced transparency:** the hero, service cards and discovery paths fall back to opaque surfaces and remove decorative blur/depth treatment where appropriate.
- **AMOLED and contrast:** the dark theme retains a true-black page canvas with raised #151515/#171717 content surfaces and warm, high-contrast text. Shadows define elevation without requiring a bright background.
- **Mobile:** the motion system does not depend on hover. Touch targets, section dock and existing safe-area spacing remain unchanged.

## Evidence and rationale

1. W3C WCAG 2.2 Technique C39 recommends using `prefers-reduced-motion` to suppress interaction-triggered motion for users who request it: https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html
2. W3C explains that non-essential motion can cause vestibular discomfort and that interaction-triggered animation should be disableable: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions
3. Google Chrome's modern web guidance recommends progressive enhancement and feature detection for scroll-driven animation, respecting reduced motion, and animating compositor-friendly properties such as opacity and transform: https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/scrollytelling.md
4. Google Chrome's motion guidance recommends restrained, performant motion, reduced-motion support and avoiding excessive or flashing animation: https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-behaviors/motion.md

## Verification added

Playwright coverage checks that a service card responds to pointer hover when motion is allowed, that hero/section animations and spatial transforms are disabled under reduced motion, and that the homepage does not gain horizontal overflow.

Automated tests do not establish visual quality on every device or full WCAG conformance. Release review should still include a real mobile OLED device, keyboard operation, TalkBack/VoiceOver, zoom/text-spacing checks and a reduced-transparency setting.

## Boundaries preserved

- Loc care remains the primary commercial journey.
- Published service prices, location, WhatsApp destinations, booking boundary and M-PESA/Support Us footer remain unchanged.
- WARENA remains the technical capability, not a separate checkout.
- Research and creative practice remain non-commercial.
- No production deployment is performed by this branch update.
