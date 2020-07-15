document.addEventListener("DOMContentLoaded", () => {
  let count = document.getElementById("counter");
  let timer = 0;

  let btnminus = document.getElementById("minus");
  let btnplus = document.getElementById("plus");
  //let input = document.getElementById("input");
  let btnheart = document.getElementById("heart");
  let likeUl = document.querySelector(".likes");
  let likeNum = document.createElement("li");

  let btnpause = document.getElementById("pause");

  let t = 0;

  let comment = document.getElementById("comment-input");
  let commentList = document.getElementById("list");

  document.addEventListener("submit", function(e) {
    e.preventDefault();
    addComment();
  });

  const addComment = () => {
    const commentTag = document.createElement("li");
    commentTag.textContent = comment.value;
    commentList.appendChild(commentTag);
  };

  function counter() {
    timer = setTimeout(counter, 1000);
    count.textContent = timer;
  }

  btnminus.addEventListener("click", () => {
    count.textContent = timer--;
  });

  btnplus.addEventListener("click", () => {
    count.textContent = timer++;
  });

  btnheart.addEventListener("click", () => {
    let val = count.textContent;
    likeUl.appendChild(likeNum);
    likeNum.textContent = val;
  });

  btnpause.addEventListener("click", () => {
    t === 0 ? (t = 1) : (t = 0);
    if (t === 1) {
      clearTimeout(timer);
    } else {
      setTimeout(counter);
    }
  });

  counter();
});
