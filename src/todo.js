import { parse } from 'date-fns/esm';
import {pubsub} from './pubsub'
import { storageAvailable } from './store';


const todo = (()=>{
    let arrayOfTodos = retriveData()||[];
    let id = arrayOfTodos.length || 0;
    const addTodo = ({name,description,date,project,priority})=>{
        arrayOfTodos.forEach(e=>{
            console.log(e.id<=id)
            if(e.id>=id){ id=e.id+1 };
        })
        arrayOfTodos.push({
                id, 
                name,
                description,
                date,
                project,
                priority,
                completed: false,
            });
            id+=1;
            pubsub.publish('addedTodo',arrayOfTodos);
            console.table(arrayOfTodos)
            console.log(id);
            storeData();
        };
    const updateCompleted =(i)=>{
        arrayOfTodos.forEach(todo => {
            if(todo.id==i){todo.completed = !todo.completed};
            storeData();
        })
    }
    const storeData=()=>{
        if(storageAvailable('localStorage')){
            localStorage.todos = JSON.stringify(arrayOfTodos);
        }
        // console.log(JSON.parse(localStorage.todos))
    }
    function retriveData(){
        if(storageAvailable('localStorage') && localStorage.todos){
            return JSON.parse(localStorage.todos)
        }
    }
    function sendArray(str){
        pubsub.publish('drawTodos', arrayOfTodos);
    }
    function deleteElement(target){
        arrayOfTodos = arrayOfTodos.filter(todo => todo.id!=target);
        storeData();
        sendArray(arrayOfTodos);
        // console.table(arrayOfTodos);
    }
    pubsub.subscribe('deleteTodo', deleteElement);
    pubsub.subscribe('addTask', addTodo);
    pubsub.subscribe('checked', updateCompleted);
    pubsub.subscribe('LeftPanelClick', sendArray);
})()



// let projects = ['Demo Project'];

const projects = (()=>{
    let arrayOfProjects = retriveData() || [];
    let id = arrayOfProjects.length || 0;
    pubsub.publish('drawProjects', arrayOfProjects);
    pubsub.subscribe('addedProject',addProject);
    pubsub.subscribe('deleteProject',deleteElement)
    pubsub.subscribe('projectDropdown',dropdown)
    function addProject(str){
        arrayOfProjects.push({
            id,
            name: str
        });
        storeData();
        sendArray();
        id+=1;
    }
    function retriveData(){
        if(storageAvailable('localStorage') && localStorage.projects){
            return JSON.parse(localStorage.projects)
        }
    }
    const storeData=()=>{
        if(storageAvailable('localStorage')){
            localStorage.projects = JSON.stringify(arrayOfProjects);
        }
    }
    function deleteElement(target){
        arrayOfProjects = arrayOfProjects.filter(project => project.id!=target);
        storeData();
        sendArray();
    }
    function sendArray(){
        pubsub.publish('drawProjects', arrayOfProjects);
    }
    function dropdown(div){
        const ul = div.querySelector('ul');
        let li = document.createElement('li');
        li.textContent = 'None';
        ul.appendChild(li);
        arrayOfProjects.forEach(element=>{
            let li = document.createElement('li')
            li.textContent = element.name
            ul.appendChild(li)
        })

        return div;
    }
})()