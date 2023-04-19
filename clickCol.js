const word = document.querySelector("#word");
const title = document.querySelector("#title");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const min = document.querySelector("#min");
const max = document.querySelector("#max");

const boom = Math.floor(Math.random() * 100 + 1);
console.log(boom);
let minNum = (+min.innerText);
let maxNum = (+max.innerText);
// minNum = 1;
// maxNum = 100;

button.addEventListener("click", function(){
    let guessNum = +input.value;
    input.value = null;
    
    if(guessNum < minNum || guessNum > maxNum){
       alert("請輸入正確數字");
       return;
    }

    if(guessNum < boom){
        word.innerText = "猜錯了";
        minNum = guessNum;
        min.innerText = guessNum;
    }

    if(guessNum > boom){
        word.innerText = "猜錯了";
        maxNum = guessNum;
        max.innerText = guessNum;
    }

    if(guessNum === boom){
        word.innerText = "猜對了";
        title.innerHTML = `<h1>当たり！答案是${boom}</h1>`;
    }


})


