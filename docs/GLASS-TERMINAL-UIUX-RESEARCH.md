# Glass Terminal — UI / UX / XR research and design constitution

**Date:** 2026-11-20  
**Status:** RESEARCH / DESIGN DIRECTION  
**Publication status:** Research document only; no standalone Glass Terminal page is currently published. An earlier page candidate is retained in `docs/archive/`.  
**Scope:** Cross-project interface research, native desktop architecture, spatial interaction, reflective optics, accessibility and embodied creative computing.

## 1. Executive thesis

Glass Terminal is not a glassmorphism skin, a new operating system claim or an XR product announcement. It is a shared design and interaction research programme that connects:

- **Glass:** a visual and physical-material vocabulary involving translucency, diffusion, reflection, refraction, depth and occlusion.
- **Terminal:** inspectable state, composability, command precision, programmability, reproducible configuration and human control.
- **UI/UX:** information hierarchy, discoverability, accessibility, interaction feedback, recovery and measurable task outcomes.
- **XR:** spatial references, anchored content, 3D composition, multimodal input, embodiment and immersive presentation.

The hypothesis is that a reflective and spatial interface can extend conventional computing without sacrificing the precision, composability, accessibility and user sovereignty associated with terminal-oriented systems.

## 2. Project authority and boundaries

| Project | Owns | Does not own |
|---|---|---|
| WARENA | Native computing, Linux desktop, graphics, window management, spatial services, XR runtime integration, packaging and reproducibility | IKAI participant semantics, GENJE creative authorship or transactions |
| IKAI | Reflective experience, mirror optics, participant authority, consent, privacy and memory semantics | General desktop/XR platform ownership or unrestricted sensing |
| GENJE | Movement, choreography, sound, livecoding, performance, authored scores and creative context | Biometric classification, participant profiling or IKAI memory policy |
| FELOH Corpus | Shared terminology, evidence, provenance, governance and cross-domain alignment | Duplicated specialist implementation |
| NAKEBUSEN | Grounded beauty/craft practice and the only commercial/transaction interface | XR research ownership or WARENA infrastructure policy |

**ONLY NAKEBUSEN TRANSACTS.** This research does not create a product, booking channel, service, availability promise or payment workflow.

## 3. Architecture principles

1. Keep conventional desktop computing useful without XR hardware, tracking, network collaboration or AI.
2. Keep the desktop and XR runtime as distinct architectural layers.
3. Prefer native GNU/Linux, native graphics and inspectable interfaces for WARENA system applications.
4. Keep Guile/Scheme available as a programmable extension and orchestration language where technically appropriate.
5. Preserve WARENA's current X11-first policy: X.Org baseline; XLibre compatibility experiment; Wayland remains secondary/experimental.
6. Treat OpenXR as an application/runtime interoperability API, not a display server, desktop compositor or complete shell.
7. Keep browser HTML/CSS as the public documentation/presentation layer only; it is not the WARENA or IKAI application architecture.
8. Do not make JavaScript, a browser engine, a remote service, analytics or a cloud account mandatory system dependencies.
9. Keep IKAI reflection participant-directed; no face identification, diagnosis, scoring, hidden profiling or covert surveillance.
10. Keep GENJE movement meaning authored and contextual; no automatic emotion, health, identity, personality, ability or intent inference.

## 4. Interface material system

### Digital surface effects

- Use translucency selectively for navigation, contextual controls and secondary panels.
- Keep primary reading surfaces sufficiently opaque.
- Maintain readable contrast over variable backgrounds.
- Provide solid-color fallbacks when backdrop filtering is unavailable.
- Avoid stacking multiple blur layers or using blur as a substitute for hierarchy.
- Test the actual rendered foreground/background combinations rather than assuming palette tokens guarantee contrast.

CSS `backdrop-filter` applies effects to the area behind an element; it is a rendering effect, not physical glass. MDN documents its behavior and browser compatibility: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter

### Physical optical systems

| Material/system | Principle | Research responsibility |
|---|---|---|
| Frosted glass | Diffuse transmission | Surface readability and ambient-light behavior |
| Two-way mirror | Partial reflection/transmission | IKAI optical geometry, illumination balance and viewing angles |
| Transparent OLED | Transparent emissive display | Display integration, black level, contrast and ambient-light constraints |
| Electrochromic glass | Electrically variable transmission | Adaptive physical environment; exploratory only |

These systems are not interchangeable. A CSS blur does not validate mirror optics, and a transparent display is not equivalent to a two-way mirror.

## 5. Interaction grammar

| Modality | Primary responsibility | Guardrail |
|---|---|---|
| Keyboard | Commands, text, precision and navigation | Essential tasks remain keyboard-operable |
| Pointer | Fine-grained desktop manipulation | Avoid hover-only information |
| Touch | Direct manipulation | Adequate target size and alternatives to complex gestures |
| Gaze | Attention and target identification | Never silently execute consequential actions |
| Hands/controllers | Spatial selection and manipulation | Not the only input path |
| Voice | Optional dictation and explicit commands | Visible activation, privacy and non-voice alternatives |
| Body/movement | Performer-authored creative input | Consent, capture control and no inferred personal labels |

Separate target identification, selection, preview and execution. Provide undo, cancellation, confirmation and recoverable state. Measure ergonomics and fatigue rather than assuming gesture interaction is inherently natural.

## 6. Spatial architecture

OpenXR 1.1 is the first interoperability standard to investigate for native XR application/runtime integration. The OpenXR specification defines sessions, spaces, actions, interaction profiles and composition layers. Reference spaces establish coordinate relationships; they do not imply one universal world coordinate system.

Primary source: https://registry.khronos.org/OpenXR/specs/1.1/html/xrspec.html  
Registry and conformance material: https://registry.khronos.org/OpenXR/

