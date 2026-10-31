# Box Audit

Think inside the box. The money is already in the books.

Box Audit finds money a business has lost to financial leakage and gets it back. The detection is the innovation: advanced intelligence from AI that runs in house, on Box Audit’s own servers. Client ledgers, contracts, and email are not sent to a cloud model. Every invoice, contract, payment, and email is read, so the detection stays ahead of a hand sample and a ledger-only tool.

Clients pay a share of the money actually recovered, and only after the refund or credit lands. Nothing is due upfront. A person approves every claim before it is filed.

## Who it is for

Any business with real spend or revenue, not only retailers. The first engagements are mid-market companies with high invoice volume and many vendors: distributors, manufacturers, and multi-site retailers. They leak the same money as the largest companies, and the usual recovery firms are built to sample that volume by hand rather than read all of it.

## What leaks

Most of the money is never recovered because the evidence is scattered across invoices, contracts, purchase orders, ledgers, and email. A traditional audit checks a fraction of the transactions and misses what sits in unstructured documents.

- **Paying more than owed.** Duplicate payments, prices above the contract, missed rebates and discounts, freight and tax errors, unused credits.
- **Collecting less than earned.** Unbilled work, pricing and billing errors, invalid customer deductions and chargebacks.
- **Waste inside operations.** Returns never credited, unused software licences, lease and utility overcharges.
- **Fraud and control gaps.** Fake vendors, changed bank details, invoices split to slip past approval.

## How an engagement works

Auditors stay in the loop. The system reads and matches. People approve claims and deal with the counterparty.

1. **Ingest.** Pull accounts payable and receivable, invoices, contracts, purchase orders, vendor statements, and the related email.
2. **Extract.** Read PDFs, contracts, spreadsheets, and email threads, and turn them into structured fields.
3. **Match.** Compare what was paid or billed with the contract, the price list, or proof of delivery. Flag duplicates, overcharges, missed rebates, and unapplied credits.
4. **Build the claim.** Package each finding with its source documents so an auditor can review and approve it quickly.
5. **Recover.** File the claim with the vendor, carrier, landlord, or customer, and track it until the money or the credit arrives.

The same engine then runs forward. Prevention flags a leak before the payment goes out, so the engagement continues after the backlog is recovered.

## How it is different

Recovery firms sample the ledger by hand. AP software sells a seat, sees the fields already in the system, and leaves the finding to the client. Box Audit runs the detection on its own AI, and the records stay on its own servers.

- **In-house AI.** The model extracts the documents, matches them to the contract and the payment, and investigates whether the mismatch is a real leak. It runs on Box Audit’s own servers.
- **Nothing goes to a cloud AI.** Ledgers, contracts, and email stay on those machines. They are not sent to a third-party model API.
- **Detection ahead of the market.** The review is the whole file, including contracts, PDFs, and email. Leaks a sample never opens, and leaks a ledger tool never sees, still get found.

## Products

Three tools, one recovery. Inbox Trace and Unbox produce the records. Box Agent investigates them. A person still signs the claim that leaves the building.

### Inbox Trace

Funding terms are often negotiated over email. When the deal that was agreed and the deal that was applied differ, the proof sits in an inbox nobody audits. Inbox Trace finds those deals and checks that each one was applied the way it was agreed.

1. **Filter.** Keep only the emails that belong to a funding deal.
2. **Analyse.** Pull parties, items, amounts, rates, dates, and conditions.
3. **Track.** Link the thread into one deal, from proposal to final terms.
4. **Compare.** Check the deal agreed against the deal applied in invoices, deductions, or payments.
5. **Trace.** Pin each mismatch to the emails that prove what was agreed.
6. **Review.** Send the finding to an auditor, with the evidence attached, before any claim is filed.

Email is read on Box Audit’s own servers. It does not leave that environment.

### Unbox

Deal sheets, price files, invoices, and statements arrive in every layout: merged cells, many tabs, scanned pages, tables split across a page break. Unbox pulls the fields that matter out of those Excel files and PDFs and turns them into structured records.

Those records feed the rest of the audit. Inbox Trace compares what was agreed in email with what Unbox reads from the invoices and deal sheets. Mismatches go to an auditor.

### Box Agent

Box Agent is an agentic auditor. It does the investigative work end to end and stops just before the claim is written.

- Investigates each mismatch from Inbox Trace and Unbox and works out whether it is a real leak.
- Gathers the emails, deal sheets, invoices, and payments that support it.
- Recomputes what should have been paid or billed, and the amount owed back.
- Hands the auditor a documented finding, ready for a claim.

The human auditor writes and files the claim. Each auditor can handle far more cases. A person signs off on every claim that goes to a counterparty.

## Where the work starts

The first look is a leakage scan: a sample of accounts payable, analysed, with the findings shown. A contingency engagement follows only if the client wants one.

From there, the work opens in this order:

1. Duplicate payments, unapplied credits, and contract-price overbilling. These show up at almost every client, and the evidence is already in the payables ledger.
2. Missed rebates and freight errors. High volume, rule-based, and better found by reading every line than by sampling.
3. Retail deductions and chargebacks. A revenue-side recovery, with the evidence spread across remittances, portals, and email.
4. Operations and fraud, once the core recovery work is trusted.

## Contact

Scan requests go to [jay.cs.iit@gmail.com](mailto:jay.cs.iit@gmail.com). The site is [box-audit.com](https://box-audit.com/).

## Preview

From this folder:

```bash
python3 -m http.server 8765
```

Open http://127.0.0.1:8765/
