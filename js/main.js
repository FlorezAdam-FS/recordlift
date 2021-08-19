document.querySelector(".fa-search").addEventListener("click", () => {
  let item = document.querySelector(".searchInput").value;
  let cleaned = item.replace(/\s/g, "%20");

  if (item == "") {
    alert("Not allowed");
  } else {
    let api = new APIFactory(item);
  }
});

document.querySelector(".searchInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let item = document.querySelector(".searchInput").value;
    let cleaned = item.replace(/\s/g, "%20");

    if (item == "") {
      alert("Not allowed");
    } else {
      let api = new APIFactory(item);
    }
  }
});

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("ul").style.transform = "translateY(0)";
});

window.addEventListener("load", () => {
  getAllItems();
  CreateCategories();
});

async function getAllItems() {
  const one = Math.trunc(Math.random() * 1326) + 1;
  const two = Math.trunc(Math.random() * 1326) + 1;
  const three = Math.trunc(Math.random() * 1326) + 1;
  const four = Math.trunc(Math.random() * 1326) + 1;
  const five = Math.trunc(Math.random() * 1326) + 1;
  await GetAll(one, two, three, four, five);
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

  div.innerHTML = `
    <p class="text-center p-5 fs-3 bold m-0 fw-bold">${item}</p>
  `;

  div.classList.add("col-md-4");
  div.classList.add("col-12");

  div.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}") no-repeat center / cover`;
  div.style.transition = "all 500ms ease-in-out";

  div.addEventListener("mouseout", () => {
    div.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}") no-repeat center / cover`;
    div.style.transition = "all 500ms ease-in-out";

    div.querySelector("p").style.color = "white";
  });

  div.addEventListener("mouseover", () => {
    div.style.background = `white`;
    div.querySelector("p").style.color = "black";
  });

  div.addEventListener("click", () => {
    let api = new APIFactory(div.querySelector("p").innerHTML);
  });

  return div;
}

function AddItems(data) {
  const workout = {
    name: data.name,
    image: data.imgUrl,
    target: data.target,
    bodyPart: data.bodyPart,
    id: data.id,
  };

  AddedWorkouts.push(workout);

  document.querySelector(".modal-list").innerHTML = `
    <li><strong>Name:</strong> <p class="text-right">${data.name}</p></li>
    <li><strong>Targets:</strong> <p class="text-right">${data.target}</p></li>
    <li><strong>Body Part:</strong> <p class="text-right">${data.bodyPart}</p></li>
  `;

  console.log(AddedWorkouts);

  let workouts = JSON.stringify(AddedWorkouts);

  localStorage.setItem("workout", workouts);
  console.log(localStorage.getItem("workout"));
}
