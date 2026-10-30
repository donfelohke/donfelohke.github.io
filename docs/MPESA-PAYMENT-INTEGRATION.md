# M-PESA Buy Goods — Website Integration & Saved Payment Message

**Status:** RESEARCH / DRAFT — NOT PUBLISHED  
**Date:** 30 October 2026  
**Website:** https://donfelohke.github.io/  
**Repository:** donfelohke/donfelohke.github.io  
**Purpose:** Preserve a reusable customer payment message and define a safe staged integration.

> **Publication gate:** The uploaded payment sticker identifies Buy Goods Till **3511456** and merchant name **FELIX LWOVA**. This document records what the sticker displays; it does not independently verify that the till is active, that NAKEBUSEN is authorised to collect through it, or that it is configured for Daraja. Do not add the till number or QR to the public website until the owner confirms those points and approves publication.

## 1. Source-derived payment details

From the one-page QR sticker supplied by the owner:

- Payment rail: M-PESA Lipa na M-PESA — Buy Goods
- Till number: **3511456**
- Merchant name printed: **FELIX LWOVA**
- QR instruction: **SCAN TO PAY**
- Alternative instruction printed: **LIPA NA BONGA via MY ONEAPP or Dial *126#**
- The sticker displays M-PESA, Airtel Money and T-Kash network marks.

The sticker is evidence of the printed payment instructions, not proof of current till status, ownership authority, settlement, or API access.

## 2. Saved customer payment message

### Reusable WhatsApp / SMS draft — hold until payment instructions are approved

Hello,

Thank you for choosing NAKEBUSEN.

To make your payment, use the M-PESA Buy Goods Till:

**Till Number: 3511456**  
**Merchant Name: FELIX LWOVA**

Before confirming, check that the merchant name displayed matches the instructions above. Enter only the amount agreed with NAKEBUSEN.

After payment, please share the M-PESA confirmation message and your service or enquiry reference with us on **+254 719 635 415**.

Your payment is treated as received only after it has been verified. Please contact us if the displayed merchant details do not match.

**NAKEBUSEN · GRACE · GRIT · GLORY**

### Short version

NAKEBUSEN payment (Buy Goods): Till **3511456** · Merchant **FELIX LWOVA**. Pay only the agreed amount and verify the merchant name before confirming. Send the M-PESA confirmation and your service reference to **+254 719 635 415**. Payment is confirmed after verification.

**Do not send either version to customers until till ownership/authority, active status and the approved NAKEBUSEN collection arrangement have been confirmed.**

## 3. Recommended website placement — footer

Place the payment entry in the **global website footer**, within a compact subsection labelled **Payments**. It should be secondary utility information, not a hero action, primary navigation item, service card, or booking CTA.

Recommended footer order:

1. **NAKEBUSEN** — brand identity and short descriptor.
2. **Explore** — Crown, Digital and About navigation.
3. **Contact** — WhatsApp and email.
4. **Payments** — approved payment instructions or a link to the dedicated payment details section.

Keep the payment subsection visually restrained and text-first, consistent with the existing site. On narrow screens, stack the footer groups in the same order. Do not add a QR image to the footer by default; if a QR is later approved, provide it on a dedicated payment view with a clear amount/reference workflow and accessible text instructions.

### Footer copy — safe pre-approval version

> **Payments**  
> Payment instructions are provided after your service and amount have been agreed. Please use only payment details confirmed directly by NAKEBUSEN. We verify payments before confirming receipt.

### Footer copy — publish only after the publication gate is cleared

> **M-PESA Buy Goods**  
> Till: **3511456**  
> Merchant: **FELIX LWOVA**  
> Pay only the agreed amount. Confirm the displayed merchant name before authorising payment, then share your M-PESA confirmation and service reference with NAKEBUSEN.

The till number and merchant identity must remain unpublished until active status, ownership/authority, NAKEBUSEN's collection arrangement and publication approval are confirmed. Keep customer enquiry, booking confirmation and payment as separate steps.

### Language parity

If published, add equivalent Kiswahili wording to the site's existing language dictionary. Preserve the same merchant identity, amount-checking instruction, payment-verification condition and booking boundary in both languages. Have the Kiswahili copy reviewed before release.

## 4. Integration options

