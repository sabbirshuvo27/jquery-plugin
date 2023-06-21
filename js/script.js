$(document).ready(function(){
  // COUNTERS
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(".counter1").counterUp({
    delay: 40,
    time: 3000
});

var countdown = $("#countdown").countdown360({
  radius      : 60,
  seconds     : 100,
  fontColor   : '#FFFFFF',
  autostart   : false,
  onComplete  : function () { console.log('done') }
});
countdown.start();
var countdown = $("#countdown").countdown360({
  radius: 15.5,
  strokeStyle: "#477050",
  strokeWidth: undefined,
  fillStyle: "#8ac575",
  fontColor: "#477050", 
  fontFamily: "sans-serif",
  fontSize: undefined,
  fontWeight: 700,
  autostart: true,
  seconds: 10,
  label: ["second", "seconds"],
  startOverAfterAdding: true, 
  smooth: false,
  onComplete: function () {}
});

  
  
   



});

