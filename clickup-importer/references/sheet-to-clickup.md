# Migrating Tabular Data to ClickUp

This guide explains how to migrate tabular data from sources like Google Sheets, Microsoft Excel, and CSV files into ClickUp tasks.

## Supported Formats

*   Google Sheets (.csv export recommended)
*   Microsoft Excel (.xlsx, .xls, .csv export recommended)
*   CSV (.csv)

## Data Preparation

Ensure your tabular data is structured with the first row as clear headers. Each subsequent row will typically represent a single ClickUp task.

## Column to ClickUp Field Mapping

You can map columns from your sheet to the following ClickUp task fields:

*   **Task Name:** A column should be designated as the task name. This is usually a concise identifier for the task.
*   **Description:** A column can be used to populate the task description. This can be longer text providing more details.
*   **Custom Fields:** Any other columns can be mapped to existing ClickUp Custom Fields. You will need to specify the exact name of the custom field in ClickUp.

### Example Mapping

Consider a Google Sheet with the following columns:

| Project Name | Task Title          | Details                               | Due Date   | Priority |
| :----------- | :------------------ | :------------------------------------ | :--------- | :------- |
| Alpha        | Design Mockups      | Create 3 design mockups for review    | 2024-06-15 | High     |
| Alpha        | Develop Frontend    | Implement user interface based on mockups | 2024-06-30 | Medium   |
| Beta         | Research Competitors | Analyze competitor features and pricing | 2024-06-20 | High     |

Here's how you might map them to ClickUp:

*   `Project Name` -> (Optional: Can be used to group tasks into different lists/folders)
*   `Task Title` -> **ClickUp Task Name**
*   `Details` -> **ClickUp Task Description**
*   `Due Date` -> **ClickUp Due Date** (requires date format)
*   `Priority` -> **ClickUp Custom Field** (e.g., a "Priority" dropdown custom field in ClickUp)

You will be prompted to provide this mapping during the migration process.
