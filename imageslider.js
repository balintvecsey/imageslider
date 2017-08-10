'use strict';

var images = [
  {title: 'Cat', text: 'Purr, purr', url: 'http://placekitten.com/768/432'},
  {title: 'Dog', text: 'Bark, bark', url: 'http://lorempixel.com/768/432/'},
  {title: 'Thing', text: 'Purr, purr', url: 'http://lorempixel.com/768/432/'},
  {title: 'Random', text: 'Purr, purr', url: 'http://lorempixel.com/768/432/'},
  {title: 'Aha', text: 'Purr, purr', url: 'http://lorempixel.com/768/432/'},
  {title: 'Hello', text: 'Purr, purr', url: 'http://lorempixel.com/768/432/'},
  {title: 'Thanks', text: 'Purr, purr', url: 'http://lorempixel.com/768/432/'},
];

var largeImage = document.querySelector('img');
largeImage.setAttribute('src', images[0].url);
