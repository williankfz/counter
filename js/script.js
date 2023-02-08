const couterText = document.querySelector('.counter');
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
const increment = document.querySelector('.increment');

let counter = 0;
couterText.innerHTML = counter;

function handleIncrementClick(e){
  e.preventDefault();
  return couterText.innerHTML = counter++;
}
increment.addEventListener('click', handleIncrementClick);

function handleDecrementClick(e){
  e.preventDefault();
  if(couterText.innerHTML === "0"){
    decrement.disabled = true;
  }
  return couterText.innerHTML = counter--;
}
decrement.addEventListener('click', handleDecrementClick);

function handleResetClick(e){
  e.preventDefault();
  return couterText.innerHTML = 0;
}
reset.addEventListener('click', handleResetClick);
