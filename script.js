let getBtn = document.querySelector('.getBtn');
let menu = document.querySelector('.menu');
let removeBtn = document.querySelector('.removeBtn');


getBtn.addEventListener("click",function(){
    menu.classList.toggle("open");
});

removeBtn.addEventListener("click", function(){
    menu.classList.toggle("open");
});

let btn = document.querySelectorAll('.btn');
let form = document.querySelector('.form');
let cancel =document.querySelector('#cancel')

btn.forEach(btns => {
    btns.addEventListener("click", function(){
        form.classList.toggle("open");
    });
     
}); 
cancel.addEventListener("click", () => {
    form.classList.toggle("open");
});