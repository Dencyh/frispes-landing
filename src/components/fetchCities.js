export function fetchCities() {
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

  return fetchCities();
}
