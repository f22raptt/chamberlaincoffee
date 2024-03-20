
  var headerElement = document.getElementById('header');
  var texts = ['SUBSCRIBE & SAVE TODAY + FREE SHIPPING!', '5X SOLD OUT MATCHA IN STOCK NOW'];
  var currentIndex = 0;
  var intervalId;

  function changeText(direction) {
    currentIndex = (currentIndex + direction + texts.length) % texts.length;
    headerElement.textContent = texts[currentIndex];
  }

  function startAutomaticRotation() {
    intervalId = setInterval(function() {
      changeText(1);
    }, 3000);
  }

  function stopAutomaticRotation() {
    clearInterval(intervalId);
  }

  // Initial automatic rotation
  startAutomaticRotation();

  // Event listeners for manual rotation
  document.getElementById('prevButton').addEventListener('click', function() {
    stopAutomaticRotation();
    changeText(-1);
  });

  document.getElementById('nextButton').addEventListener('click', function() {
    stopAutomaticRotation();
    changeText(1);
  });

   function dropdown() {

   document.getElementById("dropdown").style.display = "block"
    document.getElementById("background").style.display = "block"
  }
  function exit() {

    document.getElementById("dropdown").style.display = "none"
     document.getElementById("background").style.display = "none"
   }
   function login() {

    document.getElementById("login").style.display = "block"
     document.getElementById("background").style.display = "block"
   }

   function loginExit() {

    document.getElementById("login").style.display = "none"
     document.getElementById("background").style.display = "none"
   }

   function exit1() {
    document.getElementById("dropdown").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("background").style.display = "none"
   }
 