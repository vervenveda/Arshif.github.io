# SECURITY.md

## Static-Site Security

This repository is designed for GitHub Pages and contains no server-side secret storage.

Do not place sensitive credentials in this repository.

Never commit:

- passwords;
- API tokens;
- email credentials;
- private keys;
- protected student records;
- medical records;
- government identifiers.

## Learner Data

The Hall stores observations locally in the browser.

GitHub Pages itself is not a secure student-information database.

The current NAIB integration is intentionally export/copy based.

Any future remote learner-data service should use:

- authenticated access;
- encrypted transport;
- server-side authorization;
- minimum necessary data;
- clear retention rules;
- protected audit logs.

## Reporting a Problem

If a security issue is found, remove exposed secrets immediately and rotate any affected credentials before publishing a fix.
