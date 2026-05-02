const operationBtn = document.querySelector(".operationBtn")
const num1 = document.querySelector(".num1")
const num2 = document.querySelector(".num2")
const operation = document.getElementById("operation")
const answerBox = document.querySelector(".answerBox")
operationBtn.addEventListener("click", Laske);

function Laske(){
 //tarkista jos käyttäjä on täyttänyt kaikkia kohdat
 if(!operation.value || !num1.value || !num2.value ){
  answerBox.textContent = "Täyttää kaikki kohdat";
  return;
 }

 const value1 = Number((num1.value).trim());
 const value2 = Number((num2.value).trim());

 let answer;

  //tarkista valittu operaatio ja laske numeroita
 switch(operation.value){
   case "+":
    answer = value1 + value2
    break;
   case "-":
    answer = value1 - value2
    break;
   case "*":
    answer = value1 * value2
    break;
   case "/":
    answer = value1 / value2
    break;
 }

 //tarkista jos käyttäjä on syötänyt oikea arvo
 if (isNaN(answer)) {answerBox.textContent = `Syöttämäsi arvot pitää olla numeroita`}
 else{answerBox.textContent = `Vastaus on: ${answer}`};
}