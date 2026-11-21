# NAKEBUSEN website release evidence matrix

**Purpose:** repeatable QA and release record for the static public website.  
**Status:** checklist template; no test is claimed to have been run by this document.

A green build does not prove the site was deployed. A deployment job does not prove the live page works. Record each stage separately.

## 1. Change record

| Field | Record |
|---|---|
| Change ID / PR | |
| Source commit | |
| Reviewer | |
| Scope | |
| Risk | Copy / layout / interaction / accessibility / dependency / release |
| Rollback commit | |
| Decision | HOLD / APPROVED FOR DEPLOYMENT / RELEASED |

## 2. Source and content review

- [ ] Locs remains the primary commercial path; Digital is secondary.
- [ ] Public service names, scope and starting prices match the NAKEBUSEN source of record.
- [ ] No braiding service is introduced.
- [ ] Enquiry disclosure remains clear: an enquiry does not confirm a booking.
- [ ] ONLY NAKEBUSEN TRANSACTS; IKAI, GENJE and WARENA are not alternative checkout surfaces.
- [ ] M-PESA Support Us remains a manual, user-initiated footer treatment; no API, STK push, automated verification or fabricated success state.
- [ ] No private customer information, unapproved payment identifiers or unsupported service promises are added.
- [ ] English remains the default; Kiswahili is an explicit optional path, not an automatic replacement.
- [ ] Gallery remains text-linked and is not embedded as a required visual dependency.

## 3. Automated checks

Record command, environment, commit, exit status and log/artifact link.

| Check | Command / workflow | Result | Evidence |
|---|---|---|---|
| HTML / content validation | | NOT RUN | |
| CSS / static checks | | NOT RUN | |
| Build | | NOT RUN | |
| Link validation | | NOT RUN | |
| Playwright / browser tests | | NOT RUN | |
| Dependency / security review | | NOT RUN | |

Do not change NOT RUN to PASS without a retained result tied to the reviewed commit.

## 4. Manual browser and accessibility review

Test at least one narrow mobile viewport and one desktop viewport.

- [ ] Keyboard-only navigation and logical focus order.
- [ ] Visible focus indicators and no keyboard traps.
- [ ] Semantic landmarks, heading hierarchy and accessible control names.
- [ ] Touch targets approximately 44 CSS px where practical.
- [ ] Text, controls and focus states meet contrast requirements.
- [ ] Reduced-motion preference is respected.
- [ ] Navigation, Locs / Digital / Connect anchors and language controls work.
- [ ] Forms and WhatsApp links have clear labels and expected destinations.
- [ ] Layout has no horizontal overflow at tested widths.
- [ ] Screenshots identify viewport, browser, commit and date.

## 5. Deployment and live verification

| Stage | Required evidence | State |
|---|---|---|
| PR checks | Workflow run IDs and commit SHA | NOT VERIFIED |
| Merge | Merge commit SHA | NOT VERIFIED |
| Pages deployment | Successful deployment run and target | NOT VERIFIED |
| Live smoke test | URL, timestamp, browser/device, observed result | NOT VERIFIED |
| Rollback readiness | Known-good commit and recovery steps | NOT VERIFIED |

After deployment, verify the public URL on mobile and desktop, test all primary navigation and enquiry routes, and confirm that the deployed content corresponds to the intended merge commit.

## 6. Release decision

**Decision:** HOLD / APPROVED FOR DEPLOYMENT / RELEASED  
**Evidence reviewed:**  
**Known limitations:**  
**Reviewer and date:**

A release must not be described as live until the deployment and post-deployment smoke-test rows have evidence. Do not deploy solely because this checklist exists.

## 7. Product and governance boundary

Preserve the approved commercial-first, balanced presentation; Liquid Glass Terminal + Editorial Hybrid visual direction; forest-green top bar; terracotta/ochre accents; readable typography; reduced-motion support; lightweight static delivery; and privacy-first operation. Any material change to public service facts, payment behaviour, language policy or commercial terms requires explicit owner review.

**ONLY NAKEBUSEN TRANSACTS.**