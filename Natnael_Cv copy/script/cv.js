//oma osaamistoja
const osaaminenEle = document.querySelector(".osaaminen")
const skills = [
  "Frontend: HTML, CSS, JavaScript, TypeScript, React",
  "Backend: Node.js, Express.js, FastAPI (perusteet)",
  "Ohjelmointikielet: Python, PHP, JavaScript, TypeScript",
  "Kokemusta seka frontend- etta backend-kehityksesta",
  "REST API -kehitys",
  "Nopea oppimaan"
];
skills.forEach((skill) => {
  const ele = document.createElement("div");
  ele.innerHTML = `<p>${skill}</p>`;
  osaaminenEle.appendChild(ele);
})

// oma koulutus
const koulutus = [
  {
    title: "Suomen kielen koulutus",
    description: "Vuoden mittainen suomen kielen koulutus, jossa kehitettiin suullista ja kirjallista kielitaitoa työelämää varten. Saavutin koulutuksen päätteeksi B1-tason.",
    school: "Turun ammatti-instituutti",
    date: "joulu 2024"
  },
  {
    title: "Tuva-koulutus",
    description: "Suoritin TUVA-koulutuksen puolen vuoden aikana ja saavutin B2-tason suomen kielessä. Siirryin koulutuksesta suoraan ammattikouluun opiskelemaan ohjelmointia.",
    school: "Turun ammatti-instituutti",
    date: "kesä 2025"
  },
  {
    title: "Tieto- ja viestintätekniikan perustutkinto",
    description: "Opiskelen ICT-alan perustutkintoa, suuntautuminen ohjelmointi. Olen edustanut koulua Taitaja-kilpailussa.",
    school: "Turun ammatti-instituutti",
    date: "Nykyinen"
  }
];

const koulutusEle = document.querySelector(".koulutus");

koulutus.forEach((opinto) => {
  const container = document.createElement("div");
  const header = document.createElement("div");
  container.appendChild(header);

  const h3 = document.createElement("h3");
  h3.textContent = opinto.title;
  const pDate = document.createElement("p");
  pDate.innerHTML = `&rightarrow; ${opinto.date}`;
  header.appendChild(h3);

  const pSchool = document.createElement("p");
  pSchool.innerHTML = `&rightarrow; ${opinto.school}`;
  const pDescription = document.createElement("p");
  pDescription.innerHTML = `&rightarrow; ${opinto.description}`;
  container.appendChild(pDate);
  container.appendChild(pSchool);
  container.appendChild(pDescription);
  koulutusEle.appendChild(container);
});

// oma kielet
// Jokainen olio kuvaa yhden kielen ja kielitason.
const kielet = [
  {
    language: "Amhara",
    level: "Äidinkieli"
  },
  {
    language: "Suomi",
    level: "Erinomainen"
  },
  {
    language: "Englanti",
    level: "Erinomainen"
  }
];

const kieletEle = document.querySelector(".kielet");

// Muodostetaan kielistä yksinkertainen lista: kieli - taso.
kielet.forEach((kieli) => {
  const p = document.createElement("p");
  p.innerHTML = `<li><strong>${kieli.language}</strong> - ${kieli.level}</li>`;
  kieletEle.appendChild(p);
});

const projektit = [
  {
    link: "https://taikukkula.fi/tiev25p/Natnael/Tietovisa/",
    name: "Tietovisa",
    desc: "Peli-ohjelma, jossa opiskelijat voivat testata osammista valitsemalla opinto-aine, opettaja ja kysymyksen määrä. Tehty käyttämällä php, mysql, js ja css"
  },
  {
    link: "https://taikukkula.fi/tiev25p/Natnael/kaavakanta/",
    name: "Kaavakanta",
    desc: "ohjelma, Jonka tarkoitus oli helpotta yhden aluen asukkaiden ja aluen halituksen komunikattio. Tehty käyttämällä php, mysql, js ja css"
  },
  {
    link: "https://github.com/natnael299/frontend_projects",
    name: "Frontend-projects",
    desc: "10+ frontend projecteja joka sisältää github-finder, recipe-finder, advanced todo jne.., käytin js, css & html toteutamaan tämmösiä projekteja."
  }
];

const projektitEle = document.querySelector(".projektit");

projektit.forEach((projekti) => {
  const container = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = projekti.name;

  const link = document.createElement("div");
  link.innerHTML = `
  <p>
     Nettisivun linki &rightarrow; 
    <a href="${projekti.link}">${projekti.name}</a>
  </p>`;

  const desc = document.createElement("p");
  desc.innerHTML = `&rightarrow; ${projekti.desc}`;

  container.appendChild(h3);
  container.appendChild(link);
  container.appendChild(desc);
  projektitEle.appendChild(container);
});