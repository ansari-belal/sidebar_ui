let container = document.querySelector('.container');
let content = document.querySelector('.content');
let Btn2 = content.querySelector('#BTN2');
let Btn = document.querySelector('#BTN');
let box = document.querySelector('.box');

function show(){
 container.classList.add('open2');
 content.classList.add('animate');
 content.classList.remove('animate2');
 box.style.filter = "blur(3px)";
}

function hide(){
 container.classList.remove('open2');
 content.classList.remove('animate');
 content.classList.add('animate2');
 box.style.filter = "none";
}

Btn.addEventListener('click', function(){
 show();
});

container.addEventListener('click', function(){
 hide();
});

content.addEventListener('click', function(event){
 event.stopPropagation('open2');
});

Btn2.addEventListener('click', function(){
 hide();
});

document.addEventListener('keydown', function(event){
 if (event.keycode === 27 && container.classList.contains('open2')) {
   hide();
 }
});