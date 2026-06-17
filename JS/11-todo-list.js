    const todolist = [
        {
            name: '',
            duedate: '',
        },
        {
            name: '',
            duedate: ''
        }
    ];
    renderTodoList();
    function renderTodoList() {
        let todolistHTML = '';
        for (let i = 0; i < todolist.length; i++) {
            const todoObject = todolist[i];
            const { name, duedate } = todoObject;
            const html = `
            <p>
            ${name} ${duedate}
            <button onclick= "todoList.splice(${i}, 1);
            renderTodoList();
            ">Delete</button>
            </p>
            `
        
        console.log(duedate);

        document.querySelector('.js-todo-list').innerHTML = todolistHTML;
    }
    function addTodo() {
        const inputElement = document.querySelector('.js-name-input');
        const dateInputElement = document.querySelector('.js-due-date-input');
        const name = inputElement.value;
        const duedate = dateInputElement.value;
        todolist.push({
            name : name,
            duedate : duedate
        });




        inputElement.value = '';
        renderTodoList();
    }
}