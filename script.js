const todoInput = document.getElementById('todo-input');
const listContainer = document.getElementById('list-container'); 
function addTask() {
    if(todoInput.value === ''){ 
        alert('Please enter a task');

    } 
    else {
        let li = document.createElement('li');
        li.innerText = todoInput.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerText = "\u00D7";
        li.appendChild(span);

    }
    inputBox.value = " ";
    saveData();

}
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
 