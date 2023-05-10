document.addEventListener("DOMContentLoaded", function() {
const cars = [
  {
    imgSrc: 'images/mazda787b/mazda787b-1.jpg',
    flagSrc: 'images/flag_jp.svg',
    name: 'Mazda 787B',
    info: 'The Mazda 787B is a legendary race car that won the 1991 24 Hours of Le Mans, making it the first and only Japanese car to ever win the race. Its unique four-rotor engine and distinctive sound made it a fan favorite.',
    link: 'mazda787b.html'
    },
    {
    imgSrc: 'images/lancia-delta-s4/lancia-delta-s4-1.jpg',
    flagSrc: 'images/flag_it.svg',
    name: 'Lancia Delta S4',
    info: 'The Lancia Delta S4 is a rally car that was built to compete in the World Rally Championship during the mid-1980s. Its powerful engine and advanced four-wheel drive system made it a dominant force in the sport.',
    link: 'lancia-delta-s4.html'
    },
    {
    imgSrc: 'images/dodge-viper/dodge-viper-1.jpg',
    flagSrc: 'images/flag_us.svg',
    name: 'Dodge Viper',
    info: 'The Dodge Viper is a sports car that was first introduced in 1991. It features a powerful V10 engine and distinctive styling that make it a standout on the road.',
    link: 'dodge-viper.html'
    },
    {
    imgSrc: 'images/porsche956c/porsche956c-1.jpg',
    flagSrc: 'images/flag_de.svg',
    name: 'Porsche 956C',
    info: 'The Porsche 956C is a sports prototype race car that dominated endurance racing during the 1980s. Its lightweight design and powerful engine made it a favorite among drivers and fans alike.',
    link: 'porsche956c.html'
    },
    {
    imgSrc: 'images/audi-sport-quattro-s1/audi-sport-quattro-s1-1.jpg',
    flagSrc: 'images/flag_de.svg',
    name: 'Audi Sport quattro S1',
    info: 'The Audi Sport quattro S1 is a rally car that was built in the mid-1980s to compete in the World Rally Championship. Its advanced four-wheel drive system and powerful engine made it a force to be reckoned with in the sport.',
    link: 'audi-sport-quattro-s1.html'
    },
    {
    imgSrc: 'images/nissan-skyline/nissan-skyline-1.jpg',
    flagSrc: 'images/flag_jp.svg',
    name: 'Nissan Skyline GT-R R32',
    info: 'The Nissan Skyline GT-R R32 is a sports car that was first introduced in 1989. Its powerful engine and advanced all-wheel drive system made it a favorite among car enthusiasts and racing fans.',
    link: 'nissan-skyline.html'
    },
    {
    imgSrc: 'images/audi-v8-quattro/audi-v8-quattro-1.jpg',
    flagSrc: 'images/flag_de.svg',
    name: 'Audi V8 quattro DTM',
    info: 'The Audi V8 quattro DTM is a touring car that was built in the early 1990s to compete in the Deutsche Tourenwagen Masters. Its powerful engine and advanced all-wheel drive system made it a formidable competitor in the series.',
    link: 'audi-v8-quattro.html'
    },
    {
      imgSrc: 'images/porsche959/porsche959-1.jpg',
      flagSrc: 'images/flag_de.svg',
      name: 'Porsche 959',
      info: 'The Porsche 959 was a supercar that was produced by Porsche from 1986 to 1988. It was the fastest production car in the world at the time of its release and featured many advanced technologies, such as an all-wheel drive system and an electronically controlled suspension.',
      link: 'porsche959.html'
    },
    {
      imgSrc: 'images/ford-rs200/ford-rs200-1.jpg',
      flagSrc: 'images/flag_uk.svg',
      name: 'Ford RS200',
      info: 'The Ford RS200 is a rally car that was built in the mid-1980s to compete in the Group B category of the World Rally Championship. It featured a mid-engine layout and a turbocharged engine that produced over 400 horsepower.',
      link: 'ford-rs200.html'
    },
    {
      imgSrc: 'images/subaru-impreza/subaru-impreza-1.jpg',
      flagSrc: 'images/flag_jp.svg',
      name: 'Subaru Impreza STI 22B',
      info: 'The Subaru Impreza is a compact car that has been in production since 1992. It is best known for its success in the World Rally Championship, where it won three championships in the late 1990s and early 2000s.',
      link: 'subaru-impreza.html'
    },
    {
      imgSrc: 'images/nissan-primera/nissan-primera-1.jpg',
      flagSrc: 'images/flag_jp.svg',
      name: 'Nissan Primera',
      info: 'The Nissan Primera was a mid-size car that was produced by Nissan from 1990 to 2008. It was known for its sporty handling and advanced technologies, such as a multi-link rear suspension and a continuously variable transmission.',
      link: 'nissan-primera.html'
    },
    {
      imgSrc: 'images/renaulsport-laguna/renaulsport-laguna-1.jpg',
      flagSrc: 'images/flag_fr.svg',
      name: 'Renaultsport Laguna',
      info: 'The Renaultsport Laguna is a high-performance version of the Renault Laguna, a mid-size car that was produced by Renault from 1993 to 2015. It was known for its sporty handling and powerful engines, including a V6 engine that produced over 200 horsepower.',
      link: 'renaulsport-laguna.html'
    },
    {
      imgSrc: 'images/ford-gt40/ford-gt40-1.jpg',
      flagSrc: 'images/flag_us.svg',
      name: 'Ford GT40',
      info: 'The Ford GT40 is a sports car that was produced by Ford from 1964 to 1969. It was designed to compete in endurance racing, and famously won the 24 Hours of Le Mans four years in a row from 1966 to 1969.',
      link: 'ford-gt40.html'
    },
    {
      imgSrc: 'images/porsche924/porsche924-1.jpg',
      flagSrc: 'images/flag_de.svg',
      name: 'Porsche 924',
      info: 'The Porsche 924 is a sports car produced by Porsche AG of Germany from 1976 to 1988. A two-door, 2+2 coupé, the 924 was intended to replace the Porsche 914 as the company\'s entry-level model.',
      link: 'porsche924.html'
    },
    {
      imgSrc: 'images/lancia037/lancia037-1.jpg',
      flagSrc: 'images/flag_it.svg',
      name: 'Lancia 037',
      info: 'The Lancia Rally (Tipo 151, also known as the Lancia Rally 037, Lancia 037 or Lancia-Abarth #037 from its Abarth project code 037) was a mid-engine sports car and rally car built by Lancia in the early 1980s to compete in the FIA Group B World Rally Championship.',
      link: 'lancia037.html'
    },
    {
      imgSrc: 'images/volvo850/volvo850-1.jpg',
      flagSrc: 'images/flag_sw.svg',
      name: 'Volvo 850',
      info: 'The Volvo 850 is a compact executive car that was produced by the Swedish manufacturer Volvo Cars from 1991 to 1997. Designed by Jan Wilsgaard, the car was introduced in a saloon body style; an estate style was introduced in 1993.',
      link: 'volvo850.html'
    },
    {
      imgSrc: 'images/detomaso-pantera/detomaso-pantera-1.jpg',
      flagSrc: 'images/flag_it.svg',
      name: 'De Tomaso Pantera',
      info: 'The De Tomaso Pantera is a mid-engine sports car produced by Italian automobile manufacturer De Tomaso from 1971 to 1993. Italian for "Panther", the Pantera was the automaker\'s most popular model, with over 7,000 manufactured over its 20-year production run.',
      link: 'detomaso-pantera.html'
    },
    {
      imgSrc: 'images/porsche-917/porsche-917-1.jpg',
      flagSrc: 'images/flag_de.svg',
      name: 'Porsche 917',
      info: 'The Porsche 917 is a race car that gave Porsche its first overall wins at the 24 Hours of Le Mans in 1970 and 1971. Powered by the Type 912 flat-12 engine of 4.5, 4.9, or 5 litres, the 917/30 Can-Am variant was capable of a 0-62 mph (100 km/h) time of 2.1 seconds.',
      link: 'porsche-917.html'
    },
    {
      imgSrc: 'images/mclaren-f1/mclaren-f1-1.jpg',
      flagSrc: 'images/flag_uk.svg',
      name: 'McLaren F1',
      info: 'The McLaren F1 is a sports car designed and manufactured by McLaren Cars. It is considered to be one of the most iconic sports cars of the 1990s. With a top speed of 240 mph, it held the title of world\'s fastest production car for over a decade.',
      link: 'mclaren-f1.html'
    },
    {
      imgSrc: 'images/mazda-rx-7/mazda-rx-7-1.jpg',
      flagSrc: 'images/flag_jp.svg',
      name: 'Mazda RX-7',
      info: 'The third generation (1992-2002) of the RX-7, known as the FD, is considered to be the most iconic. It features a twin-turbocharged rotary engine and a lightweight chassis, which makes it a favorite among car enthusiasts.',
      link: 'mazda-rx-7.html'
    },
    {
      imgSrc: 'images/bmw-e30/bmw-e30-1.jpg',
      flagSrc: 'images/flag_de.svg',
      name: 'BMW M3 E30',
      info: 'The BMW E30 is a compact executive car that was produced from 1982 to 1994. It is the second generation of the BMW 3 Series and is considered to be a classic. The E30 is known for its iconic design and driving dynamics.',
      link: 'bmw-e30.html'
    },
    {
      imgSrc: 'images/bmw-m3-gtr/bmw-m3-gtr-1.jpg',
      flagSrc: 'images/flag_de.svg',
      name: 'BMW M3 GTR',
      info: 'The BMW M3 GTR is a high-performance version of the BMW 3 Series that was produced from 2001 to 2005. It was built for racing in the American Le Mans Series, and only 10 road cars were produced for homologation purposes.',
      link: 'bmw-m3-gtr.html'
    },
    {
      imgSrc: 'images/mercedes-benz-e190/mercedes-benz-e190-1.jpg',
      flagSrc: 'images/flag_de.svg',
      name: 'Mercedes-Benz E190',
      info: 'The Mercedes-Benz E190 is a compact executive car that was introduced in 1982. It was the first model in the Mercedes-Benz E-Class line and quickly became popular due to its combination of style, performance, and luxury.',
      link: 'mercedes-benz-e190.html'
    },
    {
      imgSrc: 'images/ferrari-f40/ferrari-f40-1.jpg',
      flagSrc: 'images/flag_it.svg',
      name: 'Ferrari F40',
      info: 'The Ferrari F40 is a mid-engine, rear-wheel-drive sports car that was built from 1987 to 1992. It was designed to celebrate Ferrari\'s 40th anniversary and was the last car that Enzo Ferrari personally approved.',
      link: 'ferrari-f40.html'
    },
    {
      imgSrc: 'images/mitsubishi-lancer-evo/mitsubishi-lancer-evo-1.jpg',
      flagSrc: 'images/flag_jp.svg',
      name: 'Mitsubishi Lancer Evolution VI',
      info: 'The Mitsubishi Lancer Evolution is a high-performance sedan that was introduced in 1992. It quickly gained a reputation as a rally legend, winning numerous races and championships around the world.',
      link: 'mitsubishi-lancer-evo.html'
    },
    {
      imgSrc: 'images/peugeot205/peugeot205-1.jpg',
      flagSrc: 'images/flag_fr.svg',
      name: 'Peugeot 205 T16',
      info: 'The Peugeot 205 is a hot hatch that was produced from 1984 to 1994. It was one of the most popular and successful models in the 205 line, with a reputation for nimble handling and strong performance.',
      link: 'peugeot205.html'
    },
    {
      imgSrc: 'images/lancia-stratos/lancia-stratos-1.jpg',
      flagSrc: 'images/flag_it.svg',
      name: 'Lancia Stratos',
      info: 'The Lancia Stratos is a mid-engine, rear-wheel-drive sports car that was built from 1972 to 1974. It was designed specifically for rallying and was highly successful, winning the World Rally Championship in 1974, 1975, and 1976.',
      link: 'lancia-stratos.html'
    },
    {
      imgSrc: 'images/porsche935/porsche935-1.jpg',
      flagSrc: 'images/flag_de.svg',
      name: 'Porsche 935/78 Moby Dick',
      info: 'The Porsche 935 is a race car that was produced from 1976 to 1981. It was designed specifically for Group 5 racing and was highly successful, winning numerous races and championships around the world.',
      link: 'porsche935.html'
    },
    {
      imgSrc: 'images/ferrari308/ferrari308-1.jpg',
      flagSrc: 'images/flag_it.svg',
      name: 'Ferrari 308',
      info: 'The Ferrari 308 GTB/GTS is a mid-engine, rear-wheel-drive sports car that was produced from 1975 to 1985. It was highly popular and was featured in the TV series "Magnum, P.I."',
      link: 'ferrari308.html'
    }
]

let selectedCars = [];

function getRandomCar(carsArray) {
  let randomCar = carsArray[Math.floor(Math.random() * carsArray.length)];
  if (selectedCars.includes(randomCar)) {
    if(selectedCars.length === carsArray.length) {
      selectedCars = [];
    }
    return getRandomCar(carsArray);
  } else {
    selectedCars.push(randomCar);
    return randomCar;
  }
}

function updateShowcase() {
  const leftBox = document.querySelector('.showcase__box-left');
  const rightBox = document.querySelector('.showcase__box-right');
  const leftItems = leftBox.querySelectorAll('.showcase__item');
  const rightItems = rightBox.querySelectorAll('.showcase__item');

  selectedCars = [];

  leftItems.forEach(item => {
    const car = getRandomCar(cars);
    item.querySelector('.showcase__car-img').setAttribute('src', car.imgSrc);
    item.querySelector('.showcase__car-flag').setAttribute('src', car.flagSrc);
    item.querySelector('.showcase__name').textContent = car.name;
    item.querySelector('.showcase__info-text').textContent = car.info;
    item.querySelector('.button__discover').setAttribute('href', car.link);
  });

  rightItems.forEach(item => {
    const car = getRandomCar(cars);
    item.querySelector('.showcase__car-img').setAttribute('src', car.imgSrc);
    item.querySelector('.showcase__car-flag').setAttribute('src', car.flagSrc);
    item.querySelector('.showcase__name').textContent = car.name;
    item.querySelector('.showcase__info-text').textContent = car.info;
    item.querySelector('.button__discover').setAttribute('href', car.link);
  });
}

updateShowcase();


});