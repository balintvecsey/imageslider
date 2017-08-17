'use strict';

const images = [
  {title: 'Purrr, purrr', text: 'Refuse to drink water except out of someone\'s glass steal the warm chair right after you get up hopped up on catnip, and licks paws, and make meme, make cute face, meowwww.', url: 'https://placekitten.com/768/432'},
  {title: 'Random', text: 'What, what', url: 'https://placeimg.com/640/360'},
  {title: 'Murray', text: 'Uhuh ... yih!', url: 'https://fillmurray.com/640/360'},
  {title: 'Crazy Cage', text: 'check out this dolizzle shizznit amizzle', url: 'https://placecage.com/c/640/360'},
  {title: 'Normal Cage', text: 'crazy adipiscing dope', url: 'https://placecage.com/640/360'},
  {title: 'Bear', text: 'Nullizzle sapizzle velit', url: 'https://placebear.com/640/360'},
  {title: 'Bacon', text: 'check it out vizzle', url: 'https://baconmockup.com/640/360'},
];

let imageOrder = 0;
let thumbnail = document.querySelectorAll('.small');
let largeImage = document.querySelector('.large');
let descriptionTitle = document.querySelector('h2');
let descriptionText = document.querySelector('p');
let leftButton = document.querySelector('.left');
let rightButton = document.querySelector('.right');

setLargePic();

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].src = images[i].url;
  thumbnail[i].addEventListener('click', function() {
    changeSmallToLarge(i);
  })
}

leftButton.addEventListener('click', function(){
  changePic(-1);
});
rightButton.addEventListener('click', function(){
  changePic(1);
});

function setLargePic() {
  largeImage.src = images[imageOrder].url;
  descriptionTitle.innerHTML = images[imageOrder].title;
  descriptionText.innerHTML = images[imageOrder].text;
  console.log(imageOrder);
};

function changePic(direction) {
  imageOrder += direction;
  if(imageOrder === images.length) {
    imageOrder = 0;
  } else if(imageOrder < 0) {
    imageOrder = images.length - 1;
  }
  setLargePic();
};

function changeSmallToLarge(num) {
  imageOrder = num;
  setLargePic();
};
