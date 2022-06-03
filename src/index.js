import './style.css';
import {generate, Project} from './DOM'
import {parse, format, lightFormat} from 'date-fns'
import {pubsub} from './pubsub'
import {todo} from './todo'
console.log("It's working")

// document.addEventListener('DOMContentLoaded',()=>{
//     const Inbox = (()=>{
//         document.querySelector('#inbox-button')
//             .addEventListener('click',(e) => {
//                 pubsub.publish('inboxClick', e.target);
//             });
//     })()
// })