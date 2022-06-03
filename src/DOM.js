import {parse, lightFormat, startOfToday, isToday, isBefore} from "date-fns";
import { format } from "date-fns/esm";
// import { addTask, generateInbox } from "./DOMgeneration";
import {pubsub} from "./pubsub";



const generate = (()=>{
    //init
    let add = true;
    let leftPanelSelected = 'Inbox';
    document.addEventListener('DOMContentLoaded',()=>{
        generateMain(leftPanelSelected);
        pubsub.publish('LeftPanelClick', 'Inbox');
    });
    document.querySelector('[data-icon="akar-icons:home"]').addEventListener('click',()=>{
        generateMain('Inbox')
        leftPanelSelected = 'Inbox';
        pubsub.publish('LeftPanelClick', 'Inbox');
    })
    //On Click Inbox
    document.querySelector('#inbox-button')
        .addEventListener('click',()=>{
            generateMain('Inbox');
            leftPanelSelected = 'Inbox';
            pubsub.publish('LeftPanelClick', 'Inbox');
        });
    //On Click Today
    document.querySelector('#today-button')
    .addEventListener('click',()=>{
        generateMain('Today');
        leftPanelSelected = 'Today'
        pubsub.publish('LeftPanelClick', 'Today');
    });
    //On Click Today
    document.querySelector('#upcoming-button')
    .addEventListener('click',()=>{
        generateMain('Upcoming');
        leftPanelSelected = 'Upcoming'
        pubsub.publish('LeftPanelClick', 'Upcoming');
    });

    function generateMain(title) {
        const container = document.querySelector('#app-container');
        container.innerHTML = `
        <div class="title">${title}</div>
        <div id='add-task'>
            <div id='add-task-listener'>
                <span class="iconify" data-icon="akar-icons:plus"></span>
                <div>Add task</div>
            </div>
        <div></div>
        </div>`
        document.querySelector('#add-task-listener').addEventListener('click',addTask);
        document.querySelector('[data-icon="akar-icons:plus"]').addEventListener('click',addTask);
    }
    // add task button
    const addTask = ()=>{
        const container = document.querySelector('#app-container');
        if (add) {
            const div = document.createElement('div');
            div.classList.add('add-container');
            div.innerHTML = `
                <div id="add-field-container">
                    <div id="add-field">
                        <textarea name="name" id="name" cols="30" rows="1" placeholder="e.g., Read chapter 3"></textarea>
                        <textarea name="description" id="description" cols="30" rows="2" placeholder="Description"></textarea>
                        <div class="add-field-buttons">
                            <input type="date" name="date-button" id="date-button" value=${lightFormat(startOfToday(), 'yyyy-MM-dd')}>
                            <div class='dropdown' data-dropdown>
                            <button type="button" id="list-button" data-dropdown-button >Inbox</button>
                            <div class='dropdown-menu'><ul></ul></div>
                            </div>
                        </div>
                    </div>
                    <div class="add-field-buttons">
                        <button id="add-task-button">Add task</button>
                        <button id="cancel-button">Cancel</button>
                    </div>
                    </div>`;
            container.appendChild(div);
            // console.log(div.querySelector('[data-dropdown]'))
            pubsub.publish('projectDropdown',div.querySelector('[data-dropdown]'))
            div.querySelectorAll('[data-dropdown] li').forEach(element=>{
                element.addEventListener('click',(e)=>{
                    if(e.target.textContent==='None'){
                        div.querySelector('button').textContent='Inbox';
                    }else{
                        div.querySelector('button').textContent=e.target.textContent;
                    }
                })
            })
            // cancel button event
            document.querySelector('#cancel-button').addEventListener('click',()=>{
                document.querySelector('.add-container').remove();
                add = true;
            });
            // add button event
            document.querySelector('#add-task-button').addEventListener('click',()=>{
                let name = document.querySelector('#name').value;
                let description = document.querySelector('#description').value;
                let date = document.querySelector('#date-button').value;
                let project = document.querySelector('#list-button').textContent
                // if(project==='Inbox'){ project= '' }
                // date = parse(date, 'yyyy-M-d', new Date());
                document.querySelector('.add-container').remove();
                add = true;
                pubsub.publish('addTask', {name, description, date, project});
            })
        } else {
            document.querySelector('.add-container').remove();
        }
        add = !add;
    }
    pubsub.subscribe('addedTodo', displayTodo);
    pubsub.subscribe('drawTodos', displayTodo);
    function displayTodo(array) {
        if(leftPanelSelected==='Today'){
            array = array.filter(element=>isToday(parse(element.date,'yyyy-M-d', new Date())));
        }else if(leftPanelSelected==='Upcoming'){
            array = array.filter(element=>!isBefore(parse(element.date,'yyyy-M-d', new Date()),startOfToday()));
        } else if (leftPanelSelected!=='Inbox'){
            array = array.filter(element=>element.project == leftPanelSelected)
        }
        if(!array){ return }
        if(document.querySelector('.todo')){document.querySelectorAll('.todo').forEach( element=> element.remove())}
        const appContainer = document.querySelector('#app-container');
        array.forEach(todo => {
            let checkedClass = '';
            const div = document.createElement('div');
            div.classList.add('todo');
            div.setAttribute('data-id',todo.id);
            appContainer.insertBefore(div, document.getElementById('add-task'));
            if(todo.completed){checkedClass = 'checked'}
            div.innerHTML = `
                <svg data-id=${todo.id} class='checkmark ${checkedClass}' width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group">
                        <g id="check">
                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.854 5.146C8.90056 5.19245 8.93751 5.24762 8.96271 5.30837C8.98792 5.36911 9.00089 5.43423 9.00089 5.5C9.00089 5.56577 8.98792 5.63089 8.96271 5.69163C8.93751 5.75238 8.90056 5.80755 8.854 5.854L5.854 8.854C5.80755 8.90056 5.75238 8.93751 5.69163 8.96271C5.63089 8.98792 5.56577 9.00089 5.5 9.00089C5.43423 9.00089 5.36911 8.98792 5.30837 8.96271C5.24762 8.93751 5.19245 8.90056 5.146 8.854L3.646 7.354C3.59951 7.30751 3.56264 7.25232 3.53748 7.19158C3.51232 7.13084 3.49937 7.06574 3.49937 7C3.49937 6.93426 3.51232 6.86916 3.53748 6.80842C3.56264 6.74768 3.59951 6.69249 3.646 6.646C3.69249 6.59951 3.74768 6.56264 3.80842 6.53748C3.86916 6.51232 3.93426 6.49937 4 6.49937C4.06574 6.49937 4.13084 6.51232 4.19158 6.53748C4.25232 6.56264 4.30751 6.59951 4.354 6.646L5.5 7.793L8.146 5.146C8.19245 5.09944 8.24762 5.06249 8.30837 5.03729C8.36911 5.01208 8.43423 4.99911 8.5 4.99911C8.56577 4.99911 8.63089 5.01208 8.69163 5.03729C8.75238 5.06249 8.80755 5.09944 8.854 5.146V5.146Z"
                                fill="black" />
                        </g>
                        <path id="Vector_2"
                            d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L10 0C10.5304 0 11.0391 0.210714 11.4142 0.585786C11.7893 0.960859 12 1.46957 12 2V15.5C12 15.5904 11.9754 15.6792 11.9289 15.7568C11.8824 15.8343 11.8157 15.8979 11.736 15.9405C11.6563 15.9832 11.5664 16.0035 11.4761 15.9992C11.3858 15.9948 11.2983 15.9661 11.223 15.916L6 13.101L0.777 15.916C0.701705 15.9661 0.61423 15.9948 0.523891 15.9992C0.433553 16.0035 0.343733 15.9832 0.263999 15.9405C0.184266 15.8979 0.117604 15.8343 0.0711141 15.7568C0.024624 15.6792 4.67204e-05 15.5904 0 15.5V2ZM2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V14.566L5.723 12.084C5.80506 12.0294 5.90143 12.0003 6 12.0003C6.09857 12.0003 6.19494 12.0294 6.277 12.084L11 14.566V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1H2Z"
                            fill="black" />
                    </g>
                </svg>
                <div class="todo-text">
                    <div class="todo-name">${todo.name}</div>
                    <div class="todo-description">${todo.description}</div>
                    <div class="todo-buttons">
                        <button class="todo-date" type="button">
                            <span class="iconify todo-date-icon" data-icon="ant-design:calendar-twotone"></span>
                            <div class="todo-date-text">${lightFormat(parse(todo.date,'yyyy-M-d', new Date()),'d/M')}</div>
                        </button>
                        <button class="todo-tag" type="button">
                            <span class="iconify todo-tag-icon" data-icon="akar-icons:tag"></span>
                            <div class="todo-tag-text">${todo.project}</div>
                        </button>
                    </div>
                </div>
                <div class='delete-button'>
                <span class="iconify" data-icon="ant-design:delete-outlined"></span>
                </div>`
            })
        document.querySelectorAll('.checkmark').forEach(element=>{
            element.addEventListener('click',()=>{
                element.classList.toggle('checked');
                pubsub.publish('checked', element.getAttribute('data-id'))
            })
        })
        document.querySelectorAll('.delete-button').forEach(element=>{
            element.addEventListener('click',()=>{
                pubsub.publish('deleteTodo', element.parentElement.getAttribute('data-id'))
            })
        })
    }
    function setLeftPanelSelected(str){
        leftPanelSelected = str;
    }
    return {setLeftPanelSelected, generateMain}
})()


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

