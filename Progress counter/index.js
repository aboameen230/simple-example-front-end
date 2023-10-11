let increaseBtn = document.querySelector(".btns button:nth-of-type(1)");
let decreaseBtn = document.querySelector(".btns button:nth-of-type(2)");
let Progress = document.querySelector(".Progress");
let ProgressCounter = document.querySelector(".Progress h5");
let Counter = 0;
increaseBtn.onclick = function () {
  Counter += 5;
  Progress.style.width = Counter + "%";
  ProgressCounter.textContent = Counter + "%";
  if (Counter >= 100) {
    Counter = 95;
  }
  if (Counter <= 25) {
    Progress.style.background = "green";
  }
  if (Counter > 25 && Counter <= 50) {
    Progress.style.background = "yellow";
  }
  if (Counter > 50 && Counter <= 75) {
    Progress.style.background = "orange";
  }
  if (Counter > 75 && Counter <= 100) {
    Progress.style.background = "red";
  }
};
decreaseBtn.onclick = function () {
  Counter -= 5;
  Progress.style.width = Counter + "%";
  ProgressCounter.textContent = Counter + "%";
  if (Counter <= 0) {
    Counter = 5;
  }
  if (Counter <= 25) {
    Progress.style.background = "green";
  }
  if (Counter > 25 && Counter <= 50) {
    Progress.style.background = "yellow";
  }
  if (Counter > 50 && Counter <= 75) {
    Progress.style.background = "orange";
  }
  if (Counter > 75 && Counter <= 100) {
    Progress.style.background = "red";
  }
};
