const quotes=[
    "The root of suffering is attachment",
    "There is no path to Happiness : Hapiness is the path",
    "Overthinking is the biggest cause of unhappiness",
    "Suffering is not holding you, you are holding suffering",
    "Be patient.Everything comes to you in the right moment",
    "Pain is Inevitable. Suffering is optional",
    "Don't judge others, because you are not perfect",
    
]

const quote=document.querySelector("#quotes");
const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todayQuote;