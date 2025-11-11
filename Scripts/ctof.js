function convert() {
    let celsius = document.getElementById("temp").value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("display").innerHTML =
        `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}