# VALIDATION.md

# Khaemenes Reading & Literacy Hall · Validation Record

This document records the structural checks performed on the packaged release.

## Release

- Package: Khaemenes Academy · Reading & Literacy Hall
- Scope: Preschool through Grade 8
- Release: 1.0
- Main entry: `index.html`
- Architecture: vanilla HTML / CSS / JavaScript
- Build step: none

---

## Structural Validation

The packaged `index.html` was checked for:

- valid file creation;
- duplicate static HTML IDs;
- inline JavaScript syntax;
- required literacy feature markers;
- preservation of the original literature collection;
- preservation of the original 40-module literature course;
- presence of developmental literacy pathways;
- presence of all eleven literacy strands;
- presence of national/international reading guides;
- presence of NAIB snapshot functions.

### Validation Result

**PASS**

At package creation:

- 1 inline JavaScript block passed `node --check`.
- 0 duplicate static IDs were detected.
- 206 literature dossiers were preserved.
- 40 literature/classics modules were preserved.
- 4 developmental literacy pathways were present.
- 11 literacy strands were present.
- 7 reading-level / symbol systems were present.
- K–8 Lexile spring norm guide was present.
- England stage guide was present.
- Australian progression-symbol guide was present.
- New Zealand early-reading phase guide was present.
- CEFR guide was present.
- Khaemenes seven-symbol literacy legend was present.
- NAIB copy/export functions were present.
- Story Studio contained 11 literacy tools.

---

## Functional Areas to Test After GitHub Deployment

The following should be manually checked on the published GitHub Pages URL:

### Literacy Pathways

- Preschool pathway opens.
- K–2 pathway opens.
- Grades 3–5 pathway opens.
- Grades 6–8 pathway opens.
- Selected pathway updates the Skills Lab band.

### Literature Library

- Search works.
- Age filter works.
- Region filter works.
- category filters work.
- dossier modal opens.
- favorites toggle.
- personal note saves.
- external reading links open correctly.

### Skills Lab

- band selector changes guidance;
- each of 11 strands can be marked;
- observations persist after refresh;
- summary counts update;
- Copy NAIB Snapshot works where clipboard permission is allowed.

### Literature Course

- all 40 modules render;
- completion checkboxes persist;
- progress percentage updates.

### Reading & Story Studio

Confirm all eleven tools render and produce output.

### Reference Vault

- source cards render;
- standards references render;
- timeline renders;
- glossary renders.

### Progress & Assessment

- literacy snapshot downloads as JSON;
- literature/local record downloads as JSON;
- favorites and notes display;
- quiz advances;
- clearing progress requires confirmation.

### Responsive Layout

Test at minimum:

- 1440px desktop
- 1024px laptop/tablet landscape
- 768px tablet
- 430px phone
- 360px narrow phone

---

## Instructional Validation Boundaries

This Hall is a **resource and progress-observation environment**.

It is not:

- a standardized reading test;
- a clinical dyslexia evaluation;
- a diagnosis;
- a state accountability assessment;
- a legal determination of grade placement;
- an exact conversion engine between unrelated reading-level systems.

Lexile, CEFR, national curriculum stages, publisher levels, and Khaemenes symbols should not be treated as one-to-one conversions.

---

## Privacy Validation

The Hall is local-first.

The package does not intentionally:

- transmit learner literacy observations automatically;
- embed advertising trackers;
- embed analytics trackers;
- store authentication secrets;
- send NAIB learner information without a user action.

NAIB snapshots are copied or exported **only by explicit user action**.

---

## Copyright Validation

The literature Hall distinguishes between:

- public-domain / lawful full-text sources;
- modern copyrighted works used for discovery/context;
- library discovery pathways.

The Hall should not be used to reproduce copyrighted full texts without permission.

---

## Revalidation

Re-run validation after:

- editing JavaScript;
- adding or removing dossiers;
- changing storage keys;
- modifying literacy strands;
- changing national/international reference data;
- adding external APIs;
- adding authentication or remote persistence.
