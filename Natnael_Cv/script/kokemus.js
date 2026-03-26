import { tyokokemus } from "./util.js";
//oma työkokemus
const kokemusEle = document.querySelector(".kokemukset")

let html = ""
tyokokemus.forEach((kokemus) => {
  const technologies = kokemus.technologies.map((tech) => `<li>${tech}</li>`).join("");
  const responsibilities = kokemus.responsibilities.map((task) => `<li>${task}</li>`).join("");
  const achievements = kokemus.achievements.map((item) => `<li>${item}</li>`).join("");

  html += `
  <div class='kokemus'>
    <div>
      <h3>${kokemus.title}</h3>
      <p>&rightarrow; ${kokemus.startDate} – ${kokemus.endDate}</p>
      </div>
      <p>&rightarrow; ${kokemus.place}</p>
      <p>&rightarrow; ${kokemus.description}</p>
      <p>&rightarrow; Tyojarjestely: ${kokemus.workMode}</p>
      <button type="button" class="show-details" data-dialog-id="${kokemus.id}">Nayta lisatiedot</button>
      <dialog id="${kokemus.id}">
        <h4>${kokemus.title} - lisatiedot</h4>
        <p><strong>Sopimus:</strong> ${kokemus.contractType}</p>
        <p><strong>Teknologiat:</strong></p>
        <ul>${technologies}</ul>
        <p><strong>Vastuut:</strong></p>
        <ul>${responsibilities}</ul>
        <p><strong>Saavutukset:</strong></p>
        <ul>${achievements}</ul>
        <button type="button" class="close-details">Sulje</button>
      </dialog>
  </div>
  `
})

kokemusEle.innerHTML = html;

document.querySelectorAll(".show-details").forEach((button) => {
  button.addEventListener("click", () => {
    const dialogId = button.dataset.dialogId;
    const dialog = document.getElementById(dialogId);
    dialog?.showModal();
  });
});

document.querySelectorAll(".close-details").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("dialog")?.close();
  });
});