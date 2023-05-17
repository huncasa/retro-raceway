$(document).ready(function() {
  const gallery = $('.gallery');

  function addImage(imgSrc) {
    const img = $('<a>').attr('href', imgSrc).append($('<img>').attr('src', imgSrc).addClass('gallery-image'));
    img.attr('data-lightbox', 'gallery');
    gallery.append(img);
  }
  
  const folders = [
    'alfaromeo155',
    'audi-sport-quattro-s1',
    'audi-v8-quattro',
    'bmw-e30',
    'bmw-m3-gtr',
    'detomaso-pantera',
    'dodge-viper',
    'ferrari308',
    'ferrari-f40',
    'ford-gt40',
    'ford-rs200',
    'lancia037',
    'lancia-delta-s4',
    'lancia-stratos',
    'mazda787b',
    'mazda-rx-7',
    'mclaren-f1',
    'mercedes-benz-e190',
    'mitsubishi-lancer-evo',
    'nissan-primera',
    'nissan-skyline',
    'peugeot205',
    'porsche-917',
    'porsche924',
    'porsche935',
    'porsche956c',
    'porsche959',
    'renaulsport-laguna',
    'subaru-impreza',
    'volvo850'
  ]
  
  folders.forEach(folder => {
    for (let i = 1; i <= 14; i++) {
      const imgSrc = `images/${folder}/${folder}-${i}.jpg`;
      addImage(imgSrc);
    }
  });
});