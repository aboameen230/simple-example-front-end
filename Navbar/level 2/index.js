let tabs = document.querySelectorAll(".tabs_and_navs li");
let content = document.querySelectorAll(".content div");

tabs.forEach((tab, index) =>
  tab.addEventListener("click", () => {
    let tabindex = index;
    removeClass();
    tab.classList.add("active");
    content.forEach((content, index) => {
      if (tabindex == index) {
          deletClass();
        content.classList.add("show");
      }
    });
  })
);
function removeClass() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
function deletClass() {
  content.forEach((content) => {
    content.classList.remove("show");
  });
}
