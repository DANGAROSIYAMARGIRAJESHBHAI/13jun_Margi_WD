let a = document.getElementById('num1');
let b = document.getElementById('num2');   

function add(){
let c = parseInt(num1.value)  +  parseInt(num2.value) ;
let ans = document.getElementById('ans').innerText= "Answer is :  " + c ;
}
function minus(){
let c = parseInt(num1.value) -  parseInt(num2.value) ;
let ans = document.getElementById('ans').innerText = "Answer is :  " + c ;
}
function multiply(){
let c = parseInt(num1.value) * parseInt(num2.value) ;
let ans = document.getElementById('ans').innerText = "Answer is :  " + c ;
}
function division(){
let c = parseInt(num1.value) / parseInt(num2.value) ;
let ans = document.getElementById('ans').innerText = "Answer is :  " + c ;
}
function modul(){
let c = parseInt(num1.value) % parseInt(num2.value) ;
let ans = document.getElementById('ans').innerText = "Answer is :  " + c ;
}


