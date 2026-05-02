const lista = ["Tehtävä 1", "Tehtävä2"];
const textC = document.querySelector(".text");
display_Items();
function display_Items() {
  let html = "";
  lista.forEach((l) => {
    html += ` <li>${l}</li>`;
  });
  document.querySelector(".container").innerHTML = html;
}

function addItems() {
  if (textC) {
    lista.push(textC.value);
    display_Items();
  }
}

document.querySelector(".addBtn").addEventListener("click", addItems);
