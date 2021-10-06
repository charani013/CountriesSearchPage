# Countries Search Page

Refer to the below image.

![countries-search-v1](https://user-images.githubusercontent.com/90957976/136191462-f3a7b02a-fb52-48af-b7a5-62b3c83c4ddb.gif)

Instructions:

- Add the id searchInput to the HTML input element
- Add the id resultCountries to the HTML container element with the class name result-countries

Achieve the given functionality to the given prefilled code.

- When we open page or enter text in the HTML element with the id searchInput,
- Make an HTTP Request (GET method) using Fetch with URL https://apis.ccbp.in/countries-data
- Add the loading status with the Bootstrap component spinner while making HTTP request as shown in the image.
- Filter the HTTP response (Array of objects with keys flag, name, population) based on the country name entered in the HTML input element.
- Create HTML elements dynamically to set filtered data and add newly created HTML elements to the HTML container element with the id resultCountries.
