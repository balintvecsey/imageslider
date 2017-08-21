'use strict';

const images = [
  {src: 'https://placekitten.com/768/432', title: 'Purrr, purrr', text: 'Refuse to drink water except out of someone\'s glass steal the warm chair right after you get up hopped up on catnip, and licks paws, and make meme, make cute face, meowwww.'},
  {src: 'https://placeimg.com/640/360', title: 'Random', text: 'What, what'},
  {src: 'https://fillmurray.com/640/360', title: 'Murray', text: 'Uhuh ... yih!'},
  {src: 'https://placecage.com/c/640/360', title: 'Crazy Cage', text: 'check out this dolizzle shizznit amizzle'},
  {src: 'https://placecage.com/640/360', title: 'Normal Cage', text: 'crazy adipiscing dope'},
  {src: 'https://placebear.com/640/360', title: 'Bear', text: 'Nullizzle sapizzle velit'},
  {src: 'https://baconmockup.com/640/360', title: 'Bacon', text: 'check it out vizzle'},
  {src: 'https://unsplash.it/640/360', title: 'New1', text: 'check it out vizzle1'},
  {src: 'https://unsplash.it/g/640/360', title: 'New2', text: 'check it out vizzle2'},
  {src: 'https://unsplash.it/640/360', title: 'New3', text: 'check it out vizzle3'},
  {src: 'https://unsplash.it/g/640/360', title: 'New4', text: 'check it out vizzle4'},
  {src: 'https://unsplash.it/640/360', title: 'New5', text: 'check it out vizzle5'},
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
  thumbnail[i].src = images[i].src;
  thumbnail[i].title = images[i].title;
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
  largeImage.src = images[imageOrder].src;
  largeImage.title = images[imageOrder].title;
  descriptionTitle.innerHTML = images[imageOrder].title;
  descriptionText.innerHTML = images[imageOrder].text;
  setActive();
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

function setActive() {
  for (let i = 0; i < thumbnail.length; i++) {
    if (thumbnail[i].id === 'active') {
      thumbnail[i].removeAttribute('id');
    }
  }
  thumbnail[imageOrder].id = 'active';
};
