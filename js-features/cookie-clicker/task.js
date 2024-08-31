const clickerCounter = document.getElementById("clicker__counter");
const cookieImgClick = document.getElementById("cookie");
const clickFps = document.getElementById("clicker__fps"); 
let counter = 0;

let oldClickTime = Date.now();

cookieImgClick.addEventListener('click', () => {
  let clickTime = Date.now();
  let result = ((clickTime - oldClickTime) / 60 ).toFixed(2);
  clickFps.textContent = '' + result;
  oldClickTime = clickTime;
  counter++;
  clickerCounter.textContent = '' + counter;
  if (cookieImgClick.width === 200) {
    cookieImgClick.width = 250;
  } else {
    cookieImgClick.width = 200;
  }
});