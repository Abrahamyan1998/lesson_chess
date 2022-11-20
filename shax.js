let body = document.querySelector("body")
let opshin = document.querySelector(".opshin");
let numberBox = document.querySelector(".numberBox");
let number = document.querySelector(".number");
let box = document.querySelector(".box");
let row = document.querySelectorAll(".row");
let row1 = document.querySelectorAll(".row1");
let row2 = document.querySelectorAll(".row2");
let row3 = document.querySelectorAll(".row3");
let row4 = document.querySelectorAll(".row4");
let row5 = document.querySelectorAll(".row5");
let row6 = document.querySelectorAll(".row6");
let row7 = document.querySelectorAll(".row7");
let row8 = document.querySelectorAll(".row8");


let letter = document.querySelector(".letter");
let p = document.querySelectorAll("p")

for (let i = 0; i < row.length; i++) {
    if(i%2==1){
    row1[i].style.backgroundColor = "black"
    }
    
}
    
for (let j = 0; j < row.length; j++) {
    if(j%2==0){
    row2[j].style.backgroundColor = "black"
    }
}

for (let i = 0; i < row.length; i++) {
    if(i%2==1){
    row3[i].style.backgroundColor = "black"
    }
    
}

for (let j = 0; j < row.length; j++) {
    if(j%2==0){
    row4[j].style.backgroundColor = "black"
    }
}

for (let i = 0; i < row.length; i++) {
    if(i%2==1){
    row5[i].style.backgroundColor = "black"
    }
    
}
    
for (let j = 0; j < row.length; j++) {
    if(j%2==0){
    row6[j].style.backgroundColor = "black"
    }
}

for (let i = 0; i < row.length; i++) {
    if(i%2==1){
    row7[i].style.backgroundColor = "black"
    }
    
}

for (let j = 0; j < row.length; j++) {
    if(j%2==0){
    row8[j].style.backgroundColor = "black"
    }
}


body.style.backgroundColor = "#004242";
body.style.padding = "80px";

opshin.style.backgroundColor = "white";
opshin.style.width = "460px";
opshin.style.height = "460px";
opshin.style.margin = "20px";

box.   style.marginTop =" 25px";

letter.style.marginLeft = "40px";
letter.style.display = "flex";
letter.style.gap = "45px";



number.style.display = "flex";
number.style.flexDirection = "column";
number.style.gap = "32px";
number.style.marginTop = "35px";
number.style.padding = "10px";

numberBox.style.display = "flex";








