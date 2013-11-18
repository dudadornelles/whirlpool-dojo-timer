function Clock() {
  this.seconds = ko.observable(0);
  this.minutes = ko.observable(0);

  this.tick = function (callback5Min, callback15Min) {
    this.seconds(this.seconds() + 1);
    if (this.seconds() === 60) {
      this.seconds(0);
      this.minutes(this.minutes() + 1);

      if (this.minutes() == 5 || this.minutes() == 10) {
        callback5Min();
      }

      if (this.minutes() == 15) {
        this.minutes(0);
        callback15Min();
      }
    }
  };

  this.reset = function () {
    this.seconds(0);
    this.minutes(0);
  };


}

function playTwice(audioPath) {
  var audio = new Audio("audio/" + audioPath);
  audio.play()
  audio = new Audio("audio/" + audioPath);
  function play() {
    audio.play();
  }
  setTimeout(play, 2500);
}

function switchNavigators() {
    playTwice("switch_driver_navigator.mp3");
}

var RIGHT = 0, LEFT = 1;
var switchDirection = RIGHT;
function switchPairs() {
  if (switchDirection == RIGHT) {
    playTwice("switch_pairs_right.mp3");
    switchDirection = LEFT;
  } else {
    playTwice("switch_pairs_left.mp3");
    switchDirection = RIGHT;
  }
  setTimeout("alert(\"Please switch pairs and press OK to continue\")", 5000);
}

