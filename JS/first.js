const firstPage=document.querySelector("#firstPage");
const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const clock=document.querySelector("#clock");
const secondPage=document.querySelector("#secondPage");
const header=document.querySelector("#header");
const HIDDEN="hidden"; //visibility

const USERNAME_KEY="userName";
function clockFunc(){
    const today=new Date();
    const hour=String(today.getHours()).padStart(2,"0");
    const minute=String(today.getMinutes()).padStart(2,"0");
    const second=String(today.getSeconds()).padStart(2,"0");

    clock.innerText=`${hour} : ${minute} : ${second}`;

}



function onLoginSubmit(event){
    event.preventDefault();
    const inputValue=loginInput.value;
    localStorage.setItem(USERNAME_KEY,inputValue);
    secondPage.classList.remove(HIDDEN);//localstroage에 값이 있으면 다음페이지 화면에 띄우기
    firstPage.classList.add(HIDDEN);
    
    header.innerText=`What's up! "${localStorage.getItem(USERNAME_KEY)}"`;

}

const savedUserName=localStorage.getItem(USERNAME_KEY);
if(savedUserName===null){
    firstPage.classList.remove(HIDDEN); //localstorage에 없을때는 firstPage을  화면에 띄우기
    secondPage.classList.add(HIDDEN);
   
    loginForm.addEventListener("submit",onLoginSubmit);
    clockFunc();
    setInterval(clockFunc,1000);
}
else{
    secondPage.classList.remove(HIDDEN);//localstroage에 값이 있으면 다음페이지 화면에 띄우기
    firstPage.classList.add(HIDDEN);
    
}
