const searchPhone = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log("yes");
  searchField.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((info) => displaySearchResult(info.data));
};

const displaySearchResult = (data) => {
  const searchResult = document.getElementById("search-result");
  data.forEach((dat) => {
    console.log(dat);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card h-100">
      <img src="${dat.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${dat.phone_name}</h5>
        <p class="card-text">
        ${dat.brand}
        </p>
      </div>
    </div>
    `;
    searchResult.appendChild(div);
  });
};
