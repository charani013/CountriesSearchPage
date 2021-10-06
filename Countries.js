let searchInput = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");
let spinner = document.getElementById("spinner");

let setInputVal = "";
let counter = [];

function createAndAppendCountry(country) {
    let divContainer = document.createElement("div");
    divContainer.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountries.appendChild(divContainer);

    let imgJs = document.createElement("img");
    imgJs.src = country.flag;
    imgJs.classList.add("country-flag", "mt-auto", "mb-auto");
    divContainer.appendChild(imgJs);

    let divContainerEl = document.createElement("div");
    divContainerEl.classList.add("d-flex", "flex-column", "ml-4");
    divContainer.appendChild(divContainerEl);

    let paragraphEl = document.createElement("p");
    paragraphEl.classList.add("country-name");
    paragraphEl.textContent = country.name;
    divContainerEl.appendChild(paragraphEl);

    let paragraphElPop = document.createElement("p");
    paragraphElPop.classList.add("country-population");
    paragraphElPop.textContent = country.population;
    divContainerEl.appendChild(paragraphElPop);
}

function displaySearchResult() {
    for (let country of counter) {
        let countryJs = country.name;

        if (countryJs.includes(setInputVal)) {
            createAndAppendCountry(country);
        }
    }
}




function getCountries() {
    let url = "https://restcountries.eu/rest/v2/all?fields=name;population;flag";
    let options = {
        method: "GET"
    }
    resultCountries.textContent = "";
    spinner.classList.remove("d-none");
    resultCountries.classList.add("d-none")

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            resultCountries.classList.remove("d-none");
            spinner.classList.add("d-none");

            counter = jsonData;
            displaySearchResult();
        })

}

function searchClicked(event) {
    setInputVal = event.target.value;
    getCountries();
}
getCountries();
searchInput.addEventListener("keyup", searchClicked)