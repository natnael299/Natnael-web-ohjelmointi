import { comments, getComments } from "./utils.js";
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  if (document.getElementById("check").checked == true) {
    e.preventDefault();
    const data = new FormData(form);
    comments.push({
      date: data.get("date"),
      email: data.get("email"),
      type: data.get("type"),
      text: data.get("text"),
    });
    getComments();
    window.location.href = "./comments.html";
  } else {
    document.getElementById("error").textContent = "Virhee!! kokeilee uudestaan";
  }
})
const type = document.querySelector(".type");
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
  type.appendChild(option);
});