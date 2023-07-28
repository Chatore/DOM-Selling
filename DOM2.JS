/*********** HEADER *********** */
var app = document.querySelector('header');
  
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .changeDelay(24)
  .typeString('🎄C\' est <strong> NOEL </strong>, je peux maintenant m\'amuser a acheter : <strong> des cadeaux 🎄</strong>')
  .pauseFor(6000)
  .deleteChars(15)
  .typeString('<strong> Pour Moi 🎄</strong> ')
  .pauseFor(6000)
  .deleteChars(12)
  .typeString('<strong>Pour Ma famielle 🎄</strong> ')
  .pauseFor(6000)
  .deleteChars(15)
  .typeString('<strong> Mes camarade 🎄</strong> ')
  .pauseFor(6000)
  .deleteChars(22)
  .typeString('<strong> Et Bien Plus Encore 🎄</strong> ')
  .pauseFor(6000)
  .start();

/*********** FIN ANIMATION HEADER *********** */