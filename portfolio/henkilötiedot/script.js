const tiedot = [
  {
    name: "Merja Meikäläinen",
    age: 20,
    job: "Opiskelija",
    driversLicense: true,
  },
  {
    name: "Teppo Teikäläinen",
    age: 25,
    job: "Sähköteknikko",
    driversLicense: true,
  },
  {
    name: " Tomas Täkäläinen",
    age: 22,
    job: " linja-autonkuljettajao",
    driversLicense: true,
  },
  {
    name: "Semir Sikäläinen",
    age: 18,
    job: "opiskelija",
    driversLicense: true,
  },
  {
    name: "Helena Heikäläinen",
    age: 30,
    job: "ohjelmistosuunnittelija",
    driversLicense: false,
  },
];

const tableBody = document.querySelector(".tableBody");

luoRivit();
function luoRivit() {
  let html = "";
  tiedot.forEach((t) => {
    html += `
          <tr>
            <td>${t.name}</td>
            <td>${t.age > 18 ? `${t.age}🍺` : t.age}</td>
            <td>${t.job.toLowerCase() == "opiskelija" ? `${t.job}🎓` : t.job}</td>
            <td>${t.driversLicense ? "Kyllä" : "Ei"}</td>
            </tr>
            `;
  });
  tableBody.innerHTML = html;
}

const formEle = document.querySelector(".form");
const AddInfo = (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  tiedot.push({
    name: data.get("name").trim(),
    age: data.get("age").trim(),
    job: data.get("job").trim(),
    driversLicense: data.get("license"),
  });
  luoRivit();
};
formEle.addEventListener("submit", AddInfo);
