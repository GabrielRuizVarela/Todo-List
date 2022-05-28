
function generateInbox(title){
    const container = document.querySelector('#app-container');
    container.innerHTML = `
    <div class="title">${title}</div>
    <div id='add-task'>
    <div id='add-task-listener'>
    <span class="iconify" data-icon="akar-icons:plus"></span>
    <div>Add task</div>
    </div>
    <div>
    </div>
    </div>`
}

function addTask(add){
    const container = document.querySelector('#app-container');
    if(add){
        const div = document.createElement('div');
        div.classList.add('add-container');
        div.innerHTML = `
            <div id="add-field-container">
                <div id="add-field">
                    <textarea name="name" id="name" cols="30" rows="1" placeholder="e.g., Read chapter 3"></textarea>
                    <textarea name="description" id="description" cols="30" rows="2" placeholder="Description"></textarea>
                    <div class="add-field-buttons">
                        <button type="button" id="date-button">Due date</button>
                        <button type="button" id="list-button">Inbox</button>
                    </div>
                </div>
                <div class="add-field-buttons">
                    <button id="add-task-button">Add task</button>
                    <button id="cancel-button">Cancel</button>
                </div>
            </div>`;
        container.appendChild(div);
    } else{
        document.querySelector('.add-container').remove();
    }
    // return div;
}

export {generateInbox, addTask};