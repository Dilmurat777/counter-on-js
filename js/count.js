let substract = document.querySelector('#subtract');
let add = document.querySelector('#add');

console.log(subtract)

subtract.addEventListener('click', function () {
  let output = document.querySelector('#result');
  let result = Number(output.textContent) - 1;
  if(result >= 0 ){
    output.textContent = result;
  }
});

add.addEventListener('click', function () {
  let output = document.querySelector('#result');
  let result = Number(output.textContent) + 1;
  output.textContent = result;
})