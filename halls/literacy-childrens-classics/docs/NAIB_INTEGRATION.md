# NAIB Integration

# Purpose

The Reading & Literacy Hall is designed to give NAIB, mentors, families, and educators a useful literacy evidence snapshot without silently transferring child information.

## Current Integration Model

The Hall provides two explicit actions:

### Copy NAIB Snapshot

Creates a text summary containing:

- selected instructional band;
- literacy pathway;
- all eleven literacy strands;
- current status for each strand;
- timestamp;
- a clear statement that the record is observational.

The user chooses whether and where to paste it.

### Download Literacy Snapshot

Creates a local JSON record that may be:

- archived by a family;
- reviewed by a teacher;
- attached to a mentor review;
- imported into a future protected NAIB evidence system.

---

## What the Hall Does Not Do

The static Hall does not automatically:

- send learner records to NAIB;
- publish learner records;
- upload child data to GitHub;
- synchronize records between devices;
- authenticate a learner;
- diagnose a reading disorder.

---

## Recommended Future Data Contract

A future authenticated NAIB / Family Data Bridge could accept a record such as:

```json
{
  "type": "literacy_snapshot",
  "learner_id": "protected-family-system-id",
  "generated_at": "ISO-8601 timestamp",
  "instructional_band": "g35",
  "pathway": "Read to Learn · Grow Knowledge",
  "skills": [
    {
      "strand": "Vocabulary & Morphology",
      "status": "developing"
    }
  ],
  "source": "Khaemenes Reading & Literacy Hall"
}
```

The remote implementation should require authentication and should not place sensitive credentials in static browser JavaScript.

---

## NAIB Interpretation Principle

NAIB should interpret literacy **strand by strand**.

For example:

- strong comprehension + developing decoding;
- strong oral language + developing spelling;
- secure decoding + developing vocabulary;
- strong literature analysis + developing research citation.

A single composite total should not erase those differences.
