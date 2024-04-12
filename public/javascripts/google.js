function autocomplete() {
  const autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete")
  );

  // add listener for the place_changed event on autcomplete
  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();
    document.getElementById("locationName").value = place.name;
    document.getElementById("locationAddress").value = place.formatted_address;
  });
}

window.addEventListener("load", autocomplete);
