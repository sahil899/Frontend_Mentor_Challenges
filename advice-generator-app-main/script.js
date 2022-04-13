const heading = document.querySelector(".heading");
const text = document.querySelector(".text");
const button = document.querySelector("button");

function fetchData() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const id = data.slip.id;
      const advice = data.slip.advice;
      heading.textContent = `ADVICE #${id}`;
      text.innerHTML = `&#8220 ${advice} &#8221`;
    });
}

button.addEventListener("click", fetchData);
window.addEventListener("load", fetchData);
