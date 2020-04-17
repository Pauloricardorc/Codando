const OpacityBody = document.querySelector(".body-contum");
const OpacityBody1 = document.querySelector(".body-contdois");
const OpacityBody2 = document.querySelector(".body-conttres");

function Mostrar1(){
    console.log(OpacityBody.classList);
    OpacityBody.classList.add('animated');
    OpacityBody.classList.add('flipInX');
    OpacityBody.classList.add('delay-0.5s');
    OpacityBody.classList.remove('invisible');
};
function Mostrar2(){
    console.log(OpacityBody.classList);
    OpacityBody1.classList.add('animated');
    OpacityBody1.classList.add('flipInX');
    OpacityBody1.classList.add('delay-0.5s');
    OpacityBody1.classList.remove('invisible');
};
function Mostrar3(){
    console.log(OpacityBody.classList);
    OpacityBody2.classList.add('animated');
    OpacityBody2.classList.add('flipInX');
    OpacityBody2.classList.add('delay-0.5s');
    OpacityBody2.classList.remove('invisible');
};