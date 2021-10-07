let result = document.getElementById("result"),
  filterInput = document.getElementById("filter"),
  listItems = [];

getData();

filterInput.addEventListener("input", (e) => {
  filterData(e.target.value);
});

async function getData() {
  let response = await fetch("https://randomuser.me/api?results=100");

  const { results } = await response.json();

  // natijani tozalaymiz
  result.innerHTML = "";

  results.forEach((eachUser) => {
    let li = document.createElement("li");
    listItems.push(li);
    // console.log(listItems)
    li.innerHTML = `
        <img src="${eachUser.picture.large}" alt="${eachUser.name.first}">
        <div class="user-info">
            <h4>${eachUser.name.title} ${eachUser.name.first} ${eachUser.name.last}</h4>
            <p>Gender: ${eachUser.gender}</p>
            <p>Age: ${eachUser.dob.age}</p>
            <p>${eachUser.location.city}, ${eachUser.location.country}</p>
            <p>Email: ${eachUser.email}</p>
            <p>Phone: ${eachUser.phone}</p>

        </div>
        `;

    result.appendChild(li);
  });
}

function filterData(searchPerson) {
  listItems.forEach((eachItem) => {
    if (eachItem.innerText.toLowerCase().includes(searchPerson.toLowerCase())) {
      eachItem.classList.remove("hide");
    } else {
      eachItem.classList.add("hide");
    }
  });
}
