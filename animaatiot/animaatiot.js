 documnet.body.querySelector("load", myFunction)
 
 let tOut;
    function myFunction() {
      tOut = setTimeout(() => {
        document.getElementById("myDiv").style.display = "block";
        document.getElementById("loadImg").style.display = "none";
      }, 3000);
    }

    const box = Array.from(document.querySelector(".leftRight").children);
    const len = box.length;
    let index = 0;
    function turnOrange() {
      box.forEach(b => b.classList.remove("orange"));
      box[index].classList.add("orange");
      index = (index + 1) % len;
    }

    //executes the function every time interval
    setInterval(turnOrange, 500);