// Initialize and add the map
function initMap() {
  //Location of the marker
  const loja = { lat: -23.479524, lng: -46.551894};
  // The map, centered at the marker
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: loja,
  });
  // The marker, positioned at loja
  const marker = new google.maps.Marker({
    position: loja,
    map: map,
  });
}
