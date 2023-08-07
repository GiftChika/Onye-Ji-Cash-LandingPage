let getBtn = document.querySelector('.getBtn');
let menu = document.querySelector('.menu');
let removeBtn = document.querySelector('.removeBtn');
// let open = document.querySelector('.open')

getBtn.addEventListener("click",function(){
    menu.classList.toggle("open");
});

// let Btn = document.querySelector('.btn');
// let men = document.querySelector('.men');
// // let open = document.querySelector('.open')

// Btn.addEventListener("click",function(){
//     men.classList.toggle("me");
// });


removeBtn.addEventListener("click", function(){
    menu.classList.toggle("menu");
});