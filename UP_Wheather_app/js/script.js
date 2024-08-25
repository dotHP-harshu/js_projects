// Base URL for the weather API
let baseurl = "https://goweather.herokuapp.com/weather/barabanki";

// Selecting DOM elements
const btn = document.querySelector('form button');
const selects = document.querySelector('.cities');

const tempPara = document.querySelector('.temp p');
const windPara = document.querySelector('.wind p');
const descriptionPara = document.querySelector('.description p');

// Array of city names (assuming you have an array named cities)

// Populating the select element with city options
cities.forEach((cityName) => {
    let cityOption = document.createElement('option');
    cityOption.value = cityName;
    cityOption.innerHTML = cityName;
    if (cityName.toLowerCase() === "kanpur") {
        cityOption.selected = true;
    }
    selects.append(cityOption);
});

// Function to get weather data
async function getWheater() {
    // Get the selected city from the dropdown
    let selectedCity = document.querySelector('form select').value;

    // Construct the API URL for the selected city
    let url = `https://goweather.herokuapp.com/weather/${selectedCity.toLowerCase()}`;

    try {
        // Fetch the weather data from the API
        let response = await fetch(url);

        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        let data = await response.json();

        // Extract weather information
        let temp = data.temperature;
        let wind = data.wind;
        let description = data.description;

        // Update the DOM elements with the weather data
        tempPara.innerHTML = temp;
        windPara.innerHTML = wind;
        descriptionPara.innerHTML = description;
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching weather data:', error);
        tempPara.innerHTML = 'Error fetching data';
        windPara.innerHTML = 'Error fetching data';
        descriptionPara.innerHTML = 'Error fetching data';
    }
}


// Fetch and display weather data when the page loads
window.addEventListener('load', () => {
    getWheater();
});

// Fetch and display weather data when the button is clicked
btn.addEventListener('click', (events) => {
    events.preventDefault();

    // Show loading text while fetching data
    tempPara.innerHTML = 'Getting......';
    windPara.innerHTML = 'Getting......';
    descriptionPara.innerHTML = 'Getting......';

    getWheater();
});