// Variables for DOM elements
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const tasksList = document.getElementById('tasks');

// Function to add a task
function addTask() {
    // Get value from input field assigned to taskText, use trim() to remove whitespace
    const taskText = newTaskInput.value.trim();

    // If taskText is not empty, create a new taskItem as a list item
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create edit button with Font Awesome icon
        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

        // Add event listener to toggle the completed class on taskSpan
        taskSpan.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });

        // Add event listener to remove taskItem on double click
        taskSpan.addEventListener('dblclick', () => {
            tasksList.removeChild(taskItem);
        });

        // Add event listener to editButton to replace taskSpan with an input field
        editButton.addEventListener('click', () => {
            const newText = document.createElement('input');
            newText.type = 'text';
            newText.value = taskSpan.textContent;

            taskItem.replaceChild(newText, taskSpan);
            newText.focus();

            // Replace input field with updated taskSpan on Enter key press
            newText.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    taskSpan.textContent = newText.value;
                    taskItem.replaceChild(taskSpan, newText);
                }
            });
        });

        deleteButton.addEventListener('click', () => {
            tasksList.removeChild(taskItem);
        });

        // Append taskSpan and editButton to taskItem, then append taskItem to tasksList
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        tasksList.appendChild(taskItem);

        // Clear the input field after adding the task
        newTaskInput.value = '';
    // If taskText is empty, and the user tries to add a task, show an alert    
    } else {
        alert('Please enter a task!');
    }
}

// Add tasks by clicking Add Task button
addTaskButton.addEventListener('click', addTask);

// Add tasks by pressing Enter
newTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

