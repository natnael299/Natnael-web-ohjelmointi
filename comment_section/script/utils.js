export const comments = JSON.parse(localStorage.getItem("comment")) || [
  {
    date: "2026-03-10",
    email: "anna@example.com",
    type: 1,
    text: "Voinko saada lisatietoa palvelusta?",
  },
  {
    date: "2026-03-12",
    email: "mika@example.com",
    type: 2,
    text: "Sivu toimii hyvin puhelimessa.",
  },
  {
    date: "2026-03-15",
    email: "liisa@example.com",
    type: 3,
    text: "Voisit lisata hakukentan kommentteihin.",
  },
  {
    date: "2026-03-16",
    email: "joni@example.com",
    type: 1,
    text: "Miten nopeasti vastaatte viesteihin?",
  },
  {
    date: "2026-03-17",
    email: "sara@example.com",
    type: 2,
    text: "Tykkasin sivun selkeasta rakenteesta.",
  },
  {
    date: "2026-03-18",
    email: "pekka@example.com",
    type: 3,
    text: "Lisatkaa mahdollisuus lajitteluun paivamaaran mukaan.",
  },
  {
    date: "2026-03-18",
    email: "noora@example.com",
    type: 2,
    text: "Lomake oli helppo tayttaa.",
  },
];

//käytetään localstorage tallentamaan kommentoja pysyvasti
getComments();
export function getComments() {
  localStorage.setItem("comment", JSON.stringify(comments));
}