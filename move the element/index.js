let after = document.getElementById("after");
let before = document.getElementById("before");
let append = document.getElementById("append");
let content = document.getElementById("content");
let cover = document.getElementById("cover");

cover.style.background = "red";
cover.style.height = "50px";

after.onclick = function () {
  cover.after(content);
};
before.onclick = function () {
  cover.before(content);
};
append.onclick = function () {
  cover.append(content);
};
