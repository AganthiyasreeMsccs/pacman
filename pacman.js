var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ["C:\Users\my\Downloads\pack man.jpeg", "C:\Users\my\Downloads\pack man.jpeg"],
  ["C:\Users\my\Downloads\pack man.jpeg", "C:\Users\my\Downloads\pack man.jpeg"],
];
var direction = 0;
var focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  if (direction === 0) {
    pos += 20; 
  }
   else {
    pos -= 20; 
  }
  img.src = pacArray[direction][focus];
  // your code here
  img.style.left = pos + "px"; 
}
setInterval(Run, 200);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (pos + imgWidth > pageWidth) direction = 1;
  if (pos < 0) direction = 0;

  return direction;
}