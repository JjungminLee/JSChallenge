const Img=document.getElementById("Image");
const secondPages=document.getElementById("secondPage");
const toDoss=document.getElementById("To-Do");
const quotess=document.getElementById("quotes");


const Image=[
    "url('JS/I1.png')",
    "url('JS/I2.jpg')",
    "url('JS/I3.jpg')",
    "url('JS/I4.jpg')",
    "url('JS/I5.jpg')",
    "url('JS/I8.jpg')",
   

]

const back=["#5780b3","#c47768","#857572","#a1adad","#f5c6c6","#ebe0c5"];
const todoArr=["#cbdbf580","#e6c1c180","#96717180","#66786780","#db748c80","#ebdf7380"];
const quoteArr=["#10437a80","#8f2b2b80","#4d3d3d80","rgb(14, 71, 16,0.5)","#d9525280","rgb(217, 187, 37,0.5)"];
const randomNum=Math.floor(Math.random()*Image.length);
const chosenImage=Image[randomNum];
const backColor=back[randomNum];
const todoColor=todoArr[randomNum];
const quoteColor=quoteArr[randomNum];


secondPages.style.backgroundColor=backColor;
Img.style.backgroundImage=chosenImage;
toDoss.style.backgroundColor=todoColor;
quotess.style.backgroundColor=quoteColor;


