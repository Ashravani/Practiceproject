let addToDoButton=document.getElementById("addToDo");
let addToDoContainer=document.getElementById("ToDoContainer");
let inputField=document.getElementById("inputtext");
 
addToDoButton.addEventListener('click',function(){
    var paragragh = document.createElement('p');
    paragragh.innerText=inputtext.value;
    addToDoContainer.appendChild(paragragh);
    inputField.value="";
    paragragh.addEventListener('click',function(){
        paragragh.style.textDecoration="line-through";
        paragragh.style.textDecorationColor="blue";
    })
})