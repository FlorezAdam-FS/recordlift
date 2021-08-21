class APIFactory {
  constructor(searchInput) {
    if (equipmentOptions.includes(searchInput)) {
      GetByEquipment(searchInput);
    } else if (targetOptions.includes(searchInput)) {
      GetByTarget(searchInput);
    } else if (bodyPartOptions.includes(searchInput)) {
      GetByBodyPart(searchInput);
    } else {
      GetAllWithKeyword(searchInput);
    }
  }
}

function GetByBodyPart(bp) {
  console.log("Body Part URL was used");

  fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bp}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99904098f4msh9256c1370a1059dp15ba00jsn7a23af031e17",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((resAsJSON) => {
      let workoutSection = document.querySelector(".workoutSection");
      workoutSection.innerHTML = "";
      document.getElementById("results").innerHTML =
        resAsJSON.length + " results";
      resAsJSON.forEach((data) => {
        let div = document.createElement("div");

        div.innerHTML = `
        <div class="card workout-card border-0 p-4 me-5">
            <img
              class="card-img"
              src="${data.gifUrl}"
              alt="${data.name} image"
            />
            <h3 class="card-title text-center mt-4 text-truncate">${data.name}</h3>
            <p class="card-caption text-center mb-3 font-weight-lighter text-truncate">
              Targets: ${data.target}
            </p>
            <button class="btn btn-success text-white p-3" id="${data.id}" data-toggle="modal" data-target="#modal">
              <i class="fa fa-plus me-2"></i>Add Workout
            </button>
          </div>
          `;
        div.querySelector("button").addEventListener("click", () => {
          AddItems(data);
        });
        workoutSection.appendChild(div);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

function GetByTarget(target) {
  console.log("Target URL was used");

  fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${target}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99904098f4msh9256c1370a1059dp15ba00jsn7a23af031e17",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((resAsJSON) => {
      let workoutSection = document.querySelector(".workoutSection");
      workoutSection.innerHTML = "";
      document.getElementById("results").innerHTML =
        resAsJSON.length + " results";
      resAsJSON.forEach((data) => {
        let div = document.createElement("div");

        div.innerHTML = `
        <div class="card workout-card border-0 p-4 me-5">
            <img
              class="card-img"
              src="${data.gifUrl}"
              alt="${data.name} image"
            />
            <h3 class="card-title text-center mt-4 text-truncate">${data.name}</h3>
            <p class="card-caption text-truncate text-center mb-3 font-weight-lighter">
              Targets: ${data.target}
            </p>
            <button class="btn btn-success text-white p-3" id="${data.id}" data-toggle="modal" data-target="#modal">
              <i class="fa fa-plus me-2"></i>Add Workout
            </button>
          </div>
          `;
        div.querySelector("button").addEventListener("click", () => {
          AddItems(data);
        });
        workoutSection.appendChild(div);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

function GetByEquipment(equipment) {
  console.log("Equipment URL was used");

  fetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99904098f4msh9256c1370a1059dp15ba00jsn7a23af031e17",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((resAsJSON) => {
      let workoutSection = document.querySelector(".workoutSection");
      workoutSection.innerHTML = "";
      document.getElementById("results").innerHTML =
        resAsJSON.length + " results";
      resAsJSON.forEach((data) => {
        let div = document.createElement("div");

        div.innerHTML = `
        <div class="card workout-card border-0 p-4 me-5">
            <img
              class="card-img"
              src="${data.gifUrl}"
              alt="${data.name} image"
            />
            <h3 class="card-title text-center mt-4 text-truncate">${data.name}</h3>
            <p class="card-caption text-center mb-3 font-weight-lighter text-truncate">
              Targets: ${data.target}
            </p>
            <button class="btn btn-success text-white p-3" id="${data.id}" data-toggle="modal" data-target="#modal">
              <i class="fa fa-plus me-2"></i>Add Workout
            </button>
          </div>
          `;
        div.querySelector("button").addEventListener("click", () => {
          AddItems(data);
        });
        workoutSection.appendChild(div);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

async function GetAll(one, two, three, four, five) {
  console.log("All URL was used");

  fetch(`https://exercisedb.p.rapidapi.com/exercises`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99904098f4msh9256c1370a1059dp15ba00jsn7a23af031e17",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((resAsJSON) => {
      let first = resAsJSON[one];
      let second = resAsJSON[two];
      let third = resAsJSON[three];
      let fourth = resAsJSON[four];
      let fifth = resAsJSON[five];

      let workoutSection = document.querySelector(".workoutSection");
      workoutSection.innerHTML = "";
      document.getElementById("results").innerHTML = "5 results";

      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");
      let div5 = document.createElement("div");

      div1.innerHTML = `
          <div class="card workout-card border-0 p-4 me-5">
            <img
              class="card-img"
              src="${first.gifUrl}"
              alt="${first.name} image"
            />
            <h3 class="card-title text-center mt-4 text-truncate">${first.name}</h3>
            <p class="card-caption text-center mb-3 font-weight-lighter text-truncate">
              Targets: ${first.target}
            </p>
            <button class="btn btn-success text-white p-3" id="${first.id}" data-toggle="modal" data-target="#modal">
              <i class="fa fa-plus me-2"></i>Add Workout
            </button>
          </div>
          `;

      div2.innerHTML = `
      <div class="card workout-card border-0 p-4 me-5">
            <img
              class="card-img"
              src="${second.gifUrl}"
              alt="${second.name} image"
            />
            <h3 class="card-title text-center mt-4 text-truncate">${second.name}</h3>
            <p class="card-caption text-center mb-3 font-weight-lighter text-truncate">
              Targets: ${second.target}
            </p>
            <button class="btn btn-success text-white p-3" id="${second.id}" data-toggle="modal" data-target="#modal">
              <i class="fa fa-plus me-2"></i>Add Workout
            </button>
          </div>
          `;

      div3.innerHTML = `
      <div class="card workout-card border-0 p-4 me-5">
            <img
              class="card-img"
              src="${third.gifUrl}"
              alt="${third.name} image"
            />
            <h3 class="card-title text-center mt-4 text-truncate">${third.name}</h3>
            <p class="card-caption text-center mb-3 font-weight-lighter text-truncate">
              Targets: ${third.target}
            </p>
            <button class="btn btn-success text-white p-3" id="${third.id}" data-toggle="modal" data-target="#modal">
              <i class="fa fa-plus me-2"></i>Add Workout
            </button>
          </div>
          `;
      div4.innerHTML = `
      <div class="card workout-card border-0 p-4 me-5">
            <img
              class="card-img"
              src="${fourth.gifUrl}"
              alt="${fourth.name} image"
            />
            <h3 class="card-title text-center mt-4 text-truncate">${fourth.name}</h3>
            <p class="card-caption text-center mb-3 font-weight-lighter text-truncate">
              Targets: ${fourth.target}
            </p>
            <button class="btn btn-success text-white p-3" id="${fourth.id}" data-toggle="modal" data-target="#modal">
              <i class="fa fa-plus me-2"></i>Add Workout
            </button>
          </div>
          `;
      div5.innerHTML = `
      <div class="card workout-card border-0 p-4 me-5">
            <img
              class="card-img"
              src="${fifth.gifUrl}"
              alt="${fifth.name} image"
            />
            <h3 class="card-title text-center mt-4 text-truncate">${fifth.name}</h3>
            <p class="card-caption text-center mb-3 font-weight-lighter text-truncate">
              Targets: ${fifth.target}
            </p>
            <button class="btn btn-success text-white p-3" id="${fifth.id}" data-toggle="modal" data-target="#modal">
              <i class="fa fa-plus me-2"></i>Add Workout
            </button>
          </div>
          `;

      div1.querySelector("button").addEventListener("click", () => {
        AddItems(first);
      });
      div2.querySelector("button").addEventListener("click", () => {
        AddItems(second);
      });
      div3.querySelector("button").addEventListener("click", () => {
        AddItems(third);
      });
      div4.querySelector("button").addEventListener("click", () => {
        AddItems(fourth);
      });
      div5.querySelector("button").addEventListener("click", () => {
        AddItems(fifth);
      });

      workoutSection.appendChild(div1);
      workoutSection.appendChild(div2);
      workoutSection.appendChild(div3);
      workoutSection.appendChild(div4);
      workoutSection.appendChild(div5);
    })
    .catch((err) => {
      console.error(err);
    });
}

function GetAllWithKeyword(keyword) {
  fetch(`https://exercisedb.p.rapidapi.com/exercises`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99904098f4msh9256c1370a1059dp15ba00jsn7a23af031e17",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((resAsJSON) => {
      let workoutSection = document.querySelector(".workoutSection");
      workoutSection.innerHTML = "";
      let count = 0;
      resAsJSON.forEach((data) => {
        if (data.name.includes(keyword)) {
          let div = document.createElement("div");

          div.innerHTML = `
          <div class="card workout-card border-0 p-4 me-5">
            <img
              class="card-img"
              src="${data.gifUrl}"
              alt="${data.name} image"
            />
            <h3 class="card-title text-center mt-4 text-truncate">${data.name}</h3>
            <p class="card-caption text-center mb-3 font-weight-lighter text-truncate">
              Targets: ${data.target}
            </p>
            <button class="btn btn-success text-white p-3" id="${data.id}" data-toggle="modal" data-target="#modal">
              <i class="fa fa-plus me-2"></i>Add Workout
            </button>
          </div>
          `;

          div.querySelector("button").addEventListener("click", () => {
            AddItems(data);
          });
          count++;
          workoutSection.appendChild(div);
        }
        document.getElementById("results").innerHTML = count + " results";
      });
    });
}
