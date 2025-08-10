/**
 * @file main.js
 * @description Application entrypoint: load tasks from storage and initialize modal + handlers.
 */

import { loadAllTasks } from "./scripts/tasks/taskmanager.js";
import { renderAllTasks } from "./scripts/ui/renderTasks.js";
import { setupModal } from "./scripts/ui/modalManager.js";
import { getFormData, validateFormData, clearFormFields } from "./scripts/tasks/formUtils.js";
import { addTask } from "./scripts/tasks/taskmanager.js";

document.addEventListener("DOMContentLoaded", () => {
  // load from storage (initialised with initialData if needed)
  const tasks = loadAllTasks();
  renderAllTasks(tasks);

  // Setup modal open/close and view modal handlers
  setupModal();

  // Hook form submit (ensures adding via keyboard submission works)
  const form = document.getElementById("task-form");
  const taskModal = document.getElementById("task-modal");
  form?.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const data = getFormData();
    if (!validateFormData(data)) {
      alert("Please enter title and description.");
      return;
    }
    const updated = addTask(data);
    renderAllTasks(updated);
    clearFormFields();
    if (typeof taskModal.close === "function") taskModal.close();
  });
});