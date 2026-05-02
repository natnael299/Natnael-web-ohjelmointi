import { comments, getComments } from "./utils.js";
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  if (document.getElementById("check").checked == true) {
    e.preventDefault();
    const data = new FormData(form);
    comments.push({
      id: crypto.randomUUID(),
      date: data.get("date"),
      email: data.get("email"),
      type: data.get("type"),
      text: data.get("text"),
    });
    getComments();
    window.location.href = "./comments.html";
  } else {
    document.getElementById("error").textContent =
      "Virhee!! kokeilee uudestaan";
  }
});
const type = document.querySelectorAll(".type");
const viestiType = [
  {
    id: 1,
    name: "kysymys",
  },
  {
    id: 2,
    name: "kommenti",
  },
  {
    id: 3,
    name: "vinkki",
  },
];

let optionHtml = "";
viestiType.forEach((v) => {
  //create option element for the text type
  optionHtml += `<option value='${v.id}'>${v.name}</option>`;
});
type.forEach((t) => (t.innerHTML += optionHtml));

//dialog functionalities
const send = (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const birthday = form.get("date");
  const email = form.get("email");
  const type = form.get("type");
  const usage = form.get("agree");
  const body = form.get("text");

  console.log(form, birthday, email, type, usage, body);
  document.querySelector(".dialog_form").close();
};

document.querySelector(".dialog_form").addEventListener("submit", send);
