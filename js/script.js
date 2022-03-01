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
  data.forEach((phone) => {
    // console.log(dat);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div onclick='loadPhoneDetail("${phone.slug}")' class="card h-100">
      <img src="${phone.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">
        ${phone.brand}
        </p>
      </div>
    </div>
    `;
    searchResult.appendChild(div);
  });
};

const loadPhoneDetail = (phoneID) => {
  // console.log(phoneID);
  const url = `https://openapi.programming-hero.com/api/phone/${phoneID}

  `;
  fetch(url)
    .then((res) => res.json())
    .then((info) => displayPhoneDetail(info.data));
};

const displayPhoneDetail = (phone) => {
  console.log(phone);
  const phoneDetails = document.getElementById("phone-details");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${phone.image}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${phone.brand}</h5>
    <p class="card-text"> ${phone.mainFeatures}
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  phoneDetails.appendChild(div);
};
