function createAndAppend(node, elemenType, textContent, id, classToAdd){
    // console.log(classToAdd)
    const element = document.createElement(elemenType);
    if(textContent){ element.textContent = textContent };
    if(classToAdd){ element.classList.add(classToAdd) }
    if(id){ element.id = id }
    return node.appendChild(element);
}

export default createAndAppend;