The implementation investigation must separately qualify:
- Runtime and device availability on the target Linux hardware.
- Graphics API and compositor integration.
- Reference-space behavior and tracking stability.
- Interaction profiles and optional hand/gaze extensions.
- Composition-layer support and performance.
- Session lifecycle, device loss and recovery.
- Buildability, licensing and reproducible packaging.

Monado remains a Linux runtime candidate in WARENA research, not a qualified deployment. No headset or hardware compatibility is claimed.

## 7. Accessibility and usability requirements

The public web page and any browser-facing documentation should use WCAG 2.2 as a reference baseline. Native and XR applications require platform-specific accessibility evaluation in addition.

- Maintain WCAG text contrast and non-text contrast where applicable.
- Provide visible keyboard focus and ensure fixed navigation does not obscure focused controls.
- Reflow at narrow widths and support text enlargement.
- Provide non-drag alternatives for essential pointer interactions.
- Provide keyboard/switch alternatives to spatial gestures.
- Use comfortable target sizes; the public page targets at least 44 CSS pixels for primary controls.
- Respect reduced-motion settings.
- Support reduced transparency as progressive enhancement only; browser support is not universal.
- Provide forced-colors and print fallbacks where appropriate.
- Test on real devices, with keyboard-only navigation and assistive technology.

References:
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Reduced transparency media feature: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency

## 8. Performance and evaluation

Do not equate visual fidelity with performance or usability. Record the hardware, software versions, display mode, environmental conditions and task definitions for each test.

| Domain | Measures |
|---|---|
| Desktop | Input-to-display latency, frame pacing, GPU/CPU cost, idle memory, startup and recovery |
| Glass UI | Contrast, legibility, blur cost, translucency fallback and scrolling stability |
| XR | Motion-to-photon latency, tracking stability, frame pacing, reference-space drift and interaction error |
| Ergonomics | Head/neck movement, eye strain, arm fatigue, session duration and task load |
| Privacy | Data collected, purpose, consent, local processing, retention, deletion and access |
| Reproducibility | Build inputs, package versions, configuration, hardware and repeatable test procedure |

Record negative results, unknowns and device-specific limitations.

## 9. Roadmap and maturity gates

1. **Research consolidation:** reconcile the WARENA, IKAI, GENJE and Corpus source documents.
2. **Desktop design system:** specify tokens, surface roles, navigation, focus, keyboard grammar and accessibility.
3. **Native desktop feasibility:** evaluate X11-first composition and native graphics without a browser runtime dependency.
4. **Spatial prototype:** qualify OpenXR runtime/device/graphics integration before implementing application behavior.
5. **IKAI optical experiment:** validate two-way-mirror geometry, illumination, viewing angles, privacy and participant-directed reflection.
6. **GENJE embodied experiment:** begin with authored scores and synthetic movement; evaluate comfort, timing and creative usefulness.
7. **Cross-project integration:** define interfaces and data boundaries; test reproducibility and recovery.

Maturity labels must be attached to individual artefacts: RESEARCH, PROPOSAL, PROTOTYPE, TESTED or DEPLOYED. A document, merged commit or mock-up is not proof of implementation, validation or deployment.

## 10. Public webpage implementation boundary

The current public homepage implements the visual treatment only: immersive glass on the fixed topbar and three-item dock, with the commercial and editorial reading surfaces kept largely opaque. It uses static HTML/CSS, system-font fallbacks, no remote assets, no trackers and no application JavaScript. Glass is progressive enhancement with opaque fallbacks.

A separate Glass Terminal research-page candidate exists only as archived source in `docs/archive/glass-terminal-2026-11-22.html.txt` and `docs/archive/glass-terminal-css-2026-11-22.css.txt`; it is not a deployed public page. Do not cite its former canonical URL as a live experience. Neither the current homepage nor the archived candidate implements an XR shell, desktop compositor, physical optical mirror or sensing system.

The commercial homepage remains NAKEBUSEN-led. The research dossier is a source document, not a separate commercial destination; it does not displace the service catalogue, contact paths, payment disclosure or booking boundary.

## 11. Primary references

- Khronos, OpenXR 1.1 Registry and Specification: https://registry.khronos.org/OpenXR/
- W3C, Web Content Accessibility Guidelines 2.2: https://www.w3.org/TR/WCAG22/
- MDN, CSS `backdrop-filter`: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter
- MDN, `prefers-reduced-transparency`: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency
- Apple, Spatial Layout HIG (platform-specific reference): https://developer.apple.com/design/human-interface-guidelines/spatial-layout/

## 12. Cross-project source records

- WARENA — Desktop, Spatial Computing, Immersive XR & Opt-in Intelligence Architecture (2026-11-20)
- IKAI — Mirror Technology and Scholarly Research (2026-11-18)
- GENJE — Embodied Spatial Interaction Research (2026-11-14)
- FELOH Corpus — Spatial XR and AI Cross-Project Alignment (2026-11-20)

No implementation, headset qualification, optical validation, user study, commercial release or deployment is claimed by this document.


## Accepted design parameters — 2026-11-22

- Glass intensity: immersive, restricted to navigation and selected framing surfaces.
- Canvas: hybrid editorial surfaces with selective glass; reading and price cards remain opaque.
- Motion: ambient and slow; respect reduced-motion and reduced-transparency preferences.
- Density: balanced; preserve whitespace and clear service hierarchy.
- Palette: #123B2D, #111111, #F2EFEA, #D4AF37, #E2725B, #033500.
- Type: Cormorant Garamond / Inter / JetBrains Mono.

The design does not authorize a new page, framework, JavaScript runtime, remote font or image-heavy homepage. The commercial single-page structure and mobile dock remain intact.
