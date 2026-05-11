---
name: clickup-importer
description: Data migration skill for importing various formats (Google Sheets, Excel, CSV, Google Docs, Word, text files) into ClickUp as projects, tasks, and subtasks. Use when data needs to be structured and migrated into ClickUp.
---

# ClickUp Importer

## Overview

This skill facilitates the structured migration of data from various source formats into ClickUp. It supports both tabular data (like spreadsheets) and document-based data, transforming them into ClickUp lists, tasks, and subtasks.

## How to Use This Skill

This skill provides specialized guidance based on the format of your source data. Please refer to the appropriate guide:

*   **For Tabular Data (Google Sheets, Excel, CSV):**
    See [references/sheet-to-clickup.md](references/sheet-to-clickup.md) for detailed instructions on mapping rows to tasks and columns to fields.
*   **For Document-based Data (Google Docs, Word, Text Files):**
    See [references/doc-to-clickup.md](references/doc-to-clickup.md) for guidance on structuring your document content to create ClickUp projects, tasks, and subtasks.

## Example Resources

This skill includes example resource files in `scripts/`, `references/`, and `assets/`. These are provided as a guide for how to structure and use skill resources. You can adapt them or add your own as needed.

### scripts/
Executable code that can be run directly to perform specific operations.
This skill will include `parse-doc-structure.js` for processing document-based data.

### references/
Documentation and reference material intended to be loaded into context to inform Gemini CLI's process and thinking.
This skill includes `sheet-to-clickup.md` and `doc-to-clickup.md` for specific migration instructions.

### assets/
Files not intended to be loaded into context, but rather used within the output Gemini CLI produces.
