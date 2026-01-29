// Get DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add Task Functionality
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const taskText = taskInput.value.trim();

    // Input Validation
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new task item
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';
});

// Complete and Delete Task Functionality (Event Delegation)
taskList.addEventListener('click', function(event) {
    const clickedElement = event.target;

    // Toggle complete status if a task item or its span is clicked
    if (clickedElement.tagName === 'SPAN' || clickedElement.tagName === 'LI') {
        const listItem = clickedElement.closest('li');
        if (listItem) {
            listItem.classList.toggle('completed');
        }
    }

    // Delete task if delete button is clicked
    if (clickedElement.classList.contains('delete-btn')) {
        const listItem = clickedElement.closest('li');
        if (listItem) {
            listItem.remove();
        }
    }
});
