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
      resAsJSON.forEach((data) => {
        console.log(data);
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
      resAsJSON.forEach((data) => {
        console.log(data);
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
      resAsJSON.forEach((data) => {
        console.log(data);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

function GetByName(name) {
  console.log("Name URL was used");

  fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${name}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99904098f4msh9256c1370a1059dp15ba00jsn7a23af031e17",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((resAsJSON) => {
      resAsJSON.forEach((data) => {
        console.log(data);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

async function GetAll(one, two, three) {
  console.log("All URL was used");

  fetch(`https://exercisedb.p.rapidapi.com/exercises`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99904098f4msh9256c1370a1059dp15ba00jsn7a23af031e17",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((resAsJSON) => {})
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
      let workoutSection = document.querySelector(".workouts");

      resAsJSON.forEach((data) => {
        if (data.name.includes(keyword)) {
          console.log(data);
          workoutSection.innerHTML += `
            <li>
              <img src="${data.gifUrl}"/>
              <h3>${data.name}</h3>
              <button>add workout</button>
            </li>
          `;
        }
      });
    });
}