const Project = (()=>{
    let add=true;
    const addProjectIcon = document.querySelector('#projects [data-icon="akar-icons:plus"]');
    addProjectIcon.addEventListener('click', addProject);
    
    pubsub.subscribe('drawProjects', drawProjects)

    function createProject(){
        const li = document.createElement('li');
        const div = document.createElement('div');
        div.classList.add('text');
        const div2 = document.createElement('div');
        div2.classList.add('icon');
        div2.innerHTML = `<span class="iconify" data-icon="ant-design:delete-outlined"></span>`;
        li.appendChild(div)
        li.appendChild(div2)
        return li;
    }

    function addProject(){
        if(add){
            let area = document.createElement('textarea');
            area.setAttribute('rows','1');
            let li = document.createElement('li');
            li.classList.add('textarea');
            document.querySelector('.dropdown-menu ul')
                .appendChild(li).appendChild(area).select();
            area.addEventListener('keypress',addField);
            add =! add;
        }else {
            document.querySelector('.dropdown textarea').remove();
            add = !add;
        }
    }
    function render(str){
        const li = createProject()
            li.querySelector('.text').textContent = str.name;
            li.setAttribute('data-id',str.id)
            document.querySelector('.dropdown-menu ul')
                .appendChild(li);
            li.querySelector('.text').addEventListener('click',()=>{
                generate.setLeftPanelSelected (li.querySelector('.text').textContent);
                generate.generateMain(li.querySelector('.text').textContent);
                pubsub.publish('LeftPanelClick', '');
            })
            // console.log(document.querySelector(`[data-id="${str.id}"] span`))
            // li.querySelector('.iconify--ant-design').addEventListener('click',deleteProject)
    }
    function addField(e){
        if(e.key==='Enter'){
            pubsub.publish('addedProject', e.target.value)
            e.target.remove();
            add=true;
        }
    }
    function drawProjects(array){
        document.querySelector('.dropdown-menu ul').innerHTML=''
        array.forEach(element=>render(element));

        document.querySelectorAll('.dropdown-menu .icon')
            .forEach(element=>element.addEventListener('click',deleteProject))
    }
    function deleteProject(e){
        pubsub.publish('deleteProject', e.target.parentElement.parentElement.getAttribute('data-id'))
    }
})()