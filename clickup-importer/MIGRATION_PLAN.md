# Process: Google Sheet to ClickUp Migration

This document outlines the process of migrating a video production schedule from a Google Sheet to a structured ClickUp project.

## 1. Google Sheet Access

The first step was to access the Google Sheet. The initial attempt to download the sheet failed due to it being private. The user then changed the sharing settings to "Anyone with the link can view", which allowed the process to continue.

## 2. Initial Migration: Flat Task List

The Google Sheet was analyzed to understand its structure. The initial plan was to create a flat list of tasks in ClickUp, where each row in the sheet would become a single task.

The following steps were taken:
- A new list "Video Production Schedule" was created in the "Novanet" space, inside a new folder "Cronograma de edición de videos".
- Custom fields were identified from the sheet's columns. Due to tool limitations, the user had to manually create these custom fields in the ClickUp list.
- Tasks were created with the information from the sheet embedded in the task description as a markdown table, as the tool could not directly populate the custom fields.

## 3. Restructuring: Parent and Subtasks

Based on user feedback, the structure was changed to a parent-child relationship between tasks.
- "Proyecto" from the Google Sheet became the parent task.
- "Descripción" from the Google Sheet became the subtask.

A new list "Video Production Schedule v2" (later identified as "Lista A") was created by the user to accommodate the new structure, and the custom fields were recreated in this new list. The tasks were then recreated with the new parent-child hierarchy.

## 4. Migrating Additional Tabs

The same process was followed to migrate additional tabs from the Google Sheet to separate lists in ClickUp:

- **Maximiza Tab:** The "Maximiza" tab was migrated to a "Maximiza" list in ClickUp. The `gid` of the tab was used to download the correct data.
- **Agua Fría Tab:** The "Agua Fría" tab was migrated to an "Agua Fría Coffee" list in ClickUp, again using the tab's `gid` to download the specific data.

## 5. Workspace Dashboard Integration

To collect all current activities and allow users from the workspace to easily track progress, a centralized Dashboard view was planned. Two implementation routes were researched and proposed:
1. **Implementation Route A (Local Folder View):** Creating a folder called `00. Dashboard` inside the Novanet Space and adding a Dashboard view, pinned as the default tab.
2. **Implementation Route B (Standalone Hub Dashboard):** Creating a workspace-wide dashboard in ClickUp's global Dashboards Hub and favoriting/pinning it to the sidebar.

The dashboard integrates visual charts for status distributions, project portfolio progress bars, workload allocations, and list blocks of high-priority deliverables. Full details are recorded in `clickup_dashboard_plan.md`.
