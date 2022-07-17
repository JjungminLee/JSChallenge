
const headers=document.querySelector("#header");
const container=document.querySelector("#container");
const toDoForm=document.getElementById("todo-form")
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");
headers.innerText=`What's up! ${localStorage.getItem(USERNAME_KEY)}`;
let toDos=[];

function handleToSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    
    //엔터 누를 때 엔터창 비워지게
    toDoInput.value="";//초기화

    const newTodoObj={
        text:newToDo,
        id:Date.now()
    };
    console.log(newTodoObj); 
    toDos.push(newTodoObj);//배열에 새로운 todo 저장 
    
    paintToDo(newTodoObj);
    saveToDos();
}

//배열을 덮어쓴다는 느낌으로

function saveToDos(){

    localStorage.setItem("todos",JSON.stringify(toDos));
}

function paintToDo(newToDoObj){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText="📝"+ newToDoObj.text;
    li.id=newToDoObj.id;
    const button=document.createElement("button");
    button.innerText="❌";
    button.style.background="transparent";
    button.style.border=0;
    button.style.outline=0;
    
    button.addEventListener("click",deleteToDo);//버튼이 여기 있어야함. 애초에 함수내부에서 버튼을 만들어줬기 때문에
    li.appendChild(span);
    li.appendChild(button);

    

    toDoList.appendChild(li);


}

function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();

    toDos=toDos.filter(toDo=>toDo.id!==parseInt(li.id)); //지워야 하는 애만 빼고 new 배열 만들어주기
    //수정된것에 맞춰서 stringify
    saveToDos();

}
toDoForm.addEventListener("submit",handleToSubmit);

const savedToDos=localStorage.getItem("todos");

if(savedToDos!=null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;

    parsedToDos.forEach(paintToDo);//parsedToDos 배열의 item들이 paintToDo에 잘 올라감
}

