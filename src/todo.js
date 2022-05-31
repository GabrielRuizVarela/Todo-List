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
                completed: false,
            });
            id+=1;
            pubsub.publish('addedTodo',arrayOfTodos);
            console.log(arrayOfTodos);
        };
    const updateCompleted =(i)=>{
        arrayOfTodos.forEach(todo => {
            if(todo.id==i){todo.completed = !todo.completed};
        })
        // console.table(arrayOfTodos);
    }
    pubsub.subscribe('addTask', addTodo);
    pubsub.subscribe('checked', updateCompleted)
})()
    
