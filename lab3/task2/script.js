'use strict';

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

const totalTasksDisplay = document.getElementById('totalTasks');
const completedTasksDisplay = document.getElementById('completedTasks');
const remainingTasksDisplay = document.getElementById('remainingTasks');

let tasks = [];
let taskIdCounter = 1;


function init() {
  loadTasksFromStorage();
  attachEventListeners();
  renderTasks();
  updateStats();
}

function attachEventListeners() {
  todoForm.addEventListener('submit', handleAddTask);
  clearCompletedBtn.addEventListener('click', handleClearCompleted);
  clearAllBtn.addEventListener('click', handleClearAll);
}

// submit handler
function handleAddTask(event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  addTask(taskText);
  todoInput.value = '';
  todoInput.focus();
}

// toggle complete
function handleToggleComplete(taskId) {
  toggleTask(taskId);
  renderTasks();
  updateStats();
  saveTasksToStorage();
}

// delete handler
function handleDeleteTask(taskId) {
  deleteTask(taskId);
  renderTasks();
  updateStats();
  saveTasksToStorage();
}

function handleClearCompleted() {
  const completedCount = tasks.filter((task) => task.completed).length;

  if (completedCount === 0) {
    alert('No completed tasks to clear');
    return;
  }

  if (confirm(`Are you sure? This will delete ${completedCount} completed task(s).`)) {
    clearCompletedTasks();
    renderTasks();
    updateStats();
    saveTasksToStorage();
  }
}


function handleClearAll() {
  if (tasks.length === 0) {
    alert('No tasks to clear');
    return;
  }

  if (confirm('Are you sure? This will delete ALL tasks. This cannot be undone.')) {
    clearAllTasks();
    renderTasks();
    updateStats();
    saveTasksToStorage();
  }
}

// add task
function addTask(text) {
  const newTask = {
    id: taskIdCounter,
    text,
    completed: false,
    createdAt: new Date().toISOString()
  };

  taskIdCounter += 1;
  tasks.push(newTask);
  saveTasksToStorage();
  renderTasks();
  updateStats();
}

/**
 * Toggle task completion status
 * @param {number} taskId - The ID of the task to toggle
 */
function toggleTask(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
}

/**
 * Delete a task
 * @param {number} taskId - The ID of the task to delete
 */
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
}


function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
}


function clearAllTasks() {
  tasks = [];
}

function renderTasks() {
  todoList.innerHTML = '';

  if (tasks.length === 0) {
    emptyState.classList.remove('hidden');
    todoList.style.display = 'none';
    return;
  }

  emptyState.classList.add('hidden');
  todoList.style.display = 'flex';

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    todoList.appendChild(taskElement);
  });
}

/**
 * Create a task element
 * @param {Object} task - The task object
 * @returns {HTMLElement} The task list item element
 */
function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = `task-item ${task.completed ? 'completed' : ''}`;
  li.id = `task-${task.id}`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';
  checkbox.checked = task.completed;
  checkbox.setAttribute('aria-label', `Mark "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`);
  checkbox.addEventListener('change', () => {
    handleToggleComplete(task.id);
  });

  const textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = task.text;
  textSpan.setAttribute('title', task.text);

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'btn btn-delete';
  deleteBtn.textContent = 'Delete';
  deleteBtn.setAttribute('aria-label', `Delete "${task.text}"`);
  deleteBtn.addEventListener('click', () => {
    handleDeleteTask(task.id);
  });

  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'task-actions';
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(actionsDiv);

  return li;
}


function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = total - completed;

  totalTasksDisplay.textContent = total;
  completedTasksDisplay.textContent = completed;
  remainingTasksDisplay.textContent = remaining;
}

const STORAGE_KEY = 'todoApp_tasks';
const COUNTER_KEY = 'todoApp_counter';

function saveTasksToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  localStorage.setItem(COUNTER_KEY, JSON.stringify(taskIdCounter));
}

function loadTasksFromStorage() {
  const savedTasks = localStorage.getItem(STORAGE_KEY);
  const savedCounter = localStorage.getItem(COUNTER_KEY);

  if (savedTasks) {
    try {
      tasks = JSON.parse(savedTasks);
    } catch (error) {
      console.error('Error loading tasks from storage:', error);
      tasks = [];
    }
  }

  if (savedCounter) {
    try {
      taskIdCounter = JSON.parse(savedCounter);
    } catch (error) {
      console.error('Error loading counter from storage:', error);
      taskIdCounter = 1;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
