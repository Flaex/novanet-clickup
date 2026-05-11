# Migrating Document Data to ClickUp

This guide explains how to migrate structured document data from sources like Google Docs, Microsoft Word, and plain text files into ClickUp projects, tasks, and subtasks.

## Supported Formats

*   Google Docs (copy-paste content into a plain text file or markdown)
*   Microsoft Word (.docx, copy-paste content into a plain text file or markdown)
*   Plain Text Files (.txt, .md)

## Structured Document Format

To enable the skill to correctly parse your document and create ClickUp items, please structure your document content using the following markdown-like syntax:

```markdown
# Project Name: [Name of the ClickUp Project/List]
This section will be used as the description for the ClickUp List.

## Task: [Name of the first parent task]
Description: [Description for the first parent task]
Due Date: [Optional Due Date in YYYY-MM-DD format]
Priority: [Optional Priority: Urgent, High, Normal, Low]
Assignee: [Optional Assignee Email or Name]

### Subtask: [Name of the first subtask]
Description: [Description for the first subtask]
Due Date: [Optional Due Date in YYYY-MM-DD format]
Priority: [Optional Priority: Urgent, High, Normal, Low]
Assignee: [Optional Assignee Email or Name]

### Subtask: [Name of the second subtask]
Description: [Description for the second subtask]
Due Date: [Optional Due Date in YYYY-MM-DD format]
Priority: [Optional Priority: Urgent, High, Normal, Low]
Assignee: [Optional Assignee Email or Name]

## Task: [Name of the second parent task]
Description: [Description for the second parent task]
... (and so on for more tasks and subtasks)
```

## Field Mapping Details

*   **`# Project Name:`**: Creates a new ClickUp List (or identifies an existing one if specified). The text following this will be the list name. Any content immediately following this line (before the first `## Task:`) will be used as the list description.
*   **`## Task:`**: Creates a parent task within the specified list. The text following this will be the task name.
*   **`### Subtask:`**: Creates a subtask under the preceding parent task. The text following this will be the subtask name.
*   **`Description:`**: The line immediately following a `## Task:` or `### Subtask:` starting with `Description:` will be used as the task/subtask description.
*   **`Due Date:`**: The line immediately following a `## Task:` or `### Subtask:` starting with `Due Date:` will set the task/subtask due date. Format should be `YYYY-MM-DD`.
*   **`Priority:`**: The line immediately following a `## Task:` or `### Subtask:` starting with `Priority:` will set the task/subtask priority. Valid values are `Urgent`, `High`, `Normal`, `Low`.
*   **`Assignee:`**: The line immediately following a `## Task:` or `### Subtask:` starting with `Assignee:` will assign the task/subtask. Provide the assignee's email or full name.

## Usage

You will provide the content of your document, and the skill will parse it and guide you through the creation of ClickUp items based on this structure.
