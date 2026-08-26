# ARSHIF Close-Reading & Annotation Lab

A sovereign, browser-local scholarly reading workspace for close reading, evidence annotation, interpretation, discussion preparation, and transfer into PROSE or a student portfolio.

## Purpose

The lab fills the space between **reading a source** and **writing about it**:

`Lesson → Reading / ARSHIF Hall → Annotation Lab → Discussion → PROSE → Portfolio`

It is designed as a reusable ARSHIF tool rather than an English 9-only application.

## v1 capabilities

- Six reading modes: Literature, Poetry, Drama, Rhetoric & Speech, Research Source, Novel Study
- Passage selection and labeled annotations
- Categories: Evidence, Diction, Imagery, Structure, Rhetoric, Conflict, Theme, Question, Observation, Inference
- Margin notes attached to exact text ranges
- Observation vs. inference distinction
- Eiren mode-specific close-reading prompts
- Claim · Evidence · Reasoning workspace
- Complication / counterreading field
- Reflection and carry-forward question
- Local notebook persistence with a separate storage key
- JSON backup / restore
- Plain-text reading import (`.txt`, `.md`)
- Plain-text analytical export for PROSE / portfolio transfer
- Print support
- Light/dark display toggle
- Adjustable reading size
- Reduced-motion support
- No external dependencies, analytics, cloud storage, or network requests

## Lesson deep links

The app accepts optional query parameters so a curriculum lesson can open the correct scholarly context without creating separate copies of the tool:

```text
?mode=drama&course=English%209&unit=5&week=13&lesson=Day%202&title=Scene%20Study
```

Supported parameters:

- `mode`: `literature`, `poetry`, `drama`, `rhetoric`, `research`, `novel`
- `course`
- `unit`
- `week`
- `lesson`
- `title`
- `author`
- `source`

When lesson-context query parameters are present, the lab opens a fresh notebook with that context instead of reopening the learner's last saved notebook.

## Privacy / sovereignty

The app uses browser `localStorage` under:

```text
arshif_close_reading_lab_v1
```

No account, API, telemetry, remote database, external library, or outbound network request is required. Learners should export a JSON backup for work they need to preserve beyond the current browser/device.

## Text and rights

The lab does not bundle copyrighted readings. Public-domain or openly licensed texts may be loaded according to their terms. For copyrighted works, curriculum pages should provide a lawful source/borrowing link and learners should only paste excerpts permitted for their educational use.

## Integration principle

**Curriculum first → reading second → annotation third → writing fourth.**

The lab guides close reading; it does not generate interpretations or replace student reasoning.
