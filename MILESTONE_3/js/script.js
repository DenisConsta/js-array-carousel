
const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

const slider = document.querySelector('.img-container');
let imgTags = '';

for(let i=0; i<images.length; i++){
  imgTags += `
    <img class="item " src="assets/img/${images[i]}" alt="">
  `;
}

const items = document.getElementsByClassName('item');
slider.innerHTML += imgTags;
console.log(items);

const btnUp = document.querySelector(".fa-chevron-up");
const btnDown = document.querySelector(".fa-chevron-down");
let cont = 0;
items[cont].classList.add('d-block');

btnUp.addEventListener("click", function(){
  items[cont].classList.remove('d-block');
  if(cont === 0){
    cont = images.length;
  }
  items[--cont].classList.add('d-block');
});

btnDown.addEventListener("click", function(){
  items[cont].classList.remove('d-block');
  if(cont === (images.length-1)){
    cont = -1;
  }
  items[++cont].classList.add('d-block');
});