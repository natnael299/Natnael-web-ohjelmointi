const operationBtn = document.querySelector(".operationBtn");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const operation = document.getElementById("operation");
const answerBox = document.querySelector(".answerBox");
const dateBox = document.querySelector(".dateContainer");
const dateBtn = document.querySelector(".dateBtn");

operationBtn.addEventListener("click", Laske);
dateBtn.addEventListener("click", katsoAika);

function katsoAika() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const currentDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  const currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  dateBox.innerHTML += `
  <div><strong>Date</strong>: ${currentDate}</div>
  <div><strong>Aika</strong>: ${currentTime}</div>
  <div><strong>paivaJaAika</strong> :${currentDate} klo${currentTime}</div>
  <div><strong>viikonpaiva</strong> :${weekday[date.getDay()]}</div>
  <div><strong>Kuukausi</strong>: ${month[date.getMonth()]}</div>
  `;
}

function Laske() {
  //tarkista jos käyttäjä on täyttänyt kaikkia kohdat
  if (!operation.value || !num1.value || !num2.value) {
    answerBox.textContent = "Täyttää kaikki kohdat";
    return;
  }

  const value1 = Number(num1.value.trim());
  const value2 = Number(num2.value.trim());

  let answer;

  //tarkista valittu operaatio ja laske numeroita
  switch (operation.value) {
    case "+":
      answer = value1 + value2;
      break;
    case "-":
      answer = value1 - value2;
      break;
    case "*":
      answer = value1 * value2;
      break;
    case "/":
      answer = value1 / value2;
      break;
  }

  //tarkista jos käyttäjä on syötänyt oikea arvo
  if (isNaN(answer)) {
    answerBox.textContent = `Syöttämäsi arvot pitää olla numeroita`;
  } else {
    answerBox.textContent = `Vastaus on: ${answer}`;
  }
}
