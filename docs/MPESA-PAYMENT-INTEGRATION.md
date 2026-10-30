# NAKEBUSEN — M-PESA Payment Architecture & Reconciliation

**Document ID:** NB-PA-01  
**Research baseline:** 30 October 2026  
**Status:** PROPOSED · NOT IMPLEMENTED · NOT PUBLISHED  
**Public payment details:** WITHHELD PENDING SAFARICOM AND ACCOUNT-HOLDER VERIFICATION

## 1. Purpose and decision boundary

Define two separate payment journeys:

1. **NAKEBUSEN service payment** — payment against an agreed service, amount and service reference.
2. **Creator support** — a voluntary contribution supporting independent creative, research, cultural and technical work. It does not purchase a NAKEBUSEN service or product.

The preferred logical design is one payment-information page and, only if Safaricom authorises the arrangement, one collection destination. This is a proposed architecture, not evidence that the existing Till is approved for both purposes.

**Release rule:** Do not publish Till 3511456, the merchant name, the sticker QR, a payment deep link or a payment CTA until activation, account-holder authority, NAKEBUSEN collection authority, permitted purpose(s), fees and settlement arrangements have been confirmed in writing and the account holder has approved publication.

No repository file or public website may contain payment credentials, PINs, passkeys, consumer secrets, initiator credentials, access tokens or private customer transaction data.

## 2. Evidence register

### 2.1 Owner-supplied sticker — source-derived facts

The supplied one-page PDF, `QR_Sticker_3511456_FL.pdf`, displays:

- Rail: Lipa na M-PESA · Buy Goods.
- Till number: **3511456**.
- Printed merchant name: **FELIX LWOVA**.
- QR instruction: **SCAN TO PAY**.
- Alternative instruction: **LIPA NA BONGA via MY ONEAPP or Dial *126#**.
- Network marks for Safaricom M-PESA, Airtel Money and T-Kash.

This proves only what is printed on the supplied sticker. It does not prove current activation, registered ownership, the legal/business relationship between the merchant and NAKEBUSEN, settlement configuration or Daraja eligibility.

### 2.2 Safaricom product distinctions

The M-PESA Business Hub describes:

- **Buy Goods:** merchant collection for goods and services.
- **Business Till:** an enhanced Buy Goods Till with account-management and disbursement functions.
- **Paybill:** recurring/long-term collection by an organisation, with an account identifier.
- **Short-Term Paybill:** fundraising for specified short-term purposes such as medical bills, funerals, weddings, education and charity/catastrophe.
- **Bill Manager:** invoicing, collection, e-receipts and reconciliation.
- **Statements:** daily, monthly and yearly self-service statements, with longer/custom statement periods described in the Hub.

Sources:
- https://hub.m-pesaforbusiness.co.ke/
- https://hub.m-pesaforbusiness.co.ke/merchant-onboarding/self-onboarding

The public descriptions do not establish that voluntary creator contributions are authorised on this particular Buy Goods Till. Do not infer permission from Buy Goods accepting payment for goods/services, nor assume Short-Term Paybill is a general-purpose creator-support product. Ask Safaricom to confirm the correct product and permitted use in writing.

### 2.3 Buy Goods merchant agreement — important limitation

Safaricom's publicly listed Buy Goods Merchant Terms and Conditions PDF is marked **Version 1, March 2012**:
https://www.safaricom.co.ke/images/Downloads/Resources_Downloads/buy_goods_contract.pdf

The retrieved document includes a prohibited-use clause and obligations concerning reconciliation, customer receipts, taxes, customer support, suspension and confidentiality. This is an old listed version; do not represent it as the current contract without confirmation. Its text does not expressly classify this proposed creator-support arrangement. Its prohibited-use wording concerning solicitation is not sufficient to decide whether voluntary creator support is permitted.

**Required evidence:** obtain the current merchant terms applicable to Till 3511456 and written Safaricom guidance on voluntary creator support and any relationship/branding between the merchant and NAKEBUSEN. Safaricom Business support: **M-PESABusiness@Safaricom.co.ke**.

