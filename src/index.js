import './style.css';
import {generateInbox,addTask} from './DOMgeneration.js'

console.log("It's working")
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    // document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    //     if (dropdown === currentDropdown) return
    //     dropdown.classList.remove('active');
    // })
}, false)

const toggleDropdownMenu= (()=>{
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
        console.log('add')
        // taskListener();
    }
    const removeEvent = ()=>{
        const node = document.querySelector('#add-task-listener')
        node.removeEventListener('click',taskListener);
        console.log('remove');
    }
    function taskListener(){
        console.log(toggle)
        addTask(toggle);
        toggle = !toggle;
    }
    return {removeEvent, createEventListener}
})()

const inboxButton = (()=>{
    document.querySelector('#inbox-button')
        .addEventListener('click',()=>{
            addTaskButton.removeEvent();
            generateInbox('Inbox');
            addTaskButton.createEventListener();
        });
})()

const todayButton = (()=>{
    document.querySelector('#today-button')
        .addEventListener('click',()=>{
            generateInbox('Today');
        });
})()