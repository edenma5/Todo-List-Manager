const newTask = document.getElementById('input');
const btn = document.getElementById('btn');
const table = document.getElementById('tbody');
const listOfTasks = [];
let uniqueId = 0;


class TaskManager {
    constructor(task) {
        this.new = task;
        this.id = this.generateId();
        this.isCompleted = this.isCompletedFunc()
    }
    generateId() {
        uniqueId++;
        return uniqueId;
    }
    isCompletedFunc() {
        const isCompleted = false;
        return isCompleted;
    }
}

btn.addEventListener('click', () => {
    validation()
})

function updateHandle(idEl) {
    let newTaskValue = newTask.value;
    if (!newTaskValue)
        alert('נא להזין תוכן');
    else if (!isNaN(newTaskValue))
        alert('אין להזין מספרים')
    else {
        for (let i = 0; i < listOfTasks.length; i++) {
            if (newTaskValue === listOfTasks[i].new) {
                alert('קיימת משימה זהה למשימה שהוזנה')
                return
            }
        }
        for (let i = 0; i < listOfTasks.length; i++) {
            if (listOfTasks[i].id === idEl) {
                listOfTasks[i].new = newTaskValue;
            }
        }
        showTasks();
    }
}

function showTasks() {
    let html = '';
    listOfTasks.forEach(task => {
        html += `
            <tr class="tr tr${task.id}" id="${task.id}">
            <td class="tdtask">${task.new}</td>
            <td><button class="updateBtn" id="update${task.id}" onclick="updateHandle(${task.id})">✏️</button></td>
            <td><input type="checkbox" class="checkbox" onclick="isCompletedHandle(${task.id})" id="cb${task.id}" ></td>
            <td><button class="deleteBtn" onclick="deleteFunc(${task.id})" id="${task.id}">X</button></td>
            </tr>`
    })
    console.log(listOfTasks);
    table.innerHTML = html;
}

function isCompletedHandle(idEl) {
    const checkBoxEl = document.getElementById(`cb${idEl}`)
    console.log(checkBoxEl);
    for (let i = 0; i < listOfTasks.length; i++) {
        if (listOfTasks[i].id === idEl) {
            if (checkBoxEl.checked === false) {
                listOfTasks[i].isCompleted = false;
            } else {
                listOfTasks[i].isCompleted = true;
            }
        }
    }
    showTasks()
}


function deleteFunc(idEl) {
    for (let i = 0; i < listOfTasks.length; i++) {
        if (listOfTasks[i].id === idEl)
            listOfTasks.splice(i, 1);
    }
    showTasks();
}

function validation() {
    let newTaskValue = newTask.value;
    if (!newTaskValue)
        alert('נא להזין תוכן');
    else if (!isNaN(newTaskValue))
        alert('אין להזין מספרים')
    else {
        for (let i = 0; i < listOfTasks.length; i++) {
            if (newTaskValue === listOfTasks[i].new) {
                alert('קיימת משימה זהה למשימה שהוזנה')
                return
            }
        }
        let newOne = new TaskManager(newTaskValue);
        listOfTasks.push(newOne);
        showTasks()
        newTask.value = '';
    }
}




