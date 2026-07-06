# novanet-clickup

Tools and workflows for managing Novanet Studio's ClickUp workspace — task migration, data imports, and periodic task audits.

## What's in here

### `clickup-importer` skill

A Claude Code skill for importing data from external sources into ClickUp as lists, tasks, and subtasks.

**Supported sources:**
- Google Sheets, Excel, CSV (tabular data)
- Google Docs, Word, plain text / Markdown (document-based data)

**Invoke it from Claude Code:**

```
/clickup-importer
```

**Reference guides:**
- [`clickup-importer/references/sheet-to-clickup.md`](clickup-importer/references/sheet-to-clickup.md) — mapping spreadsheet columns to ClickUp task fields
- [`clickup-importer/references/doc-to-clickup.md`](clickup-importer/references/doc-to-clickup.md) — structuring document content for ClickUp import

**Scripts:**
- [`clickup-importer/scripts/parse-doc-structure.js`](clickup-importer/scripts/parse-doc-structure.js) — parses a structured markdown/text document and outputs JSON ready for ClickUp import

```bash
node clickup-importer/scripts/parse-doc-structure.js path/to/document.md
```

### `clickup-importer/MIGRATION_PLAN.md`

Step-by-step log of the initial Google Sheet → ClickUp migration for Novanet's video production schedule. Documents the decisions made along the way (flat list → parent/subtask hierarchy, multi-tab handling).

### `GEMINI.md`

Project context summary used as AI assistant context. References `clickup-importer/MIGRATION_PLAN.md` for the detailed process.

### `tasks_review.md`

Snapshot of the oldest open tasks across all ClickUp spaces (EuroGrober, RSA, GroberFloors, Maximiza, LAGA, Novanet) used for periodic backlog review and cleanup.

## ClickUp workspace structure

The Novanet ClickUp workspace is organized into spaces per client/brand. The video production schedule lives under:

```
Novanet space
└── Cronograma de edición de videos (folder)
    ├── Lista A         — main video production schedule
    ├── Maximiza
    └── Agua Fría Coffee
```

Each list uses a parent task per project and subtasks per deliverable, with details from the original Google Sheet embedded in subtask descriptions.

## Document import format

When importing from a structured document, use this markdown syntax:

```markdown
# Project Name: My ClickUp List
List description goes here.

## Task: Parent task name
Description: Details about this task
Due Date: 2026-06-01
Priority: High

### Subtask: Subtask name
Description: Details about this subtask
Assignee: name@example.com
```
