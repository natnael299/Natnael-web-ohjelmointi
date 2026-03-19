import { comments } from "./utils.js";
const commentsEle = document.querySelector(".comments");
let cHtml = "";
comments.forEach((c) => {
  cHtml += ` 
      <div class='commentC'>
        <div class='header'>
          <span><strong>${c.email}</strong></span> -
          <span><strong>${c.date}</strong></span>
        </div>
        <p class='comment'>${c.text}</p>
      </div>
  `
})
commentsEle.innerHTML = cHtml;