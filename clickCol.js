const word = document.querySelector("#word");
const title = document.querySelector("#title");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");

const boom = 57;
let min;
let max;
button.addEventListener("click", function(){
    const num = input.value;
    if(num == boom){
        word.innerText = "猜對了"
    }
    if(num != boom){
        word.innerText = "太衰了"
    }
    title.innerText = num;
    input.value = null;

})


