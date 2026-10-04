const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const taskCounter = document.getElementById('taskCounter');
const validationMessage = document.getElementById('validationMessage');

const tasks = [];

function clearValidation() {
  validationMessage.textContent = '';
}

function showValidation(message) {
  validationMessage.textContent = message;
}

function updateEmptyState() {
  emptyState.hidden = tasks.length > 0;
}

function updateCounter() {
  const remainingTasks = tasks.filter((task) => !task.completed).length;
  const label = remainingTasks === 1 ? 'task remaining' : 'tasks remaining';
  taskCounter.textContent = `${remainingTasks} ${label}`;
}

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    listItem.classList.toggle('completed', task.completed);
    listItem.dataset.id = String(task.id);

    const mainContent = document.createElement('div');
    mainContent.className = 'task-main';

    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'task-toggle';
    toggleButton.classList.toggle('checked', task.completed);
    toggleButton.setAttribute(
      'aria-label',
      task.completed ? `Mark "${task.text}" as incomplete` : `Mark "${task.text}" as complete`
    );
    toggleButton.textContent = task.completed ? '✓' : '○';

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.classList.toggle('completed', task.completed);
    taskText.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-btn';
    deleteButton.setAttribute('aria-label', `Delete task: ${task.text}`);
    deleteButton.textContent = '🗑';

    mainContent.appendChild(toggleButton);
    mainContent.appendChild(taskText);
    listItem.appendChild(mainContent);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });

  updateCounter();
  updateEmptyState();
}

function addTask() {
  const text = taskInput.value.trim();

  if (!text) {
    showValidation('Please enter a task.');
    taskInput.focus();
    return;
  }

  const task = {
    id: Date.now() + Math.random(),
    text,
    completed: false,
  };

  tasks.push(task);
  taskInput.value = '';
  clearValidation();
  renderTasks();
  taskInput.focus();
}

function toggleTask(taskId) {
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return;
  }

  task.completed = !task.completed;
  renderTasks();
}

function deleteTask(taskId) {
  const index = tasks.findIndex((task) => task.id === taskId);

  if (index !== -1) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function handleTaskListClick(event) {
  const clickedButton = event.target.closest('button');

  if (!clickedButton) {
    return;
  }

  const taskItem = clickedButton.closest('.task-item');

  if (!taskItem) {
    return;
  }

  const taskId = Number(taskItem.dataset.id);

  if (clickedButton.classList.contains('task-toggle')) {
    toggleTask(taskId);
    return;
  }

  if (clickedButton.classList.contains('delete-btn')) {
    deleteTask(taskId);
  }
}

addTaskBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addTask();
});

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask();
});

taskInput.addEventListener('input', clearValidation);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
});

taskList.addEventListener('click', handleTaskListClick);

renderTasks();
