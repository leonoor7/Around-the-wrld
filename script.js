 function changeColor(color) {
   document.body.style.background = color;
 }
 document.querySelector('#BlueButton')
 .addEventListener("click", () => changeColor
 ('blue'));

  document.querySelector('#PurpleButton')
 .addEventListener("click", () => changeColor
 ('purple'));

  document.querySelector('#PinkButton')
 .addEventListener("click", () => changeColor
 ('pink'));

  document.querySelector('#WhiteButton')
 .addEventListener("click", () => changeColor
 ('white'));

  document.querySelector('#GrayButton')
 .addEventListener("click", () => changeColor
 ('gray'));

var button = document.createElement('button');



var x = document.getElementById('X');
var y = document.getElementById('Y');

document.body.addEventListener('mousemove',print);

function print(e){


x.innerHTML = 'X: '+e.clientX;
y.innerHTML = 'Y: '+e.clientY;

}