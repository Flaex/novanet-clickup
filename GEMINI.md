# Project: Novanet Studio ClickUp Workspace Configuration

This directory acts as the central router and configuration map for the Novanet Studio ClickUp workspace management systems.

---

## 📂 Workspace Modules & Criteria

To maintain code and documentation integrity, information is strictly separated into independent domain modules:

### 1. ClickUp Importer (`clickup-importer/`)
* **Type:** Claude Custom Skill (Executable Module)
* **Description:** This folder contains the tools, scripts, and documentation for importing video production schedule tabular and document data into ClickUp lists. It is registered as an active custom skill for Claude Code.
* **Migration Plan & History:** [MIGRATION_PLAN.md](file:///home/flaex/projects/novanet-clickup/clickup-importer/MIGRATION_PLAN.md) — Steps and architectural decisions taken during the original Google Sheet migration.
* **Importer Guide:** [SKILL.md](file:///home/flaex/projects/novanet-clickup/clickup-importer/SKILL.md) — Documentation on how to use the Claude Code importer tool.

### 2. Workspace Dashboard & Layouts (`dashboard/`)
* **Type:** Standard Workspace Configuration (Declarative Non-Skill Module)
* **Description:** This folder contains configurations, widget designs, and setups to establish a centralized "Workspace Overview" dashboard. It is passive and serves for configuration and layout documentation.
* **Dashboard Design & Layout Plan:** [clickup_dashboard_plan.md](file:///home/flaex/projects/novanet-clickup/dashboard/clickup_dashboard_plan.md) — Options for local Space-level or standalone global Dashboard views.

---

## 🛠️ Global Structure Overview

The current live structure of the Novanet ClickUp Workspace consists of:
- **`00. Dashboard` (Folder):** Houses the localized "Workspace Overview" Dashboard view to aggregate and display ongoing task progress.
- **`Cronograma de edición de videos` (Folder):** Hosts the production workflow lists:
    - `Lista A` (Main production schedule)
    - `Maximiza`
    - `Agua Fría Coffee`
- **Global Standalone Dashboard:** Managed in the Dashboards Hub for full-screen workspace-wide reporting.
