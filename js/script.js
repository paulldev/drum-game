setTimeout(() => {
  alert("timeout");
}, 2000);
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var soundSources = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
var sounds = [];//array of Audio objects

for (var i = 0; i < numberOfDrumButtons; i++) {
  sounds[i] = new Audio("sounds/"+soundSources[i]);//cretae Audio object with src value

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const index = Array.from(this.parentElement.children).indexOf(this);//creates an array from the children, gets the index position
    sounds[index].play();
  });
}

document.addEventListener("keydown", function () {
  var key = event.key;//gets key value from keyboard
  var range = document.querySelectorAll(".drum");//gets the possible values

  range.forEach(function(item, count) {
    if (key===item.innerHTML) {
      console.log(event);
      console.log(item.innerHTML);
      console.log(count);
      index=count;
    } else {
      
    }
  });

  console.log("index="+index);
  sounds[index].play();
});
  