
// Select the input field, button, and task list
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const tasksList = document.getElementById('tasks');

// Function to add a task
function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';

        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });

        taskSpan.addEventListener('dblclick', () => {
            tasksList.removeChild(taskItem);
        });

        editButton.addEventListener('click', () => {
            const newText = document.createElement('input');
            newText.type = 'text';
            newText.value = taskSpan.textContent;
            taskItem.replaceChild(newText, taskSpan);
            newText.focus();
            newText.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    taskSpan.textContent = newText.value;
                    taskItem.replaceChild(taskSpan, newText);
                }
            });
        });
        // Append children first
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(editButton);

        // Then append to the task list
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

