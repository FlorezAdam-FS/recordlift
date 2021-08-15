document.querySelector(".fa-search").addEventListener("click", () => {
  let item = document.querySelector(".searchInput").value;
  console.log(item);
  let cleaned = item.replace(/\s/g, "%20");

  if (item == "") {
    alert("Not allowed");
  } else {
    let api = new APIFactory(item);
  }
});

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("ul").style.transform = "translateY(0)";
});

document.querySelector(".fa-times").addEventListener("click", () => {
  document.querySelector("ul").style.transform = "translateY(-100%)";
});

window.addEventListener("load", () => {
  getAllItems();
  CreateCategories();
});

async function getAllItems() {
  const one = Math.trunc(Math.random() * 1326) + 1;
  const two = Math.trunc(Math.random() * 1326) + 1;
  const three = Math.trunc(Math.random() * 1326) + 1;
  await GetAll(one, two, three);
}

function CreateCategories() {
  const categories = document.querySelector(".categories");

  for (let i = 0; i < bodyPartOptions.length; i++) {
    let input = CreateInputHTML(bodyPartOptions[i], bodyPartImages[i]);

    categories.appendChild(input);
  }
}

function CreateInputHTML(item, image) {
  let div = document.createElement("div");
  let label = document.createElement("label");
  let p = document.createElement("p");
  let input = document.createElement("input");

  label.setAttribute("for", item);
  label.innerHTML = item;

  input.type = "button";
  input.name = item;
  input.innerHTML = item;

  p.innerHTML = item;

  div.appendChild(label);
  div.appendChild(input);
  input.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}") no-repeat center / cover`;

  return div;
}
