# Khaemenes Academy · Reading & Literacy Hall

**Preschool through Middle School · ARSHIF · Khaemenes Academy**

The Reading & Literacy Hall is a local-first literacy resource hub for Khaemenes Academy learners, families, educators, mentors, and NAIB.

It combines:

- developmental reading pathways from Preschool through Grade 8;
- foundational reading skills;
- oral language and listening;
- phonological and phonemic awareness;
- phonics and decoding;
- spelling and word study;
- fluency and reading stamina;
- vocabulary and morphology;
- literary comprehension;
- informational and disciplinary reading;
- evidence, analysis, and research;
- writing from reading;
- speaking, discussion, and presentation;
- a 206-dossier children’s literature collection;
- a 40-module literature and classics course;
- a Reading & Story Studio;
- national and international reading-level guides;
- a seven-symbol Khaemenes literacy legend;
- local progress observations;
- NAIB-ready progress snapshots.

---

## Repository Purpose

This repository is designed as the **central reading and literacy resource Hall for Preschool through Middle School**.

It does not replace the full grade-level Khaemenes language-arts curricula. Instead, it serves as a cross-campus literacy resource layer supporting:

- Preschool
- Kinder Garden
- Elementary Grades 1–5
- Middle School Grades 6–8
- family learning
- mentor review
- NAIB progress interpretation
- intervention and enrichment
- literature study
- research and source literacy

The Hall is intentionally broad enough to support both developing readers and advanced readers while keeping individual literacy strands separate.

---

## Developmental Literacy Pathways

### Preschool
**Oral Language & Emergent Literacy**

Focus areas include:

- conversation and listening;
- vocabulary;
- narrative language;
- rhyme and syllables;
- sound awareness;
- alphabet knowledge;
- print concepts;
- read-aloud comprehension;
- storytelling;
- drawing, dictation, and early writing.

### Kindergarten–Grade 2
**Learn to Read · Build Automaticity**

Focus areas include:

- phonemic awareness;
- systematic phonics;
- decoding;
- encoding and spelling;
- irregular high-frequency words;
- decodable reading practice;
- fluency;
- rich read-alouds;
- vocabulary;
- literary and informational comprehension;
- beginning written response.

### Grades 3–5
**Read to Learn · Grow Knowledge**

Focus areas include:

- multisyllabic decoding;
- morphology;
- roots and affixes;
- spelling and word study;
- fluency and stamina;
- academic vocabulary;
- literature;
- informational text;
- evidence;
- writing from sources;
- research.

### Grades 6–8
**Analyze · Synthesize · Read Across Disciplines**

Focus areas include:

- complex literature and nonfiction;
- evidence and inference;
- argument;
- academic and disciplinary vocabulary;
- source evaluation;
- research;
- synthesis;
- writing from evidence;
- seminars and discussion;
- independent reading.

---

## Eleven Literacy Strands

The Hall tracks literacy as **eleven separate strands** rather than one total score.

1. Oral Language & Listening
2. Phonological / Phonemic Awareness
3. Phonics & Decoding
4. Encoding, Spelling & Word Study
5. Fluency & Reading Stamina
6. Vocabulary & Morphology
7. Literary Comprehension
8. Informational / Disciplinary Reading
9. Evidence, Analysis & Research
10. Writing From Reading
11. Speaking, Discussion & Presentation

Each strand can be marked locally as:

- Not observed yet
- Developing
- Secure / consistently demonstrated

This is a planning and progress tool, **not a diagnosis or standardized assessment**.

---

## Seven Khaemenes Literacy Symbols

| Symbol | Meaning |
|---|---|
| 🌱 | Emergent Language |
| 👂 | Sound Awareness |
| 🔤 | Code & Decoding |
| 📖 | Fluent Meaning |
| 🧩 | Word Knowledge |
| 🔎 | Evidence & Analysis |
| ✍ | Response & Communication |

These symbols indicate the **kind of literacy work being developed**. They are not ranks and do not define learner ability.

---

## National & International Reading Guides

The Hall includes orientation guides for:

