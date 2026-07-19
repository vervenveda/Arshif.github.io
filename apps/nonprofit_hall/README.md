# ARSHIF Nonprofit Hall — GitHub Ready Certification Portal

**ARSHIF Nonprofit Hall** is a self-contained, local-first educational portal for nonprofit founders, board members, volunteers, students, grant writers, community organizers, and civic stewards.

The portal is designed to help learners explore nonprofit formation, governance, compliance, fundraising, grant readiness, program design, risk management, international NGO awareness, public accountability, and ethical stewardship.

> **Educational boundary:** This portal provides general education and planning support only. It is not legal, tax, accounting, employment, insurance, fundraising-compliance, grant, immigration, or international NGO advice. Rules vary by country, state, province, organization type, activity, donor source, and public-fund requirements. Always verify with official regulators and qualified professionals before filing, fundraising, hiring, contracting, operating internationally, handling restricted funds, or serving vulnerable populations.

---

## Project Status

**Version:** v3 GitHub Ready  
**Format:** Single-file vanilla HTML/CSS/JavaScript  
**Hosting:** GitHub Pages compatible  
**Data model:** Local browser storage with export/import options  
**Network requirement:** None for the portal itself; external source links open only when clicked  

---

## What This Portal Includes

- 48-module nonprofit stewardship course
- 280-dossier nonprofit atlas
- 43 official or durable source resources
- 240 module-specific quiz questions
- 5 quiz questions per module
- Quiz answer explanations
- Certificate completion gate
- Founder & Operations Studio
- Jurisdiction Desk
- All 50 U.S. states + D.C. reference support
- 249-country international reference support
- Monte Carlo Risk & Readiness Lab
- Founder Vault for local notes and portfolio evidence
- Export/import JSON record system
- Encrypted vault export/import with passphrase
- Recovery snapshots
- Emergency snapshot copy
- Storage-health status panel
- Source-check log
- GitHub upload safety checklist
- Mobile-friendly layout
- Local-first, no external libraries

---

## Course Scope

The 48-module course walks learners through a full nonprofit planning arc:

1. Nonprofit foundations and civic language
2. Mission, vision, values, and theory of change
3. Legal structures and formation awareness
4. U.S. 501(c)(3) basics and international NGO caution
5. Federal grant readiness through SAM.gov and Grants.gov
6. Charitable solicitation and compliance awareness
7. Board governance and fiduciary duties
8. Finance, internal controls, budgeting, and restricted funds
9. Fundraising foundations and donor stewardship
10. Grant writing, reporting, and closeout
11. Program design and impact measurement
12. Volunteer management and people care
13. Safeguarding, risk, insurance, and cybersecurity
14. Communications, accessibility, and ethical storytelling
15. Advocacy, lobbying boundaries, and nonpartisanship
16. Partnerships, MOUs, coalitions, and international work
17. Sustainability, succession, closure, and public accountability
18. Capstone: Nonprofit Operating Plan

---

## Certification Boundary

The portal can generate an internal **ARSHIF Certificate of Completion** after the learner completes the required learning pathway.

This certificate is **not**:

- An accredited degree
- A CPA credential
- A legal credential
- A tax-preparer credential
- A grant-writer license
- A fundraising license
- A government authorization
- A nonprofit registration
- Permission to solicit donations
- Proof of compliance with any jurisdiction

The certificate simply documents completion of this educational portal.

---

## Founder Vault Privacy Warning

The portal includes a Founder Vault and local recordkeeping tools. These are designed for private local use.

**Do not upload any private vault files to GitHub.**

Do not upload:

- Founder Vault JSON exports
- Encrypted vault exports
- Board notes
- Donor notes
- Participant records
- Volunteer records
- Source-check logs containing private planning data
- Draft grant applications with private details
- Capstone drafts containing personal or organizational information
- Financial records
- Passwords or passphrases
- Legal documents containing private information

GitHub repositories can become public, searchable, forkable, and archived. Treat uploaded repository files as public-facing.

---

## Recommended Repository Structure

```text
nonprofit-hall/
├── index.html
├── README.md
├── LICENSE.md
├── SECURITY.md
├── THIRD_PARTY_NOTICES.md
└── .gitignore
```

Recommended file rename:

```text
arshif_nonprofit_hall_certification_portal_v3_github_ready.html → index.html
```

GitHub Pages usually serves `index.html` as the homepage of the repository site.

---

## Recommended `.gitignore`

Create a `.gitignore` file to reduce the risk of accidentally uploading private records:

```gitignore
# Private learner/founder records
*.json
*.vault
*.backup
*.snapshot
*.enc
*.encrypted

# Private notes and drafts
/private/
/records/
/vault/
/backups/
/exports/
/capstones/
/drafts/

# Operating system files
.DS_Store
Thumbs.db

# Editor folders
.vscode/
.idea/
```

