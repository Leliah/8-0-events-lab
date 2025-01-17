// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colors = document.querySelectorAll('.color');
const crntColor = document.querySelector('#current-color')
for(let color of colors){
  color.addEventListener('click', () => {
    console.log(color.style.backgroundColor)
    crntColor.style.backgroundColor = color.style.backgroundColor
  })
}

const cells = document.querySelectorAll('.cell');
for(let cell of cells){
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = crntColor.style.backgroundColor
  })
}
