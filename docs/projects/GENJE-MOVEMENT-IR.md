# GENJE Movement Intermediate Representation

- **Record ID:** GENJE-MIR-01
- **Primary domain:** GENJE · EXPRESSION
- **Related domains:** IKAI · MIRROR; WARENA · CAPABILITY; FELOH Corpus
- **Canonical repository:** [donfelohke/Genje](https://github.com/donfelohke/Genje)
- **Canonical research source:** [GENJE Movement IR and Motion Research](https://github.com/donfelohke/Genje/blob/main/docs/GENJE-MOVEMENT-IR-AND-MOTION-RESEARCH-2026-11-20.md)
- **Status:** RESEARCH / ARCHITECTURE PROPOSAL
- **Stage:** researched
- **Last reviewed:** 2026-11-22
- **Publication decision:** YES — concise research overview on `/work/`; canonical creative and movement research remains in GENJE.

## 01 · Proposition

GENJE proposes a human-authored Movement Intermediate Representation (Movement IR) as a semantic and temporal layer connecting choreography, established movement notation, music, observed motion, generated motion and creative-work provenance.

The proposed architecture is:

**Human-authored Movement IR → notation / music / observation / generation / rendering adapters → performer-reviewed practice**

The initial direction is text- and score-first. Camera, wearable, XR and model-based pathways are optional later research tracks.

## 02 · Research questions

- How can movement be represented in relation to sound, space, time and other performers?
- How can authored scores, notation, measurements and generated sequences remain distinguishable?
- How should adapters disclose assumptions, uncertainty and information loss?
- How can cultural specificity, authorship, consent and practitioner interpretation be preserved?
- Which existing notation systems, formats and tools should be reused rather than recreated?

## 03 · Prior art and existing systems

The canonical GENJE research audits Labanotation/Kinetography Laban, Motif, Laban Movement Analysis, Bartenieff-related practice, LaMoGen/LabanLite, motion-capture and pose-estimation systems, movement datasets, music/movement formats and livecoding systems.

LaMoGen is treated as a research adapter candidate, not GENJE's canonical ontology or a complete implementation of Labanotation or LMA. Dataset and dependency licences require independent review before reuse.

## 04 · Architecture

The proposed model separates:
- authored choreography and movement scores;
- established notation and analysis vocabularies;
- music and performance timing;
- observed or measured motion;
- rendered or generated motion;
- contextual, cultural and provenance records.

A score is not a sensor measurement. A measurement is not an interpretation. Generated motion is not automatically human-authored or culturally validated.

## 05 · Experiments

**Proposed, not completed:** define a minimal event/phrase schema; test round-trip adapters against selected established notation and music formats; record conversion loss and uncertainty; conduct practitioner review with consent and attribution; compare text/score-first workflows before considering camera or model pathways.

No Movement IR implementation, motion-capture pipeline, choreography engine or model integration is claimed as implemented.

## 06 · Findings and limitations

The source research recommends an independent, human-authored semantic layer and explicit adapters rather than adopting one dataset schema or generation model as canonical. It warns against a universal African movement grammar, biometric identity, persistent body profiles, automated artistic judgement and autonomous release of generated choreography.

The work remains RESEARCH / ARCHITECTURE PROPOSAL.

## 07 · Provenance

- [Canonical GENJE Movement IR research](https://github.com/donfelohke/Genje/blob/main/docs/GENJE-MOVEMENT-IR-AND-MOTION-RESEARCH-2026-11-20.md)
- [GENJE repository](https://github.com/donfelohke/Genje)
- [FELOH Corpus Master Research Dossier](https://github.com/donfelohke/feloh-corpus/blob/main/docs/F3L0H-MASTER-RESEARCH-DOSSIER-2026-11-21.md)

GENJE owns the specialist creative and movement research. This record is a curated publication summary, not a replacement source.
