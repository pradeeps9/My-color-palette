alert("Lock the color locks from start while by clicking on box itself will lock that box's color");
// h1 - show color name
let heading = document.querySelector(".newColor");

// button - to generate color
let genrateBtn = document.querySelector(".generate");
let lockBtn = document.querySelector(".lock");
let resetBtn = document.querySelector(".reset");


// event Listner
genrateBtn.addEventListener("click", getANewColor);
lockBtn.addEventListener("click", lockColor);
resetBtn.addEventListener("click", resetColor);


function getANewColor(){
  let boxes = document.querySelectorAll(".boxColor");
  boxes.forEach( (box) => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    box.style.backgroundColor = `rgb(${r},${g},${b})`;
    box.innerText = `This Color is\nrgb(${r},${g},${b})`;

  });
}


// event listners on div itself to lock any color
document.querySelectorAll(".boxColor").forEach( (box) => {
  box.addEventListener("click", lockthebox);
});

function lockthebox() {
  this.classList.remove("boxColor");
}


function lockColor() {
  let boxes = document.querySelectorAll(".boxColor");
  if(boxes.length != 0) boxes[0].classList.remove("boxColor");
}

function resetColor() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach( (box) => {
    box.classList.add("boxColor");
    box.style.backgroundColor = `rgb(255,255,255)`;
    box.innerText = `Create new pallete`;
  })
}

