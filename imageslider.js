'use strict';

const images = [
  {src: 'https://i.imgur.com/oB8om0O.jpg?1', title: 'Vulpes', alt: 'The red fox is the most abundant and most widely distributed species of Vulpes. They currently live in most sections of the Northern Hemisphere. They also are present in Australia, though were brought there by humans for fox hunting.'},
  {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Swift_Fox.jpg/1200px-Swift_Fox.jpg', title: 'Velox', alt: 'The swift fox is found in the western grasslands of North America, specifically Montana, Colorado, New Mexico, Oklahoma, and Texas, as well as some sections of Canada.'},
  {src: 'https://c.pxhere.com/photos/03/39/fennec_fox_zoo_vulpes_zerda_animal_nocturnal_large_ears_fauna-1197014.jpg!d', title: 'Zerda', alt: 'The fennec fox lives in the northernmost sections of Africa. It was not previously within Vulpes, but genetic evidence shows its close relation with Blanford\'s fox, making it a true fox.'},
  {src: 'https://2.bp.blogspot.com/-lPxrgN8Fq80/VtntjS2niaI/AAAAAAAAmaU/kazCSD3KwZo/s1600/Dogs%2B26.jpg', title: 'Lagopus', alt: 'Arctic foxes inhabit all of the Arctic (Greenland, Russia, Canada etc), Iceland, and parts of Scandinavia, and hold the title of being the only native land mammal in all of Iceland. This fox arrived in Iceland during the climax of the last ice age.'},
  {src: 'https://i.imgur.com/ZEHNn4v.jpg', title: 'Pallida', alt: 'The pale fox lives in upper middle Africa and is an arid area-dwelling species.'},
  {src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Yawning_corsac_fox.jpg', title: 'Corsac', alt: 'Corsac foxes live in central Asia. Like V. chama and V. cana, they do best in semiarid deserts. This fox is within the holarctic clade of foxes. This clade also contains the Arctic fox, swift fox, and red fox.'},
  {src: 'https://i.imgur.com/Ji1xo7T.jpg', title: 'Chama', alt: 'The Cape fox is only found in the south of Africa, including Zimbabwe, Botswana, and South Africa. They thrive in semiarid and arid environments with rich grasslands.'},
  {src: 'https://www.biolib.cz/IMG/GAL/BIG/172021.jpg', title: 'Cana', alt: 'Blanford\'s fox dwells in section of the Middle East including Afghanistan, Egypt, Turkestan, Iran, Pakistan, and Israel. This species prefers semiarid environments.'},
  {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Indian_Fox_at_Little_Rann_of_Kutch.jpg/1200px-Indian_Fox_at_Little_Rann_of_Kutch.jpg', title: 'Bengalensis', alt: 'Bengal foxes are endemic to India and live throughout the subcontinent, and have not been placed on the endangered species list, but have become threatened by lack of native habitat due to human expansion.'},
  {src: 'https://c1.staticflickr.com/1/732/22031423256_366b17b65c_b.jpg', title: 'Ferrilata', alt: 'The Tibetan sand fox, as the name suggests, is endemic to the Tibetan and Ladakh plateau in Nepal, China, Sikkim, and Bhutan. This species lives at altitudes up to 5300 m and semideserts.'},
  {src: 'http://animalark.org/wp-content/uploads/2015/09/kit-fox.jpg', title: 'Macrotis', alt: 'Kit foxes are an arid area-dwelling North American species. They are found in Oregon, Colorado, Nevada, Utah, California, New Mexico, and Texas. They also have a population in Mexico.'},
  {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/R%C3%BCppell%27s_fox.jpg/1200px-R%C3%BCppell%27s_fox.jpg', title: 'Rueppellii', alt: 'Ruppel\'s foxes are specific to northern Africa and sections of the Middle East.'},
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

window.onload = function() {
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
};

window.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      changePic(-1);
      break;
    case 39:
      changePic(1);
      break;
  }
}

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
    if (thumbnail[i].parentElement.id === 'active') {
      thumbnail[i].parentElement.removeAttribute('id');
    }
  }
  thumbnail[thumbnailOrder].parentElement.id = 'active';
};
