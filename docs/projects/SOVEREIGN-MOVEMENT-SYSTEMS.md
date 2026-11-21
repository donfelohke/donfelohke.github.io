# Sovereign Movement Systems

- **Record ID:** WAR-SMS
- **Primary domain:** WARENA · CAPABILITY
- **Related domains:** NAKEBUSEN · ROOT; IKAI · MIRROR; GENJE · EXPRESSION; FELOH Corpus
- **Canonical repository:** [donfelohke/WARENA](https://github.com/donfelohke/WARENA)
- **Canonical research source:** [Sovereign Movement Systems — Research Dossier](https://github.com/donfelohke/WARENA/blob/main/docs/research/SOVEREIGN-MOVEMENT-SYSTEMS-RESEARCH-2026-11-21.md)
- **Status:** RESEARCH / SYSTEMS LANDSCAPE
- **Stage:** researched
- **Last reviewed:** 2026-11-22
- **Publication decision:** YES — concise research overview on `/work/`; canonical systems research remains in WARENA.

## 01 · Proposition

Sovereign Movement Systems studies mobility, energy, computation and local infrastructure as one socio-technical system. The working proposition “EVs are compute boxes in motion” is a systems lens, not a complete description of a vehicle.

The research treats an electric vehicle as transport machinery, electrochemical storage, power electronics, distributed embedded computing, a safety-critical product and an asset within a local transport and energy economy.

## 02 · Research questions

- Where can open software, interoperable interfaces, local energy and repairable infrastructure increase operator control?
- How should vehicle, battery, charging, energy supply, embedded control and application compute be separated?
- Which open-source projects are suitable for particular layers, targets and licences?
- How do Kenyan policy, county infrastructure, local duty cycles, repair practices and energy access shape the system?
- How can virtual-first research proceed without confusing simulation with physical or safety validation?

## 03 · Prior art and existing systems

The WARENA dossier surveys Automotive Grade Linux and SoDeV, Eclipse OpenBSW, Zephyr, EVerest, Linux SocketCAN, QEMU, Renode and associated toolchains. It also identifies Kenyan electric-mobility policy and charging guidance, plus East African research on solar microgrids, two-wheelers and urban battery practices.

These are candidate upstream projects and research sources, not selected dependencies, partners or deployed systems.

## 04 · Architecture

The research boundary contains seven connected layers:
1. Energy supply.
2. Storage and conversion.
3. Vehicle and drivetrain.
4. Embedded control.
5. Application compute.
6. Network and services.
7. Governance and lifecycle.

A Linux application or edge-compute node is not a replacement for a qualified motor controller or battery-management system. Safety-critical functions remain separately engineered and validated.

## 05 · Experiments

**Proposed, not completed:** virtual-first investigation using Linux SocketCAN with `vcan`, supported QEMU or Renode targets, recorded or synthetic test vectors, protocol decoding, deterministic tests and fault injection. Any hardware-in-the-loop or physical work requires a separate electrical and safety plan.

No vehicle, charger, battery system, microgrid, V2X network or embedded controller is claimed as built or validated.

## 06 · Findings and limitations

The source research finds no single universal open EV SDK covering every vehicle, battery, motor controller, charger and safety function. Tooling and suitability are target-specific. Simulation cannot establish real motor response, battery safety, electromagnetic compatibility, thermal behaviour, braking performance or roadworthiness.

This record is RESEARCH only. It is not an installation design, procurement decision, operational service guarantee or safety approval.

## 07 · Provenance

- [Canonical WARENA research dossier](https://github.com/donfelohke/WARENA/blob/main/docs/research/SOVEREIGN-MOVEMENT-SYSTEMS-RESEARCH-2026-11-21.md)
- [FELOH Corpus Master Research Dossier](https://github.com/donfelohke/feloh-corpus/blob/main/docs/F3L0H-MASTER-RESEARCH-DOSSIER-2026-11-21.md)
- [WARENA repository](https://github.com/donfelohke/WARENA)

WARENA owns the specialist systems research. This record is a curated publication summary, not a replacement source.
