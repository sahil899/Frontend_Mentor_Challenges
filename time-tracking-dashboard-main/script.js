// const List = document.querySelectorAll("li");
const dashboard = document.querySelector(".dashboard");
const daily = [];
const weekly = [];
const monthly = [];

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((x) => {
      if (x.timeframes.daily) {
        daily.push({
          title: x.title,
          current: x.timeframes.daily.current,
          previous: x.timeframes.daily.previous,
        });
      }
      if (x.timeframes.weekly) {
        weekly.push({
          title: x.title,
          current: x.timeframes.weekly.current,
          previous: x.timeframes.weekly.previous,
        });
      }
      if (x.timeframes.monthly) {
        monthly.push({
          title: x.title,
          current: x.timeframes.monthly.current,
          previous: x.timeframes.monthly.previous,
        });
      }
    });
  });

function weeklyUpdate() {
  document.querySelectorAll("li").forEach((itr) => {
    if (itr.innerText == "Weekly") {
      itr.classList.add("active");
    } else {
      itr.classList.remove("active");
    }
  });
  document.querySelectorAll(".card-style").forEach((x) => x.remove());
  weekly.map((itr) => {
    dashboard.innerHTML += `<div id="${itr.title
      .toLowerCase()
      .split(" ")
      .join("")}" class="card-style">
    <div class="activity">

      <div class="heading">
        <span>${itr.title}</span>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <div class="display-time">
        ${itr.current}hrs
      </div>
      <div class="previous-time">
        Last Week -${itr.previous}hrs
      </div>
    </div>
  </div>
    `;
  });
}

function dailyUpdate() {
  document.querySelectorAll("li").forEach((itr) => {
    if (itr.innerText == "Daily") {
      console.log("checkng:::::;");
      itr.classList.add("active");
      console.log(itr);
    } else {
      console.log("object");
      console.log(itr);
      itr.classList.remove("active");
    }
  });
  document.querySelectorAll(".card-style").forEach((x) => x.remove());

  daily.map((itr) => {
    dashboard.innerHTML += `<div id="${itr.title.toLowerCase()}" class="card-style">
    <div class="activity">

      <div class="heading">
        <span>${itr.title}</span>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <div class="display-time">
        ${itr.current}hrs
      </div>
      <div class="previous-time">
        Last day -${itr.previous}hrs
      </div>
    </div>
  </div>
    `;
  });
}
function MonthlyUpdate() {
  document.querySelectorAll("li").forEach((itr) => {
    if (itr.innerText == "Monthly") {
      itr.classList.add("active");
    } else {
      itr.classList.remove("active");
    }
  });
  document.querySelectorAll(".card-style").forEach((x) => x.remove());

  daily.map((itr) => {
    dashboard.innerHTML += `<div id="${itr.title.toLowerCase()}" class="card-style">
   <div class="activity">

     <div class="heading">
       <span>${itr.title}</span>
       <i class="fa-solid fa-ellipsis"></i>
     </div>
     <div class="display-time">
       ${itr.current}hrs
     </div>
     <div class="previous-time">
       Last Month -${itr.previous}hrs
     </div>
   </div>
 </div>
   `;
  });
}

window.addEventListener("load", weeklyUpdate);

// List.forEach((x) => {
//   if (x.innerText == "Weekly") {
//     console.log("weekly::::::::");
//     x.addEventListener("click", weeklyUpdate);
//   } else if (x.innerText == "Daily") {
//     console.log("########daily");
//     console.log(x);
//     x.addEventListener("click", dailyUpdate);
//   } else {
//     console.log("monthly");
//     x.addEventListener("click", MonthlyUpdate);
//   }
// });
