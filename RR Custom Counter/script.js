const increment = document.querySelector('.up');
const decrement = document.querySelector('.down');
const resetBtn = document.querySelector('.reset');

let count = document.querySelector('.count');
let num = document.querySelector('.input');

increment.addEventListener('click', () => {
    let countValue = parseInt(count.innerText);
    let newNum = parseInt(num.value);
    count.innerText = countValue + newNum;
})

decrement.addEventListener('click', () => {
    let countValue = parseInt(count.innerText);
    let newNum = parseInt(num.value);
    count.innerText = countValue - newNum;
})

resetBtn.addEventListener('click', ()=>{
    count.innerText = 0;
    num.value = 1;
    alert('Counter has been reset');
})