### 2.4 Fees and settlement — do not hard-code a tariff

The Business Hub pages retrieved contain inconsistent published collection tariff figures (including 0.25%, 0.27% and a separate maximum 0.55% statement). Tariffs may vary by product, merchant profile and effective date. Do not put a fee in public copy or financial projections based on these conflicting summaries. Request the exact current tariff, settlement route, timing and withdrawal charges for this Till directly from Safaricom.

## 3. Proposed customer-facing architecture

**NAKEBUSEN website → Payments information page → two separate journeys**

```text
PAYMENTS
  |
  +-- SERVICE PAYMENT
  |     Agreed service / deposit / balance
  |     Commercial transaction
  |     Internal service reference
  |
  +-- CREATOR SUPPORT
        Voluntary contribution
        No service or product purchased
        Internal support reference

          |
          v
  COLLECTION DESTINATION
  Existing Buy Goods Till 3511456
  ONLY IF SAFARICOM CONFIRMS BOTH USES
          |
          v
  MERCHANT-SIDE VERIFICATION
          |
          v
  NAKEBUSEN RECORDS
  Classification · reconciliation · acknowledgement
```

The two purposes must remain distinct in the interface, customer messages, bookkeeping and reporting even if one authorised destination is used.

### 3.1 Before approval

- Do not expose the Till number, merchant name or QR.
- Do not publish a “Buy me a coffee” payment button that routes to an unapproved Till.
- Keep payment instructions in direct customer communication only after the correct account and permitted use are confirmed.
- The public website may omit payment details entirely. A generic statement that instructions are provided after agreement is optional, not mandatory.

### 3.2 After approval

A single Payments page may present two clearly separated panels:
- **Pay for a service** — only after NAKEBUSEN confirms the service, amount and payment stage.
- **Support the work** — voluntary creator contribution, explicitly not a purchase or service payment.

Do not mix both purposes in one ambiguous CTA. Do not imply that support contributions are tax-deductible, charitable donations or payments to a registered non-profit.

## 4. Internal reference conventions

These are internal enquiry/ledger classifications only. They are **not** guaranteed M-PESA Till account-reference fields and must not be presented as such.

| Purpose | Internal reference |
|---|---|
| Retouch & Styling | `NAK-RETOUCH` |
| LOCS Retie | `NAK-SISTERLOCKS` |
| Artificial Locs Installation | `NAK-ARTIFICIAL` |
| Creator support | `FELOH-COFFEE` |

Store the internal reference alongside the actual M-PESA receipt number and verified merchant transaction data. Never assume the Till QR or Buy Goods flow accepts a customer-entered reference unless Safaricom confirms the relevant channel supports it.

## 5. Reconciliation procedure

| Stage | Procedure | Evidence / control |
|---|---|---|
| 1. Initiation | Customer receives instructions for an agreed service or voluntary support | Enquiry/support record and internal reference |
| 2. Authorisation | Customer checks recipient and amount, then authorises M-PESA | Customer's M-PESA transaction |
| 3. Merchant verification | Operator checks the merchant's own Till/App/Hub record or statement | Merchant-side transaction record |
| 4. Classification | Assign service or creator-support category | Internal ledger |
| 5. Reconciliation | Match ledger entries to merchant statement/transaction export | Daily reconciliation and exception report |
| 6. Closure | Confirm service payment status or acknowledge voluntary support | Receipt, invoice update or acknowledgement |

**Non-negotiable:** a screenshot, forwarded SMS or message shown on the payer's handset is not, by itself, proof that the merchant account received the funds. Verify the transaction in the merchant's own account records.

### 5.1 Minimum ledger fields

- Internal record ID.
- Internal purpose reference.
- Purpose class: `SERVICE` or `CREATOR_SUPPORT`.
- Customer/enquirer reference (minimise personal data).
- Agreed amount and currency.
- M-PESA receipt number.
- Transaction timestamp.
- Till/store identifier verified by the merchant.
- Merchant-side status and verification timestamp.
- Reconciliation batch/date.
- Exception/reversal note, where applicable.
- Operator/auditor identity for material status changes.

