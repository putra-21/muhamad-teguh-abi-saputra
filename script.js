const API_KEY = 'ec64099d5eb5d0a65aefc16a777e44c0'; // In real use, replace with actual OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('getWeather').addEventListener('click', getWeather);
document.getElementById('city').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});

async function getWeather() {
    const city = document.getElementById('city').value.trim();
    const weatherDiv = document.getElementById('weather');
    
    if (!city) {
        alert('Masukkan nama kota!');
        return;
    }

    try {
        // For demo purposes, we'll simulate weather data
        // In real implementation, uncomment the fetch code below
        
        // const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=id`);
        // const data = await response.json();
        
        // Demo data simulation
        const demoData = {
            name: city,
            main: {
                temp: Math.round(Math.random() * 15 + 20) // Random temp between 20-35°C
            },
            weather: [{
                description: ['cerah', 'berawan', 'hujan ringan', 'mendung'][Math.floor(Math.random() * 4)],
                icon: ['01d', '02d', '10d', '04d'][Math.floor(Math.random() * 4)]
            }]
        };
        
        displayWeather(demoData);
        
    } catch (error) {
        console.error('Error:', error);
        weatherDiv.innerHTML = '<p class="error">Terjadi kesalahan saat mengambil data cuaca. Silakan coba lagi.</p>';
        weatherDiv.classList.remove('hidden');
    }
}

function displayWeather(data) {
    const locationEl = document.getElementById('location');
    const temperatureEl = document.getElementById('temperature');
    const descriptionEl = document.getElementById('description');
    const iconEl = document.getElementById('icon');
    const weatherDiv = document.getElementById('weather');

    locationEl.textContent = data.name;
    temperatureEl.textContent = `${data.main.temp}°C`;
    descriptionEl.textContent = data.weather[0].description;
    iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    weatherDiv.classList.remove('hidden', 'error');
}

// Add some sample cities for quick testing
const sampleCities = ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang'];

// Auto-suggest functionality (simple version)
document.getElementById('city').addEventListener('input', function(e) {
    const input = e.target.value.toLowerCase();
    // Simple autocomplete logic could be added here
});