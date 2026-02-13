// Array of phrases
const phrases = [
  "“You honestly expect me to believe that people go on vacations without making a spreadsheet of fun first?” Phoebe asked. - The Wedding People", //"I am so lucky, but this is still really fucking hard!."
  "I just mean, a story can be beautiful not because of the way it ends. But because of the way it’s written. - The Wedding People",
  "Somos las albaceas de su memoria. - Dime quien soy",
  "Don’t work the system. Outsmart it. - Lessons in Chemistry",
  "Justo antes de quedarse dormida, se dio cuenta de que era verdad: había conseguido todo lo que quería. Sin embargo, lamentaba no haber deseado algo más. - La Biblioteca de Paris"
];

// Array of image URLs
const images = [
  "https://images.metmuseum.org/CRDImages/ep/original/DP-41223-001.jpg",
  "https://images.metmuseum.org/CRDImages/ep/original/DP346475.jpg",
  "https://images.metmuseum.org/CRDImages/ep/original/DP-17161-001.jpg",
  "https://images.metmuseum.org/CRDImages/ep/original/DT7098.jpg"
];

const display = document.getElementById('display');
const button = document.getElementById('surprise');
/*const imagebutton = document.getElementById('new-image');*/

button.addEventListener('click', () => {
  // Decide randomly: 50% chance text, 50% chance image
  if (Math.random() < 0.5) {
    // Show random phrase
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    display.textContent = phrase;
  } else {
    // Show random image
    const image = images[Math.floor(Math.random() * images.length)];
    display.innerHTML = `<img src="${image}" alt="Random Image">`;
  }
});


/*
phrasebutton.addEventListener('click', () => {
  // Decide randomly: 50% chance text, 50% chance image
  const randomphrase = phrases[Math.floor(Math.random() * phrases.length)];
  display.textContent = randomphrase;
});

imagebutton.addEventListener('click', () => {
  // Decide randomly: 50% chance text, 50% chance image
  const randomimage = images[Math.floor(Math.random() * images.length)];
  display.innerHTML = `<img src="${randomimage}" alt="Random Image">`;
});*/