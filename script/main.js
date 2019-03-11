//get current hours
var hours = new Date().getHours();

// hours = 14;

//pakt datum en tijd
function startTime() {
  var today = new Date();
  var curHr = today.getHours()
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getDate();
  var x = today.getMonth() +1;
  var y = today.getFullYear();
  
  m = checkTime(m);
  s = checkTime(s);
  x = checkTime(x);

  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  document.getElementById('day').innerHTML = d + " - " + x + " - " + y;  
  
  var t = setTimeout(startTime, 500);
} 

//plaats een 0 voor nummer onder de 10
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

//groet mbt tijd
function sayHello() {
  var greeting;

  if (hours < 12) {
    greeting = "GOOD MORNING";
  } else if (hours < 18) {
    greeting = "GOOD AFTERNOON";
  } else {
    greeting = "GOOD EVENING";
  }
  document.getElementById("hello").innerHTML = greeting;
}

//laat de goede image zien ivm tijd
function showImages() {

  if (hours < 12) {
    document.getElementById("image").innerHTML  = "<img src='img/morning.png' id=\"shine\">";
    moveShineImage();

  } else if (hours < 18) {
    document.getElementById("image").innerHTML  = "<img src='img/afternoon.png' id=\"sun\">";
    moveSunImage();

  } else {
    document.getElementById("image").innerHTML  = "<img src='img/night.png' id=\"moon\">";
    moveMoonImage();
  }
}

function changeBackground() {

  if (hours < 12) {
    document.write('<body style="background-color:#FA6304">');
  }

  else if (hours < 18) {
    document.write('<body style="background-color:#7AD7F0">');
  }
  else {
    document.write('<body style="background-color:#00008b">');
  }
}

//TweenMax
function moveShineImage(){
  //TweenMax.to("#image img", 6 {x:600, rotation:360, scale:0.5});
  var shine = document.getElementById("shine");
  TweenMax.to(shine, 2, {ease: SlowMo.ease.config(0.2, 0.2, true),
  y: -50, repeat:-1 });
}

function moveSunImage(){
  //TweenMax.to("#image img", 6 {x:600, rotation:360, scale:0.5});
  var sun = document.getElementById("sun");
  TweenMax.to(sun, 2, {x:window, rotation:360, scale:0.5, repeat:-1, yoyo:true});
}

function moveMoonImage(){
  //TweenMax.to("#image img", 6 {x:600, rotation:360, scale:0.5});
  var moon = document.getElementById("moon");
  TweenMax.to(moon, 2, {x:window, rotation: 80, repeat:-1, yoyo:true});
}

sayHello();
startTime();
showImages();
changeBackground();
