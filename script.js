
// Select the input field, button, and task list
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const tasksList = document.getElementById('tasks');

// Function to add a task
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            console.log(taskItem.classList); // Logs the current classes applied to the taskItem
        });
        taskItem.addEventListener('dblclick', () => {
            tasksList.removeChild(taskItem);
        });
        tasksList.appendChild(taskItem);
        newTaskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

// Add an event listener to the button
addTaskButton.addEventListener('click', addTask);

// Add an event listener for the Enter key
newTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

