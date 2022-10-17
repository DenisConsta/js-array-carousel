
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

items[0].classList.add('d-block');