This does not replace careful review before committing files.

---

## GitHub Pages Setup

1. Create a new GitHub repository.
2. Upload the HTML file.
3. Rename the HTML file to `index.html`.
4. Upload this README as `README.md`.
5. Add `LICENSE.md`, `SECURITY.md`, and `THIRD_PARTY_NOTICES.md` if used in your project.
6. Open repository **Settings**.
7. Go to **Pages**.
8. Choose the `main` branch and root folder.
9. Save and wait for GitHub Pages to publish.
10. Open the published GitHub Pages URL and test every tab before sharing publicly.

---

## Pre-Upload Checklist

Before uploading to GitHub, verify:

- [ ] The public file is named `index.html`.
- [ ] No private JSON files are included.
- [ ] No exported vault files are included.
- [ ] No personal notes are included.
- [ ] No donor records are included.
- [ ] No participant records are included.
- [ ] No board/private planning notes are included.
- [ ] All buttons and tabs open correctly.
- [ ] Quizzes load and grade correctly.
- [ ] Certificate gate behaves correctly.
- [ ] External links open as expected.
- [ ] Legal/tax/compliance disclaimers remain visible.

---

## Source Philosophy

The portal prioritizes official, durable, and educational sources. Examples include:

- IRS Exempt Organization guidance
- IRS 501(c)(3) exemption requirements
- Grants.gov applicant registration resources
- SAM.gov entity registration and Unique Entity ID resources
- National Council of Nonprofits
- BoardSource
- Candid / GuideStar
- UN ECOSOC NGO consultative-status resources
- UK Charity Commission / GOV.UK
- Canada Revenue Agency charity resources
- Australian Charities and Not-for-profits Commission
- Ireland Charities Regulator
- FTC business guidance
- CISA cybersecurity guidance
- ADA accessibility guidance
- USA.gov public resource pathways
- Data.gov open-data resources

External links are included for education and verification. The portal does not guarantee that any external source is complete for a particular user, country, state, province, organization type, or filing situation.

---

## Local-First Design

This portal is designed to work as a sovereign, static educational file.

It does not require:

- A database
- A login system
- A server
- A build step
- External JavaScript libraries
- Paid hosting

Learner and founder records are stored in the browser using local storage. This means records are usually tied to the device and browser being used. Export/import tools are included so users can back up their progress or move records between computers.

---

## Dual-Computer Use

To use the portal across more than one computer:

1. Complete work on Computer A.
2. Use the portal’s export option to download a record file.
3. Move the file privately to Computer B using a secure method.
4. Import the record file into the portal on Computer B.
5. Keep private backups outside the public GitHub repository.

Encrypted vault exports are safer than plain JSON exports, but users must remember their passphrase. A lost passphrase may make the encrypted file unrecoverable.

---

## Safety and Compliance Notes

This portal repeatedly encourages users to verify before acting. Special caution is required for:

- Nonprofit incorporation
- Tax exemption applications
- Charitable solicitation registration
- Donor receipts
- Restricted funds
- Public grants
- Federal awards
- Hiring and contractor classification
- Background checks
- Work with children or vulnerable adults
- International programs
- Cross-border money movement
- Sanctions screening
- Anti-bribery controls
- Data privacy
- Cybersecurity
- Accessibility obligations
- Advocacy and lobbying
- Political campaign restrictions
- Program participant safety

When the stakes are high, consult official regulators and qualified professionals.

---

## Suggested Future Upgrades

Possible future improvements:

- State-by-state charitable solicitation checklist
- Country-specific NGO registration profiles
- Printable board packet generator
- Grant calendar export
- Board meeting minutes builder
- Volunteer onboarding packet generator
- Program logic model builder
- Risk register export
- Public accountability report generator
- Accessibility checker
- Translation-ready language files
- Offline help manual
- Separate instructor/facilitator guide
- Repository-level documentation pack

---

## Accessibility Goals

This project aims to be readable, keyboard-friendly, and usable on smaller screens. Future accessibility passes should continue improving:

- Contrast
- Heading order
- Keyboard navigation
- Focus states
- Screen-reader labels
- Reduced-motion options
- Print readability
- Plain-language explanations

---

## License

Use the license file selected for this repository. If this project is part of the ARSHIF / Ohmic Foundry ecosystem, keep public-facing license language aligned with the repository owner’s intellectual-property and reuse preferences.

---

## Public-Facing Summary

**ARSHIF Nonprofit Hall** is a free, local-first nonprofit education portal for learning civic stewardship, governance, funding, compliance awareness, program design, international caution, and public accountability. It helps learners build knowledge and planning artifacts while reminding them to verify legal, tax, grant, and compliance actions with official sources and qualified professionals.ability. It helps learners build knowledge and planning artifacts while reminding them to verify legal, tax, grant, and compliance actions with official sources and qualified professionals.
