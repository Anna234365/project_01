let kitty = document.querySelector('.kitty');

let kittySrc = kitty.getAttribute('src');

alert(kittySrc);

kitty.setAttribute('src', 'kitty2.jpg');

alert(kittySrc);

kittySrc = kitty.getAttribute('src');

alert(kittySrc);
