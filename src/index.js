import './style.css';
import {generateInbox,addTask, displayTodo} from './DOMgeneration.js'
import {parse, format, lightFormat} from 'date-fns'

let todoArray = [];

const Todos = ( name, description, date, project, priority )=>{
    return {
        name,
        description,
        date,
        project,
        priority,
        completed: false
    }
}

const dropdownMenu  = (()=>{
    document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }
    }, false)})()

const toggleMenu = (()=>{
    const button = document.querySelector('#menu-button');
    const sidebar = document.querySelector('#sidebar');
    const appContainer = document.querySelector('#app-container');
    button.addEventListener('click', ()=>{
        sidebar.classList.toggle('sidebar-inactive');
        appContainer.classList.toggle('app-sidebar-inactive');
    })
})()
// ---DOM
generateInbox('Inbox');
// 

const addTaskButton = (()=>{
    const node = document.querySelector('#add-task-listener')
    let toggle = true;
    node.addEventListener('click',taskListener);
    const createEventListener = ()=>{
        const node = document.querySelector('#add-task-listener')
        node.addEventListener('click',taskListener);
    }
    function taskListener(){
        addTask(toggle);
        if(toggle){
            document.querySelector('#add-task-button').
                addEventListener('click',addTodo);
            document.getElementById('cancel-button').
                addEventListener('click',()=>{
                    addTask(false);
                    toggle = true;
                })
        }
        toggle = !toggle;
    }
    function addTodo(){
        let name = document.querySelector('#name').value;
        let description = document.querySelector('#description').value;
        let date = document.querySelector('#date-button').value;
        date = parse(date, 'yyyy-M-d', new Date()); 
        console.log(lightFormat(date,'d/M'))
        let todo = Todos(name, description, date, '', '');
        todoArray.push(todo);
        console.log(todoArray);
        displayTodo(todoArray);
        toggle = true; 
        addTask(false);
    
    }
    return {createEventListener}
})()

const LeftPanelButtons = (()=>{
    document.querySelector('#inbox-button')
        .addEventListener('click',leftPanelClick);
    document.querySelector('#today-button')
        .addEventListener('click',leftPanelClick);
    function leftPanelClick(e){
        generateInbox(e.target.textContent.trim());
        addTaskButton.createEventListener();
    }
})()


