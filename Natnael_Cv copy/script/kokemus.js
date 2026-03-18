//oma työkokemus
const kokemusEle = document.querySelector(".kokemukset")
const tyokokemus = [
  {
    title: "Ohjelmistokehittaja",
    place: "Frontend- ja backend-projektit (keksity)",
    description: "Rakennan verkkosovelluksia frontendissa (HTML, CSS, JavaScript, TypeScript, React) ja backendissa (Node.js, Express.js, hieman FastAPI).",
    startDate: "Tammikuu 2025",
    endDate: "Nykyinen"
  },
  {
    title: "Junior Frontend-kehittaja",
    place: "Nordic Web Studio, Turku (keksity)",
    description: "Toteutin responsiivisia sivuja HTML-, CSS- ja JavaScript-teknologioilla ja osallistuin käyttöliittymäparannuksiin asiakasprojekteissa.",
    startDate: "Kesäkuu 2023",
    endDate: "Joulukuu 2024"
  },
  {
    title: "Harjoittelija, Full Stack",
    place: "CodeBridge Oy, Helsinki (keksity)",
    description: "Rakensin pieniä API-ominaisuuksia Node.js:lla ja tein tietokantamuutoksia MySQL:ään osana kehitystiimiä.",
    startDate: "Tammikuu 2023",
    endDate: "Toukokuu 2023"
  },
  {
    title: "Web-projektiassistentti",
    place: "EduTech Labs (keksity)",
    description: "Autoin projektitiimiä verkkosovelluksen testauksessa, bugikorjauksissa ja dokumentoinnissa sprinttien aikana.",
    startDate: "Maaliskuu 2022",
    endDate: "Marraskuu 2022"
  },
  {
    title: "Freelance Kehittaja",
    place: "Itsenainen (keksity)",
    description: "Tein pienyrityksille laskeutumissivuja ja yksinkertaisia hallintanakyma-prototyyppeja Reactilla ja PHP:lla.",
    startDate: "Kesäkuu 2021",
    endDate: "Helmikuu 2022"
  }
];

tyokokemus.forEach((kokemus) => {
  //container
  const container = document.createElement("div");
  container.classList.add("kokemus")
  //header
  const header = document.createElement("div");
  container.appendChild(header)
  //header elements
  const h3 = document.createElement("h3");
  h3.textContent = kokemus.title
  const p1 = document.createElement("p");
  p1.innerHTML = `&rightarrow; ${kokemus.startDate} – ${kokemus.endDate}`
  header.appendChild(h3)
  header.appendChild(p1)
  //body elements
  const p2 = document.createElement("p");
  p2.innerHTML = `&rightarrow; ${kokemus.place}`
  const p3 = document.createElement("p");
  p3.innerHTML = `&rightarrow; ${kokemus.description}`
  container.appendChild(p2)
  container.appendChild(p3)
  kokemusEle.appendChild(container);
})