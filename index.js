var drumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < drumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    mSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function(event) {

  mSound(event.key);

  buttonAnimation(event.key);

});

function mSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

    case "a":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    default:console.log(buttonInnerHTML);
  }

}

function buttonAnimation(currentKey){

  var activeButton =  document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