- United States · Lexile / BR / grade-band context
- England · EYFS / KS1 / KS2 / KS3
- Australia · PhA / PKW / FlY / UnT
- New Zealand · Kākano / Tupu / Māhuri / Rākau
- CEFR · Pre-A1 through C2 for multilingual/additional-language reading
- commercial and local leveling systems
- Khaemenes seven-symbol literacy framework

These systems are **not treated as exact equivalents**.

See:

- [`docs/LEVEL_GUIDES.md`](docs/LEVEL_GUIDES.md)
- [`docs/READING_FRAMEWORK.md`](docs/READING_FRAMEWORK.md)

---

## Literature Library

The Hall preserves the complete children’s-classics library from the earlier ARSHIF Children’s Classics Hall.

Current package:

- **206 literature dossiers**
- **40 literature and classics modules**
- favorites
- local notes
- reading links
- contextual teaching notes
- literary-history timeline
- glossary
- quiz
- public-domain and lawful discovery sources

Historic classics remain available with contextual guidance where older works contain outdated language, stereotypes, colonial assumptions, ableism, racism, or gender assumptions.

---

## Reading & Story Studio

The Studio includes eleven literacy tools:

1. Read-Aloud Planner
2. Sound & Phonics Practice Planner
3. Fluency Practice Builder
4. Vocabulary & Morphology Builder
5. Narration & Comprehension Card
6. Text Evidence Builder
7. Research & Source Check
8. Fairy Tale Motif Mapper
9. Sensitive Classic Context Sheet
10. Creative Retelling Forge
11. Family Shelf Builder

The phonics planner is intentionally a **review/planning aid**, not a replacement for a systematic phonics scope and sequence.

---

## NAIB Integration

The Hall does not silently transmit learner data.

Families or educators may intentionally:

- copy a NAIB literacy summary;
- export a literacy snapshot as JSON;
- use that snapshot during mentor or teacher review.

This preserves learner privacy while still making the Hall useful as a progress-evidence source.

See [`docs/NAIB_INTEGRATION.md`](docs/NAIB_INTEGRATION.md).

---

## Local-First Storage

Progress is stored in browser `localStorage`.

Current storage includes:

- favorites;
- literature notes;
- literature-course completion;
- quiz records;
- literacy band;
- literacy strand observations.

Clearing browser storage may remove this information.

Use the provided export features when a durable backup is needed.

---

## GitHub Pages Deployment

This repository is intentionally simple.

### Recommended deployment

1. Create or open the target GitHub repository.
2. Upload the contents of this ZIP so `index.html` is in the repository root.
3. Commit the files.
4. Open **Settings → Pages**.
5. Publish from the repository root / `main` branch.
6. Confirm the public URL.
7. Test the Hall on desktop and mobile.

No build process is required.

No package manager is required.

No external JavaScript library is required.

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

---

## Repository Structure

```text
Khaemenes_Reading_Literacy_Hall/
├── index.html
├── README.md
├── VALIDATION.md
├── CHANGELOG.md
├── SECURITY.md
├── RIGHTS_NOTICE.md
├── .nojekyll
├── assets/
│   └── README.md
└── docs/
    ├── READING_FRAMEWORK.md
    ├── LEVEL_GUIDES.md
    ├── NAIB_INTEGRATION.md
    ├── CONTENT_GUIDE.md
    ├── SOURCES.md
    └── DEPLOYMENT.md
```

---

## Important Instructional Principle

Rich literature, read-alouds, poetry, nonfiction, and knowledge-building texts are essential.

For beginning readers, however, they should exist **alongside—not instead of—explicit foundational reading instruction and learner-readable text aligned to what has already been taught**.

The Hall is therefore deliberately both:

- a **reading-development resource**, and
- a **literature and knowledge library**.

---

## Status

**Release:** 1.0  
**Scope:** Preschool through Grade 8  
**Architecture:** Single-file vanilla HTML/CSS/JavaScript application  
**Storage:** Browser-local  
**Build step:** None  
**External libraries:** None

See [`VALIDATION.md`](VALIDATION.md) for the current package checks.
