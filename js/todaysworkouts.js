window.addEventListener("load", () => {
  let todaysWorkouts = JSON.parse(localStorage.getItem("workout"));
  let workoutSection = document.querySelector(".workouts");

  todaysWorkouts.forEach((workout) => {
    let card = document.createElement("div");

    card.classList.add("card");
    card.classList.add("p-3");
    card.classList.add("mb-3");
    card.classList.add("col-12");
    card.classList.add("col-md-12");
    card.classList.add("col-lg-6");
    card.classList.add("col-xl-5");
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
          <h2 class="m-0 text-nowrap fs-5">${workout.name}</h2>
          <button class="addSet btn btn-success fs-6 px-4 py-2 text-nowrap ms-5" >
            Add Set
          </button>
        </div>
        <div class="container sets d-flex flex-wrap">

        </div>
        <button class="btn btn-danger delete"><i class="fa fa-trash"></i></button>
    `;
    workoutSection.prepend(card);
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
  let title = elem.closest("h2");
  card.remove();
  let workouts = JSON.parse(localStorage.getItem("workouts"));
  workouts.forEach((w) => {
    if (w.name == title) {
      workouts.remove(w);
    }
  });
}

function AddSet(elem) {
  let container = elem.closest(".card").querySelector(".sets");
  let count = container.querySelectorAll(".set-container").length;
  let newDiv = document.createElement("div");
  let weight = document.querySelector(".weight-input");
  let rpe = document.querySelector("select");

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
          fs-3
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
        <p class="mb-0" contentEditable="true">Weight <span class="text-lowercase">x</span> Reps</p>
        </div>
      </div>`;
  container.append(newDiv);
}
