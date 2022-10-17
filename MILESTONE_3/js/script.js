const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

const doc = document.querySelector.bind(document);
const slider = doc('.img-container');
const gallery = doc('.gallery');
let imgTags = '', thumbTags = '';
let cont = 0;

for(let i=0; i<images.length; i++){
  imgTags += `
    <img class="item " src="assets/img/${images[i]}" alt="">
  `;

  thumbTags += `
    <img class="thumbnail " src="assets/img/${images[i]}" alt="">
  `;
}

const items = document.getElementsByClassName('item');
const thumbs = document.getElementsByClassName('thumbnail');
slider.innerHTML += imgTags;
gallery.innerHTML += thumbTags;

//? Buttons
const btnUp = doc(".fa-chevron-up"), btnDown = doc(".fa-chevron-down");

//? Init items & thumbnails
items[cont].classList.add('d-block');
thumbs[cont].classList.add('active');

//? Listener btnUp
btnUp.addEventListener("click", function(){
  items[cont].classList.remove('d-block');
  thumbs[cont].classList.remove('active');

  if(cont === 0)
    cont = images.length;
  
  items[--cont].classList.add('d-block');
  thumbs[cont].classList.add('active');
});

//? Listener btnDown
btnDown.addEventListener("click", function(){
  items[cont].classList.remove('d-block');
  thumbs[cont].classList.remove('active');

  if(cont === (images.length-1))
    cont = -1;
  
  items[++cont].classList.add('d-block');
  thumbs[cont].classList.add('active');
});