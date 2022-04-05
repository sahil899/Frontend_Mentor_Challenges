const card = document.querySelectorAll(".card");
const ul = document.querySelector("ul");
const listItem = document.querySelectorAll("li");
const ratingText = document.querySelector(".thanks-rating");
console.log(listItem);
card[0].classList.remove("togglecard");
card[1].classList.add("togglecard");

let rating = 0;
console.log(ul);
// console.log(dataValue);

function addRating() {
  rating = this.dataset.listValue;
}
function submit() {
  console.log(card);
  card[0].classList.add("togglecard");
  card[1].classList.remove("togglecard");
  ratingText.textContent = `You selected ${rating} out of 5`;
  console.log(rating);
}
// console.log(rating);
listItem.forEach((x) => x.addEventListener("click", addRating));
// listItem.addEventLister("click", addRating);
