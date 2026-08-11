# ARSHIF FILE SYSTEM DEEP-DIVE AUDIT
Date: 2026-08-10

## Scope
This audit compared the uploaded ARSHIF root landing page with the current connected GitHub repository structure.

## Current ARSHIF root
Verified repository root contains:
- `Faith/`
- `README.md`
- `apps/`
- `halls/`
- `index.html`
- `mentor-manifest.json`

## Current internal knowledge layers

### 1. Canonical Halls — 9
- `halls/exploration-travelogues/`
- `halls/historical-biblical-parallels/`
- `halls/literacy-childrens-classics/`
- `halls/literacy-indiginous-oral-traditions/`
- `halls/literacy-lost-books/`
- `halls/literacy-poetry-9th-university/`
- `halls/literacy-world-classics/`
- `halls/philosophy/`
- `halls/theatre/`

### 2. Current `apps/` destinations — 9
- `apps/PLERA_Search_index.html`
- `apps/Reading_room_index.html`
- `apps/Song_embedder_index.html`
- `apps/contribute_index.html` — **repair**
- `apps/culinary_hall/`
- `apps/financial_hall/`
- `apps/language_hall/`
- `apps/nonprofit_hall/`
- `apps/science_hall_index.html`

### 3. Current `Faith/apps/` destinations — 15
- `Bible-context_index.html`
- `Yahushua_Study_index.html`
- `Yahushua_portal_index.html`
- `bible_before_cannon_index.html`
- `biblical_portal_index.html` — **repair**
- `biblical_web_directory_index.html`
- `foundations_of_faith_index.html`
- `prayer_index.html`
- `remnant_nations_index.html`
- `testament_index.html` — **duplicate**
- `testament_study_portal_index.html`
- `truth_tribe_class_index.html`
- `truth_tribe_index.html`
- `truth_tribe_kids_index.html` — **duplicate**
- `zionism_course_index.html`

## Clean census
- Internal destinations: **33**
- Verified/live routing records: **29**
- Repair-held: **2**
- Duplicate-held: **2**
- Canonical upgraded Halls: **9**
- Matrix corridors added: **11**
- Reviewed external research gateways retained: **13**

## Major problem found in uploaded root
The uploaded root registry still contained legacy paths such as:
- `./apps/poetry_hall/`
- `./apps/Bible_and_History_index.html`
- `./apps/philosophy_Hall_index.html`
- `./apps/theatre_hall_index.html`
- `./apps/travel_exploration_hall_index.html`
- `./apps/world_classics_Hall_index.html`
- old Faith files under `./apps/`
- misspelled `remnant_nations_inndex.html`

Those routes no longer match the current filesystem. They were replaced with exact current `halls/`, `apps/`, and `Faith/apps/` routes.

## Two intentionally disabled internal records
1. `apps/contribute_index.html`
   - current repository content is a payment-button fragment, not a complete standalone page.
2. `Faith/apps/biblical_portal_index.html`
   - current repository content begins as an HTML section fragment, not a complete standalone document.

## Duplicate-held records
- `Faith/apps/testament_index.html` currently duplicates `testament_study_portal_index.html`.
- `Faith/apps/truth_tribe_kids_index.html` currently duplicates `truth_tribe_class_index.html`.

They remain searchable/documented but are not launchable from the rebuilt directory.

## Audit logic repaired
The uploaded JavaScript auditor only accepted:
- `./apps/`
- `https://vervenveda.github.io/`

The replacement now accepts the current internal layers:
- `./halls/`
- `./apps/`
- `./Faith/apps/`

and explicitly reviewed Matrix hosts:
- `vervenveda.com`
- `vervenveda.github.io`
- `artist1970.github.io`

## Privacy / static architecture preserved
- No API token or secret added.
- `connect-src 'none'` remains.
- Embedded registry remains self-contained.
- Original favorite storage key `arshif_favorite_halls_v1` remains unchanged.
