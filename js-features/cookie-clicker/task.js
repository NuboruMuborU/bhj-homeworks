const clickerCounter = document.getElementById("clicker__counter");
const cookieImgClick = document.getElementById("cookie");
const clickFps = document.getElementById("clicker__fps"); 
let counter = 0;

let startDate = 0;

cookieImgClick.addEventListener('click', function () {
  const reseervDate = (new Date().getMilliseconds() / 100).toFixed(0) / 10;
  console.log(reseervDate);
  console.log(startDate);
  clickFps.textContent = '' + (Number((1 / (reseervDate - startDate)).toFixed(2)) + 4);
  startDate = reseervDate;
  counter++;
  clickerCounter.textContent = '' + counter;
  if (cookieImgClick.width === 200) {
    cookieImgClick.width = 250;
  } else {
    cookieImgClick.width = 200;
  }
});

