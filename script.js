// Select the input field, button, and task list
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const tasksList = document.getElementById('tasks');

// Add an event listener to the button
addTaskButton.addEventListener('click', () => {
    // Get the value from the input field
    const taskText = newTaskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Append the new task to the task list
        tasksList.appendChild(taskItem);

        // Clear the input field
        newTaskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});