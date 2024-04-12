function autocomplete() {

  const autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete")
  );
  const autocompleteItem = new google.maps.places.Autocomplete(
    document.getElementById("item-autocomplete")
  );

  // add listener to get values for name and address
  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();
    document.getElementById("locationName").value = place.name;
    document.getElementById("locationAddress").value = place.formatted_address;
  });

  autocompleteItem.addListener("place_changed", function () {
    const place = autocompleteItem.getPlace();
    document.getElementById("itemLocationName").value = place.name;
    document.getElementById("itemLocationAddress").value =
      place.formatted_address;
  });
}

window.addEventListener("load", autocomplete);
