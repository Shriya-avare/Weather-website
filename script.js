document.getElementById('getWeather').addEventListener('click', function() {
  const city = encodeURIComponent(document.getElementById('city').value.trim());
  const countryCode = document.getElementById('countryCode').value.trim();
const apiKey = 'df78f04406aeb50ce6cbdfb729614b40';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          console.log(data); // Log the full response to the console
          if (data.cod === 200) {
              document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
              document.getElementById('description').textContent = data.weather[0].description;
              document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
              document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
              document.getElementById('weatherDisplay').classList.remove('hidden');
          } else {
              alert(`Error: ${data.message}`);
          }
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          alert('Failed to fetch weather data. Please try again later.');
      });
});
