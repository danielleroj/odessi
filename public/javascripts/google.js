function autocomplete() {
    const input = document.getElementById("location-input");
    const autocomplete = new google.maps.places.Autocomplete(input);
}

window.addEventListener("load", autocomplete)