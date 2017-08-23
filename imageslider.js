'use strict';

const images = [
  {src: 'https://placekitten.com/768/432', title: 'Purrr, purrr', alt: 'Refuse to drink water except out of someone\'s glass steal the warm chair right after you get up hopped up on catnip, and licks paws, and make meme, make cute face, meowwww.'},
  {src: 'https://placeimg.com/640/360', title: 'Random', alt: 'What, what'},
  {src: 'https://fillmurray.com/640/360', title: 'Murray', alt: 'Uhuh ... yih!'},
  {src: 'https://placecage.com/c/640/360', title: 'Crazy Cage', alt: 'check out this dolizzle shizznit amizzle'},
  {src: 'https://placecage.com/640/360', title: 'Normal Cage', alt: 'crazy adipiscing dope'},
  {src: 'https://placebear.com/640/360', title: 'Bear', alt: 'Nullizzle sapizzle velit'},
  {src: 'https://baconmockup.com/640/360', title: 'Bacon', alt: 'check it out vizzle'},
  {src: 'https://unsplash.it/640/360', title: 'New1', alt: 'check it out vizzle1'},
  {src: 'https://unsplash.it/g/640/360', title: 'New2', alt: 'check it out vizzle2'},
  {src: 'https://unsplash.it/640/360', title: 'New3', alt: 'check it out vizzle3'},
  {src: 'https://unsplash.it/g/640/360', title: 'New4', alt: 'check it out vizzle4'},
  {src: 'https://unsplash.it/640/360', title: 'New5', alt: 'check it out vizzle5'},
];

let difference = 0;
let imageOrder = 0;
let thumbnailOrder = 0;
let thumbnail = document.querySelectorAll('.small');
let largeImage = document.querySelector('.large');
let descriptionTitle = document.querySelector('h2');
let descriptionText = document.querySelector('p');
let leftButton = document.querySelector('.left');
let rightButton = document.querySelector('.right');

setThumbnail();
setLargePic();

leftButton.addEventListener('click', function(){
  changePic(-1);
});
rightButton.addEventListener('click', function(){
  changePic(1);
});

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener('click', function() {
    changeSmallToLarge(i);
  })
};

function setThumbnail() {
  imageOrder = thumbnailOrder + difference;
  if(imageOrder === images.length) {
    difference = 0;
    thumbnailOrder = 0;
  } else if(imageOrder < 0) {
    difference = images.length - thumbnail.length;
    thumbnailOrder = thumbnail.length - 1;
  }

  for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].src = images[i + difference].src;
    thumbnail[i].title = images[i + difference].title;
    thumbnail[i].alt = images[i + difference].alt;
  }
};

function setLargePic() {
  largeImage.src = thumbnail[thumbnailOrder].src;
  largeImage.title = thumbnail[thumbnailOrder].title;
  descriptionTitle.innerHTML = thumbnail[thumbnailOrder].title;
  descriptionText.innerHTML = thumbnail[thumbnailOrder].alt;
  setActive();
  console.log(thumbnailOrder);
};

function changePic(direction) {
  thumbnailOrder += direction;
  if(thumbnailOrder > thumbnail.length - 1) {
    difference++;
    thumbnailOrder = thumbnail.length - 1;
  } else if (thumbnailOrder < 0) {
    difference--;
    thumbnailOrder = 0;
  }
  setThumbnail();
  setLargePic();
};

function changeSmallToLarge(num) {
  thumbnailOrder = num;
  setLargePic();
};

function setActive() {
  for (let i = 0; i < thumbnail.length; i++) {
    if (thumbnail[i].id === 'active') {
      thumbnail[i].removeAttribute('id');
    }
  }
  thumbnail[thumbnailOrder].id = 'active';
};
