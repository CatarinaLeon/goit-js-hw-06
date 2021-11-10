const btnDecrementRef = document.querySelector('button[data-action="decrement"]');

const valueRef = document.querySelector('#value');

const btnIncrementRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const increaseByOne = () => {
    valueRef.textContent = counterValue -= 1;

};

const reduceByOne = () => {
    valueRef.textContent = counterValue += 1;
};

btnDecrementRef.addEventListener("click", increaseByOne);
btnIncrementRef.addEventListener("click", reduceByOne);