import { comments } from "./utils.js";
const commentsEle = document.querySelector(".comments");
let cHtml = "";
comments.forEach((c) => {
  console.log(c.id);
  cHtml += ` 
      <div class='commentC'>
        <div class='header'>
          <span><strong>${c.email}</strong></span> -
          <span><strong>${c.date}</strong></span>
        </div>
        <button type="button" class='show' data-dialog-id=${c.id}>
           Katso Kommenti
        </button>
        <dialog id="${c.id}">
         <button type="button" class='close'  data-dialog-id=${c.id}>X</button>
         <p class='comment'>${c.text}</p>
        </dialog>
      </div>
  `
})
commentsEle.innerHTML = cHtml;

//all show buttons
const showBtn = document.querySelectorAll(".show");
showBtn.forEach((d) => {
  d.addEventListener("click", () => {
    const id = d.dataset.dialogId;
    console.log(id);
    document.getElementById(`${id}`).showModal();
  });
});

//all close buttons
const closeBtn = document.querySelectorAll(".close");
closeBtn.forEach((d) => {
  d.addEventListener("click", () => {
    const id = d.dataset.dialogId;
    document.getElementById(`${id}`).close();
  });
});