Do not store PINs, full credentials, unnecessary MSISDNs or screenshots as the sole authoritative evidence. Restrict ledger access and define retention/deletion rules.

### 5.2 Payment state model

- `EXPECTED` — amount agreed; no payment verified.
- `PENDING` — customer reports payment or a request was initiated; merchant verification outstanding.
- `CONFIRMED` — matching merchant-side transaction verified.
- `UNMATCHED` — transaction exists but cannot yet be matched to an enquiry/reference.
- `DUPLICATE` — repeated or duplicate payment requires review.
- `REVERSED` — reversal verified in merchant records.
- `FAILED` — transaction failure confirmed.
- `REFUND_REVIEW` — refund/reversal decision requires authorised operator action.

QR generation, STK request acceptance or browser redirect is not a `CONFIRMED` payment. Service booking/fulfilment state must remain separate from payment state.

## 6. Saved customer messages — reusable drafts

For direct communication only, after the relevant collection purpose and payment instructions have been approved. These are not public website copy.

### 6.1 Service payment

Hello,

Thank you for choosing NAKEBUSEN.

Please use the M-PESA Buy Goods payment details provided directly by NAKEBUSEN for your agreed service.

Confirm the merchant name and amount before completing payment.

After payment, share your M-PESA confirmation message and service reference with us on +254 719 635 415.

Payment is confirmed as received only after verification by NAKEBUSEN.

NAKEBUSEN · GRACE · GRIT · GLORY

### 6.2 Voluntary creator support

Enjoying the work?

You can support independent creativity, research, culture and technical work with a voluntary coffee contribution.

Use the verified payment instructions provided directly by @donfelohke.

Your contribution is voluntary and does not purchase a NAKEBUSEN service or product.

Thank you for supporting the work.

@donfelohke · #HisGenjeness

**Do not send this message with Till details until Safaricom has confirmed that this use is permitted for the relevant account/product.**

## 7. Footer and payment-page copy

### 7.1 Footer placement

Keep the footer restrained. A single **Payments** link is enough; do not add a large payment card, QR, Till number or duplicate instructions to every footer column.

### 7.2 Proposed payment-page copy — hold pending approval

**SERVICE PAYMENT**

Pay for your agreed NAKEBUSEN service using the payment instructions provided for your booking. Confirm the merchant name and amount before authorising payment.

**SUPPORT THE WORK**

Enjoying the work? You can make a voluntary contribution towards independent creativity, research, culture and technology. This contribution does not purchase a NAKEBUSEN service or product.

The same collection destination may be used only if Safaricom confirms the proposed uses and the account holder approves the arrangement.

### 7.3 Suggested amounts

KES 50 / 100 / 200 are proposals only. Do not preselect an amount or imply a required minimum. Confirm whether variable amounts and the proposed use are acceptable before publication.

## 8. Safaricom verification register

**Sticker-derived details (not account-verified):**
- Till: `3511456`
- Printed merchant: `FELIX LWOVA`

**Outstanding — no public publication until resolved:**
- [ ] Current activation status. The Business Hub says application status **Complete** means the Till is active and can receive payments; only the original applicant can check the application.
- [ ] Registered account holder and merchant identity.
- [ ] Authority of the account holder to collect NAKEBUSEN service payments.
- [ ] Safaricom approval for voluntary creator contributions, if permitted at all.
- [ ] Whether creator support should use a different Safaricom product or account.
- [ ] Current merchant terms and any restrictions on solicitation, branding or third-party collection.
- [ ] Applicable collection/withdrawal fees and settlement route/timing.
- [ ] Supported networks and customer payment channels for this exact Till.
- [ ] Production eligibility for Dynamic QR, callbacks, Transaction Status and any M-PESA Express flow.
- [ ] Permission to publish the Till number, merchant name and sticker/QR on the NAKEBUSEN website.

**Safaricom Business support:** M-PESABusiness@Safaricom.co.ke  
**Business Hub:** https://hub.m-pesaforbusiness.co.ke/

Only the original applicant can inspect the application's status in My Applications. Never ask another person to disclose their PIN, OTP or credentials.

