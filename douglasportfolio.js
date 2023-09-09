let droparrow = document.querySelector('.skills_arrow');
let skills = document.querySelector('.skills_list');
let dropservice = document.querySelector('.services_button');
let service = document.querySelector('.services_modal');
let darkmode = document.querySelector('#theme-button');
let body = document.querySelector('.page');
// let close = document.querySelector('.nav_btns');
// let opens = document.getElementById('nav-toggle');

const toTop = document.querySelector('.upto');
toTop.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior : 'smooth'
  });
})


droparrow.addEventListener('click',()=>{
    skills.classList.toggle('hidden')
    
});
dropservice.addEventListener('click',()=>{
    service.classList.toggle('hidden')
});
darkmode.addEventListener('click',()=>{
  body.classList.toggle('darktheme');
  darkmode.classList.toggle('uil-sun');
 
//   document.querySelector(".begin16").style.color="white"
// document.querySelector(".testimonial_client").style.color="white"
// document.querySelector(".begin17").style.color="white"

});
let  menu = document.querySelector('.nav-link')
let openbtn = document.querySelector('.nav_btns');
let closebtn = document.querySelector('.nav_btns2');
openbtn.addEventListener("click",()=>{
  console.log("hello")
  // openbtn.classList.toggle("hide");
  menu.classList.remove("hide")
})
closebtn.addEventListener("click",()=>{
  menu.classList.add("hide")
  console.log("hello")

});
var swiper = new Swiper(".portfolioholder", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".slide-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// let  menu = document.querySelectorAll('.nav-link')
// let openbtn = document.querySelector('.nav_btns');
// let closebtn = document.querySelector('.nav_btns2');
// openbtn.addEventListener("click",()=>{
//   menu.classList.toggle('active')
// });
// if(openbtn){
//  openbtn.addEventListener("click",()=>{
//    menu.classList.remove("hide")
//  })
// }
// if(closebtn){
//   closebtn.addEventListener("click",()=>{
//     menu.classList.add("hide")
//   })
// }
// openbtn.addEventListener("click",()=>{
//   console.log("hello")
// })


// 📁 Assets 
// Icons: https://iconscout.com/unicons
// slider

