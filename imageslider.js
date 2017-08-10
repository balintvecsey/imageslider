'use strict';

var images = [
  {title: 'Purrr, purrr', text: 'Refuse to drink water except out of someone\'s glass steal the warm chair right after you get up hopped up on catnip, and licks paws, and make meme, make cute face, meowwww.', url: 'http://placekitten.com/768/432'},
  {title: 'Random', text: 'What, what', url: 'http://placeimg.com/640/360'},
  {title: 'Murray', text: 'Uhuh ... yih!', url: 'http://fillmurray.com/640/360'},
  {title: 'Crazy Cage', text: 'check out this dolizzle shizznit amizzle', url: 'http://placecage.com/c/640/360'},
  {title: 'Normal Cage', text: 'crazy adipiscing dope', url: 'http://placecage.com/640/360'},
  {title: 'Bear', text: 'Nullizzle sapizzle velit', url: 'http://placebear.com/640/360'},
  {title: 'Bacon', text: 'check it out vizzle', url: 'http://baconmockup.com/640/360'},
];

var thumbnail = document.querySelectorAll('.small');
var largeImage = document.querySelector('.large');
var descriptionTitle = document.querySelector('h3');
var descriptionText = document.querySelector('p');

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].setAttribute('src', images[i].url);
}

largeImage.setAttribute('src', thumbnail[0].src);
descriptionTitle.innerHTML = images[0].title;
descriptionText.innerHTML = images[0].text;
console.log(descriptionTitle);
console.log(descriptionText);
