// Get Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-add");
const todoList = document.getElementById("todo-list");

// Check Todos List
checkList();

// Listen Form Submit
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (todoInput.value.trim()){
        addTodo(todoInput.value);
        checkList();
        todoInput.value = "";
    }
    else {
        alert("Please write todo on input field");
        todoInput.value = "";
    }
    console.log(todoInput.value);
});


// Functions
function checkList() {
    if (todoList.hasChildNodes()) {
        const noTodo = document.getElementById("no-todo");
        noTodo.style.display = "none";
    }
    else{
        const node = document.createElement("p");
        const nodeText = document.createTextNode("Nothing to do on the list");
        node.classList.add("lead", "text-center");
        node.setAttribute("id", "no-todo");
        node.appendChild(nodeText);
        todoList.appendChild(node);
    }

}

function addTodo (todo) {
    const node = document.createElement("li");
    const nodeText = document.createTextNode(todo);
    const nodeId = todo.toLowerCase().replace(/\s/g, '');
    const btnNode = document.createElement("button");
    const btnNodeText = document.createTextNode("Delete Todo");
    
    //console.log(nodeId);
    
    btnNode.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    });

    btnNode.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
    btnNode.appendChild(btnNodeText)
    btnNode.setAttribute("data", nodeId);
    node.setAttribute("id", nodeId);
    node.appendChild(nodeText);
    node.appendChild(btnNode);
    todoList.appendChild(node);
}