## 9. Future automation — feasibility, not implementation

### 9.1 Dynamic QR

Safaricom's Daraja Dynamic QR documentation describes QR generation for selected Lipa na M-PESA merchant transactions. The request model includes merchant name, reference, amount, transaction type and credit-party identifier; Buy Goods is represented by transaction code `BG`.

Reference: https://developer.safaricom.co.ke/apis/DynamicQRCode

Eligibility for Till 3511456 and production access are unverified. A Dynamic QR encodes payment initiation details; generation is not proof that payment completed.

### 9.2 Server-side notifications

If Safaricom approves a suitable C2B/Daraja integration:
- Receive callbacks only at a controlled HTTPS backend endpoint.
- Validate the expected merchant identifier, amount, receipt and supported reference fields.
- Authenticate/verify notifications according to Safaricom's current integration specification.
- Make callback processing idempotent.
- Persist minimal transaction facts and an auditable event trail.
- Handle duplicate, delayed, missing, reversed and unmatched callbacks.

### 9.3 Transaction Status API

Safaricom documents Transaction Status as a secondary reconciliation mechanism when callbacks are not received. A query requires an M-PESA receipt number or Originator Conversation ID; the API is asynchronous.

Reference: https://developer.safaricom.co.ke/apis/TransactionStatus

It is not a generic transaction-history endpoint and is not a replacement for statements or merchant-side verification.

### 9.4 Bill Manager

Safaricom describes Bill Manager as supporting invoices, collection, e-receipts and reconciliation. Assess it before building bespoke invoicing/reconciliation features. Availability, onboarding, pricing and fit for this merchant account require confirmation.

Reference: https://developer.safaricom.co.ke/apis/BillManager

### 9.5 Security and deployment boundary

- No secrets or credentials in static website source, public Git, browser storage or frontend JavaScript.
- Static GitHub Pages cannot safely host a secret-bearing payment backend or callback endpoint.
- Use a separately secured server-side component only if automation is approved and operationally justified.
- Keep the current site static-first until the business case and support burden justify a backend.
- Do not add payment collection code, payment SDKs or a live QR before all business and technical gates pass.

## 10. Implementation decision register

| Decision | Status | Control |
|---|---|---|
| One payment-information page | Approved direction | Do not publish payment details yet |
| Separate service and creator-support journeys | Approved direction | Separate UI, messages and ledger categories |
| Existing Till as candidate collection rail | Proposed | Subject to Safaricom approval |
| Till number and merchant name in public footer | Withheld | Publish only after verification and approval |
| Separate service/support bookkeeping | Recommended | Mandatory if both uses are approved |
| Internal purpose references | Proposed | Internal only; not Till account-reference claims |
| Suggested support amounts KES 50/100/200 | Proposed | Not published or preselected |
| Automatic payment confirmation | Deferred | Requires backend, approved Daraja access and tests |
| Dynamic QR | Future feasibility | Merchant eligibility and production access unverified |
| Transaction Status API | Future feasibility | Secondary check, not primary ledger |
| Bill Manager | Assess | May reduce bespoke reconciliation work |
| Safaricom approval for mixed use | Outstanding | Written confirmation required |

## 11. Implementation sequence

1. Verify applicant, account holder, activation and current merchant contract.
2. Obtain Safaricom's written ruling on NAKEBUSEN service collection and voluntary creator support as separate purposes.
3. Confirm whether one Till can support both, or whether a different product/account is required.
4. Confirm fees, settlement, customer network coverage and merchant-side reporting.
5. Approve customer messages and any public payment-page copy.
6. Implement a minimal static information page only after approval; publish no credentials.
7. Establish manual verification and daily reconciliation before accepting payments through the new journey.
8. Evaluate Bill Manager and Daraja automation only after manual operations are reliable.
9. Test sandbox, failure handling, duplicate handling, reversals and one controlled live payment before automated launch.

**Final boundary:** specification is not implementation; sticker is not account verification; a payment prompt or QR is not settlement; customer evidence is not merchant-side confirmation; Safaricom approval is not inferred from this research.
