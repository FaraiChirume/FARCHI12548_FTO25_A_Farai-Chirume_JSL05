# JSL05 Project Brief: Task Board with Local Storage Persistence and Task Creation

## Overview

In this project, I implement a task management system where **tasks are persisted in local storage**, ensuring that tasks remain available even after refreshing the page or reopening the application. Users are be able to **add new tasks**, with the task details being **stored in local storage** and displayed in the appropriate **columns** ("To Do", "Doing", "Done"). The application also includes an **Add Task** modal for creating new tasks.

### Task Creation & Modal Interaction

- I have Provide an **"Add Task" button** that, when clicked, opens a **modal** for creating a new task.
- The modal also includes:
  - Fields for entering the **task title** and **description**.
  - A dropdown to select the task **status** ("To Do", "Doing", "Done").
  - A **submit button** to add the new task to the task board immediately.
- After submitting, the task appears on the board without requiring a page refresh.

## Design & Responsiveness

- The **"Add New Task" modal**  matches the [Figma design](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=NNqgDPlU1PNLLh8i-0), including mobile-responsive behavior.
- The modal and task board are **fully responsive** and function properly on both desktop and mobile devices.
- The "Add Task" button  **transforms** appropriately on mobile devices to match the Figma design.

## Code Structure & Maintainability

- **Modularize your JavaScript code**: I have broken my code into separate modules, each handling a **single responsibility** (e.g., local storage handling, task rendering, modal management).
- I Used **descriptive variable and function names** to ensure the code is clear and easy to maintain.
- I Included **JSDoc comments** for every major function and module to describe their functionality, parameters, and return values.