| Stage | Approach | Scope |
|---|---|---|
| 1 — Manual | Static Buy Goods instructions | Publish approved till details and payment steps; verify receipts manually |
| 2 — Dynamic QR | Safaricom Dynamic QR API | Backend requests a transaction-specific QR for an agreed amount/reference |
| 3 — STK Push | Daraja M-PESA Express | Customer receives a payment prompt and explicitly authorises it |
| 4 — Reconciliation | C2B confirmation callbacks / merchant reporting | Match confirmed transactions to service references and ledger entries |

### Safaricom references

- Daraja 3.0 portal: https://daraja.safaricom.co.ke/apis/GettingStarted
- Dynamic QR API: https://developer.safaricom.co.ke/apis/DynamicQRCode
- M-PESA Express: https://developer.safaricom.co.ke/apis/MpesaExpressSimulate
- M-PESA Business Till Guide: https://www.safaricom.co.ke/images/Downloads/the-mpesa-business-till-guide.pdf
- Safaricom Buy Goods Guide: https://www.safaricom.co.ke/images/Downloads/Buy-goods-guides.pdf

Safaricom's Dynamic QR documentation describes QR generation for selected Lipa na M-PESA merchant transactions, including Buy Goods (`BG`), with merchant identifier, amount and transaction reference. Confirm production eligibility for this specific till with Safaricom before implementation.

Daraja M-PESA Express is a merchant-initiated payment prompt. It is not a silent debit: the customer must authorise the prompt on their phone.

## 5. Target architecture — only after approval

```text
NAKEBUSEN website
      |
      | Customer selects agreed service / amount
      v
NAKEBUSEN payment backend
      |
      +---- Daraja authentication (server-side secrets)
      |
      +---- Dynamic QR or STK Push request
      |
      v
Safaricom M-PESA
      |
      | Customer authorises payment
      v
Registered callback endpoint
      |
      +---- Validate callback and transaction identifiers
      +---- Enforce idempotency / duplicate handling
      +---- Match amount, merchant and service reference
      +---- Record payment status in ledger
      v
Payment status: PENDING / CONFIRMED / FAILED / REVIEW
      |
      v
NAKEBUSEN operator verifies and updates customer
```

Security and correctness requirements:

- Never place Daraja consumer secrets, passkeys, initiator credentials or access tokens in browser JavaScript, HTML, Git or public configuration.
- Use HTTPS for backend endpoints and callbacks.
- Treat browser redirects, screenshots and customer-submitted SMS as supporting evidence, not authoritative automated settlement signals.
- Verify server-side transaction callbacks / merchant statements; validate the expected shortcode, amount, receipt and reference.
- Make callback processing idempotent and retain a minimal audit trail.
- Do not mark a booking as confirmed merely because a payment request was created or a QR was generated.
- Define refund, reversal, duplicate-payment and unmatched-payment handling before go-live.
- Keep payment records out of the public repository.

## 6. Business and operational checks before publication

- [ ] Confirm Till 3511456 is active with Safaricom.
- [ ] Confirm the merchant name and the authorised account owner.
- [ ] Confirm NAKEBUSEN is authorised to collect customer payments through this till.
- [ ] Confirm the payment channel and supported customer networks with Safaricom.
- [ ] Confirm whether the till is eligible for Dynamic QR and/or Daraja callbacks / M-PESA Express.
- [ ] Confirm whether the business requires a separate business-owned till or shortcode.
- [ ] Approve customer wording and Kiswahili translation.
- [ ] Define who verifies payments and how receipts are recorded.
- [ ] Test the customer journey in sandbox before requesting production credentials.
- [ ] Test a small, controlled live transaction before public launch.
- [ ] Update the website, privacy/operations documentation and service workflow together.

## 7. Decision

**Recommended now:** Preserve the reusable payment message in this draft and prepare the footer placement, but do not expose the till publicly or claim automated payment integration yet. The pre-approval footer copy in section 3 is safe to use without publishing unverified merchant details.

**Recommended later:** Start with manual Buy Goods instructions once ownership and authority are confirmed. Add Daraja only when automated confirmation and reconciliation provide enough operational value to justify a backend and its ongoing support.

Specification status is not implementation. A generated QR is not a payment confirmation. A successful API response is not proof of settlement.
