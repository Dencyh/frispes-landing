import "./assets/styles/main.scss";

import * as gallery from "./gallery/gallery.js";

/* gallery.scroll(); */

/* Form */
let cities = [];
const locationList = document.querySelector("#locationList");
const locationInput = document.querySelector("#locationInput");

function fetchCities() {
  fetch(
    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-cities-demographics&q=&rows=50"
  )
    .then((respone) => respone.json())
    .then((data) => {
      cities = data.records
        .map((record) => {
          return record.fields.city + ", " + record.fields.state;
        })
        .sort();

      insertData(cities, locationList);
    });
}

function insertData(data, element) {
  if (!data) return;
  element.innderHTML = "";
  let dataHTML = "";
  data.forEach((item) => {
    dataHTML += `
        <li class="search-form__list-item">${item}</li>
        `;
  });

  element.innerHTML = dataHTML;
}

function filterData(data, query) {
  return data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}

function passData() {
  let filteredData = filterData(cities, locationInput.value);
  insertData(filteredData, locationList);
}

function selectCity(e) {
  locationInput.value = e.target.innerText;
  locationList.classList.remove("show");
}

function showList() {
  locationList.classList.add("show");
}

locationInput.addEventListener("input", passData);
locationInput.addEventListener("focus", showList);
locationList.addEventListener("click", selectCity);

fetchCities();

/* Gallery */
/* const gallery = document.querySelector(".gallery");
const galleryImages = [...document.querySelectorAll(".gallery__item")];

function throttle(f, ms) {
  let isThrottled = false;
  let savedArgs = null;
  let that = null;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      that = this;
      return;
    }
    f.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(that, savedArgs);
        savedArgs = null;
        that = null;
      }
    }, ms);
  }
  return wrapper;
}

function gallerySize() {
  galleryImages.forEach((image) => {
    let clientWidth = document.documentElement.clientWidth;
    let imageXY = image.getBoundingClientRect();

    let pastMiddle = imageXY.right < clientWidth / 2 - 30;
    let pastSpotlight = imageXY.right < clientWidth / 2 - 60 - imageXY.width;

    if (pastMiddle && !pastSpotlight) {
      image.classList.add("gallery__image--big");
      image.classList.remove("gallery__image--small");
    } else {
      image.classList.remove("gallery__image--big");
      image.classList.add("gallery__image--small");
    }
  });
}

let gallerySizeOptimized = throttle(gallerySize, 100);

gallerySize();
gallery.addEventListener("scroll", gallerySizeOptimized);


const galleryScrollLeft = document.querySelector("#galleryPrevious");
const galleryScrollRight = document.querySelector("#galleryNext");

galleryScrollLeft.addEventListener("click", () => {
  gallery.scrollBy({
    left: -150,
    top: 0,
    behavior: "smooth",
  });
});

galleryScrollRight.addEventListener("click", () => {
  gallery.scrollBy({
    left: 150,
    top: 0,
    behavior: "smooth",
  });
}); */
