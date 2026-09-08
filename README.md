# Enyo Portfolio Contact Page Customization

Changes only `src/app/contact/page.tsx`.

Preserves the existing color system and does not modify `globals.css`.

## New structure

- Contact / 04 editorial header
- Problem-first headline
- Three numbered contact reasons
- Direct email section
- GitHub and LinkedIn as primary links
- Existing other social links retained at lower visual emphasis
- Personal closing statement

## Install

From the project root:

```bash
bash apply-contact-customization.sh
npm run dev
```

A backup is created at:

```text
src/app/contact/page.tsx.bak-contact-custom
```

Restore with:

```bash
cp src/app/contact/page.tsx.bak-contact-custom src/app/contact/page.tsx
```
