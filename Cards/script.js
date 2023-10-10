let Names = ["ahmed", "mohamed", "elameen", "abdelkareem"];
let ages = ["22 years old", "18 years old", "20 years old", "25 years old"];
function elemnt(name,ages) {
  let container = document.createElement("div");
  let Name = document.createElement("h1");
  let age = document.createElement("p");
  let img = document.createElement("img");
  let title = document.createTextNode(name);
  let belowage = document.createTextNode(ages);
  container.append(Name);
  container.appendChild(age);
  container.appendChild(img);
  document.body.append(container);
    Name.appendChild(title);
    age.appendChild(belowage);

  container.style.cssText = `width:40%;height:90vh;background-color:#444;color:white;text-align: center;padding:3px;margin:2px;display:inline-block`;
  img.setAttribute(
    "src",
    "./367733042_1766813150427442_983185883653661544_n.jpg"
  );
  img.style.cssText = `width:100% ;height:70%`;
}
for (i = 0; i < 4; i++) {
  elemnt(Names[i], ages[i]);
}
