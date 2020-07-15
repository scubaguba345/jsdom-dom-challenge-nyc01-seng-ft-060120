document.addEventListener("DOMContentLoaded", () => {

let count = document.getElementById("counter");
let iter = 0;

let btnminus = document.getElementById("minus");
let btnplus = document.getElementById("plus");
//let input = document.getElementById("input");
let btnheart = document.getElementById("heart");
let likeUl = document.querySelector(".likes");
let likeNum = document.createElement("li");

let btnpause = document.getElementById("pause");
let t = 0;


function counter() {
    //console.log('show at ' + (iter++));
    count.textContent = (iter++);
    setTimeout(counter, 1000) 
    

}

btnminus.addEventListener('click', () => {
    count.textContent = (iter--);
    //count.value = parseInt(count.value) - 1;
});

btnplus.addEventListener('click', () => {
    count.textContent = (iter++);
    //count.value = parseInt(count.value) + 1;
});

btnheart.addEventListener('click', () => {
    let val = count.textContent
    likeUl.appendChild(likeNum)
    likeNum.textContent = val
})


 btnpause.addEventListener('click', () =>  {
    
    clearTimeout(counter)
})



counter();

})