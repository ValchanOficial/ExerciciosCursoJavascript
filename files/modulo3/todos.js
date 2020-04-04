let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

const todos = JSON.parse(localStorage.getItem('list_todos'));

function mouseOver(link) {
    link.style.backgroundColor = '#cce6ff';
}

function mouseOut(link) {
    link.style.backgroundColor = '#99ccff';    
}

function renderTodos() {
    listElement.innerHTML = '';
    todos.forEach((todo, index) => {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onmouseover','mouseOver(this)');
        linkElement.setAttribute('onmouseout', 'mouseOut(this)');
        linkElement.style.cssText = 'background-color:#99ccff;color:black;margin-left:5px;margin-top:5px;text-align:center;text-decoration:none;display:inline-block;padding: 3px 3px;';
        let linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('onclick', `deleteTodo(${index})`)

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    });
}
renderTodos();

function addTodo() {
    let todoText = inputElement.value;
    if(todoText){
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
        saveToStorage();
    } else {
        alert('Adicione um todo!');
    }
}
buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}