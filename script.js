
const question_answer01 = document.querySelector('.question_1');
const question_answer02 = document.querySelector('.question_2');
const question_answer03 = document.querySelector('.question_3');
const question_answer04 = document.querySelector('.question_4');
const answer01 = document.querySelector('.ans01');
const answer02 = document.querySelector('.ans02');
const answer03 = document.querySelector('.ans03');
const answer04 = document.querySelector('.ans04');
const navHamburger = document.querySelector('.nav_icon');
const navBar = document.querySelector('.navigation_bar');


question_answer01.addEventListener('click' , function(){
    answer01.classList.toggle('hidden2');
});

question_answer02.addEventListener('click' , function(){
    answer02.classList.toggle('hidden2');
});

question_answer03.addEventListener('click' , function(){
    answer03.classList.toggle('hidden2');
});

question_answer04.addEventListener('click' , function(){
    answer04.classList.toggle('hidden2');
});



navHamburger.addEventListener('click' , function(){
    navBar.classList.toggle('hidden');
});