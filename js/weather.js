const API_KEY = "20fc50996e4eadc9e95d9e41e828845e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url).then(response => response.json()).then(data => { console.log(data.name, data.weather[0].main) });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);