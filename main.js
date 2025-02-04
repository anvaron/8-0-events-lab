// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
document.getElementById
// You may write your code here!
const colors = document.querySelectorAll('#palette .color')
const current = document.querySelector('#current-color');
const init = current.setAttribute(`style`, `background: #FFF`)
const cells = document.querySelectorAll('#canvas .cell')
const actions = document.querySelector("#actions");
for(let cell of cells){
  cell.addEventListener('click', () => {
    cell.setAttribute(`style`, `background: ${current.style.backgroundColor}`)
  })
}
for(let color of colors){
  color.addEventListener('click', () => {
    current.setAttribute(`style`, `background: ${color.style.backgroundColor}`)
  })
}

const btnAdd   = document.createElement("button");
const btnRem   = document.createElement("button");
const btnReset = document.createElement("button");
const btnFill  = document.createElement("button");
btnAdd.textContent   = 'Add Cells';
btnRem.textContent   = 'Remove Cells';
btnReset.textContent = 'Reset Cells';
btnFill.textContent  = 'Fill Cells';
actions.append(btnAdd, btnRem, btnReset, btnFill);
// Buttom events
btnAdd.addEventListener('click', () => {
  // cells.forEach( cell => {cell.remove();})
  // for (let i = 0; i < 100+1; i++) {
  //   const div = document.createElement("div");
  //   div.classList.add('cell');
  //   div.setAttribute(`style`, `width: auto;height: auto`)
  //   main.append(div);
  //   console.log(cells)
  //}
})
btnRem.addEventListener('click', () => {
  main.removeChild(document.querySelector(".cell"));
})
btnReset.addEventListener('click', () => {
  for(let cell of cells){
    cell.setAttribute(`style`, `background: ${init}`)
  }
})
btnFill.addEventListener('click', () => {
  console.log(cells)
  for(let cell of cells){
    cell.setAttribute(`style`, `background: ${current.style.backgroundColor}`)
  }
})