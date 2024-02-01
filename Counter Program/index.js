const decreBtn = document.getElementById("decreBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLable = document.getElementById("countLable");
let count = 0;


increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}

decreBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}

