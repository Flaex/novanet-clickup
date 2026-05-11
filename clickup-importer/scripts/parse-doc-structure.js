// clickup-importer/scripts/parse-doc-structure.js

const fs = require('fs');
const path = require('path');

function parseDocumentStructure(content) {
    const lines = content.split('
').map(line => line.trim());
    const result = {
        project: {},
        tasks: []
    };

    let currentTask = null;
    let currentSubtask = null;
    let inProjectDescription = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('# Project Name:')) {
            result.project.name = line.substring('# Project Name:'.length).trim();
            result.project.description = '';
            inProjectDescription = true;
        } else if (line.startsWith('## Task:')) {
            inProjectDescription = false;
            currentTask = {
                name: line.substring('## Task:'.length).trim(),
                description: '',
                subtasks: []
            };
            result.tasks.push(currentTask);
            currentSubtask = null; // Reset subtask context
        } else if (line.startsWith('### Subtask:')) {
            inProjectDescription = false;
            if (currentTask) {
                currentSubtask = {
                    name: line.substring('### Subtask:'.length).trim(),
                    description: ''
                };
                currentTask.subtasks.push(currentSubtask);
            }
        } else if (line.startsWith('Description:')) {
            inProjectDescription = false;
            const desc = line.substring('Description:'.length).trim();
            if (currentSubtask) {
                currentSubtask.description = desc;
            } else if (currentTask) {
                currentTask.description = desc;
            } else if (result.project && result.project.name) { // Ensure project name is set before adding description
                result.project.description += (result.project.description ? '
' : '') + desc;
            }
        } else if (line.startsWith('Due Date:')) {
            inProjectDescription = false;
            const dueDate = line.substring('Due Date:'.length).trim();
            if (currentSubtask) {
                currentSubtask.dueDate = dueDate;
            } else if (currentTask) {
                currentTask.dueDate = dueDate;
            }
        } else if (line.startsWith('Priority:')) {
            inProjectDescription = false;
            const priority = line.substring('Priority:'.length).trim();
            if (currentSubtask) {
                currentSubtask.priority = priority;
            } else if (currentTask) {
                currentTask.priority = priority;
            }
        } else if (line.startsWith('Assignee:')) {
            inProjectDescription = false;
            const assignee = line.substring('Assignee:'.length).trim();
            if (currentSubtask) {
                currentSubtask.assignee = assignee;
            } else if (currentTask) {
                currentTask.assignee = assignee;
            }
        } else if (inProjectDescription && line.length > 0) {
            // Lines following '# Project Name:' and before '## Task:' are part of project description
            result.project.description += (result.project.description ? '
' : '') + line;
        }
    }

    return result;
}

async function main() {
    const filePath = process.argv[2]; // Get file path from command line arguments

    if (!filePath) {
        console.error('Usage: node parse-doc-structure.js <file_path>');
        process.exit(1);
    }

    try {
        const fullPath = path.resolve(filePath);
        const content = await fs.promises.readFile(fullPath, 'utf8');
        const parsedData = parseDocumentStructure(content);
        console.log(JSON.stringify(parsedData, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

main();
