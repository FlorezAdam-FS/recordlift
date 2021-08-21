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

// On load, create the 5 cards and create the categories
window.addEventListener("load", () => {
  document.querySelector(".search-workouts").classList.add("active");
  document.querySelector(".workout-section").classList.add("page-hidden");
  getAllItems();
  CreateCategories();
});

// Returns 5 cards randomly from the API
async function getAllItems() {
  const one = Math.trunc(Math.random() * 1326) + 1;
  const two = Math.trunc(Math.random() * 1326) + 1;
  const three = Math.trunc(Math.random() * 1326) + 1;
  const four = Math.trunc(Math.random() * 1326) + 1;
  const five = Math.trunc(Math.random() * 1326) + 1;
  await GetAll(one, two, three, four, five);
}

// Create Categories
function CreateCategories() {
  const categories = document.querySelector(".categories");

  for (let i = 0; i < bodyPartOptions.length; i++) {
    let input = CreateInputHTML(bodyPartOptions[i], bodyPartImages[i]);

    categories.appendChild(input);
  }
}

// Create the html for the categorie
function CreateInputHTML(item, image) {
  let div = document.createElement("div");

  div.innerHTML = `
    <p class="text-center p-5 mb-0 text-nowrap">${item}</p>
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
    <li><strong>Name:</strong> <p>${data.name}</p></li>
    <li><strong>Targets:</strong> <p>${data.target}</p></li>
    <li><strong>Body Part:</strong> <p>${data.bodyPart}</p></li>
  `;

  let workouts = JSON.stringify(AddedWorkouts);
  localStorage.setItem("workout", workouts);
}

// Navigation Events

document.querySelector(".search-workouts").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".workout-section").classList.add("page-hidden");
  document.querySelector(".workout-section").classList.remove("d-flex");
  document.querySelector(".workout-section").classList.remove("flex-column");
  document
    .querySelector(".workout-section")
    .classList.remove("align-items-center");

  document.querySelector(".search-section").classList.add("d-block");
  document.querySelector(".search-section").classList.add("active");
  document.querySelector(".todays-workout").classList.remove("active");
  document.querySelector(".search-workouts").classList.add("active");

  document.querySelector(".search-section").classList.remove("page-hidden");
  document.querySelector(".todays-workout").classList.remove("fw-bold");
  document.querySelector(".search-workouts").classList.add("fw-bold");
});

document.querySelector(".todays-workout").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".search-section").classList.add("page-hidden");
  document.querySelector(".workout-section").classList.remove("page-hidden");
  document.querySelector(".search-section").classList.remove("d-block");
  document.querySelector(".workout-section").classList.add("d-flex");
  document.querySelector(".todays-workout").classList.add("fw-bold");
  document.querySelector(".todays-workout").classList.add("active");
  document.querySelector(".search-workouts").classList.remove("active");
  document.querySelector(".search-workouts").classList.remove("fw-bold");

  document.querySelector(".workout-section").classList.add("flex-column");
  document
    .querySelector(".workout-section")
    .classList.add("align-items-center");
});

// Todays Workout

document.querySelector(".todays-workout").addEventListener("click", (e) => {
  let todaysWorkouts = JSON.parse(localStorage.getItem("workout"));
  let workoutSection = document.querySelector(".workout-section");
  workoutSection.innerHTML = "";

  todaysWorkouts.forEach((workout) => {
    let card = document.createElement("div");

    card.classList.add("card");
    card.classList.add("workout-data");
    card.classList.add("p-3");
    card.classList.add("mb-3");
    card.classList.add("col-12");
    card.classList.add("col-sm-12");
    card.classList.add("col-md-10");
    card.classList.add("col-lg-6");
    card.classList.add("col-xl-8");
    card.classList.add("shadow");
    card.style.background = "#272727";

    card.innerHTML = `
        <div
          class="
            card-title
            d-flex
            align-items-center
            justify-content-between
            px-3
            mt-2
            mb-3
          "
          >
          <h2 class="m-0">${workout.name}</h2>
          
          <div class="d-flex align-items-center justify-content-end">
            <button class="addSet btn btn-success fs-6 text-nowrap px-4 py-2 me-2" >
              Add Set
            </button>
            <button class="btn btn-danger delete m-0 px-4 ms-2 py-2">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="container sets d-flex flex-wrap">

        
    `;
    workoutSection.append(card);
  });

  document.querySelectorAll(".addSet").forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(button);
      AddSet(button);
    });
  });

  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", (e) => {
      DeleteWorkout(button);
    });
  });
});

function DeleteWorkout(elem) {
  let card = elem.closest(".card");
  let title = card.querySelector("h2").innerHTML;
  console.log(title);
  card.remove();
  AddedWorkouts.forEach((w) => {
    if (w.name == title) {
      let index = AddedWorkouts.indexOf(w);
      AddedWorkouts.splice(index, 1);
    }
  });
  let workouts = JSON.stringify(AddedWorkouts);

  localStorage.setItem("workout", workouts);
}

function AddSet(elem) {
  let container = elem.closest(".card").querySelector(".sets");
  let count = container.querySelectorAll(".set-container").length;
  let newDiv = document.createElement("div");

  newDiv.setAttribute(
    "class",
    `mb-3 set-container set-${
      count + 1
    } mt-3 me-2 d-flex align-items-center justify-content-center`
  );

  newDiv.innerHTML = `
      <div
        class="
          rounded-circle
          d-flex
          align-items-center
          justify-content-center
        "
        style="
          height: 50px;
          width: 50px;
          background-color: #121212;
          z-index: 10;
        "
      >
          ${count + 1}
        </div>
        <div
          type="text"
          class="
            rounded-pill rounded-start
            ps-5
            d-flex
            align-items-center
            justify-content-center
            border-0
            pe-4
            text-uppercase text-white
            fs-5
            mb-0
          "
          contentEditable="true"
          style="background: #2c2c2c; margin-left: -2rem; height: 40px"
        >
        <p class="mb-0" contentEditable="true">Weight <span class="text-lowercase" contentEditable="false">x</span> Reps</p>
        </div>
      </div>`;
  container.append(newDiv);
}
