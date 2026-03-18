import { comments } from "./utils.js";
function submitComment(e) {
  e.preventDefault();
  comments.push
}
const message = document.querySelector(".message")
const viestiType =
  [{
    id: 1,
    name: "kysymys"
  },
  {
    id: 2,
    name: "kommenti"
  },
  {
    id: 3,
    name: "vinkki"
  },
  ]
viestiType.forEach((v) => {
  //create option element for the text type
  const option = document.createElement("option");
  option.value = v.id;
  option.textContent = v.name;
  message.appendChild(option);
});