let circle = document.getElementById("circle");
circle.addEventListener("click",()=>{
    document.getElementById("iframe").src="./circle/index.html"
})

let timer = document.getElementById("timer");
console.log(timer);
timer.addEventListener("click",()=>{
    document.getElementById("iframe").src="./timer/index.html"
})
let stopwatch = document.getElementById("stopwatch");
console.log(stopwatch);
stopwatch.addEventListener("click",()=>{
    document.getElementById("iframe").src="./stopWatch/index.html"
})
let pencil = document.getElementById("pencil");
console.log(stopwatch);
pencil.addEventListener("click",()=>{
    document.getElementById("iframe").src="./pencil/canva.html"
})
