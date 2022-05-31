import {pubsub} from './pubsub'


const todo = (()=>{
    let id = 0;
    const arrayOfTodos = [];
    const addTodo = ({name,description,date,project,priority})=>{
        arrayOfTodos.push({
                id, 
                name,
                description,
                date,
                project,
                priority,
            });
            id+=1;
            pubsub.publish('addedTodo',arrayOfTodos);
            console.log(arrayOfTodos);
        };
    pubsub.subscribe('addTask', addTodo);
})()
    
