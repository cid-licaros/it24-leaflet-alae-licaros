const map = L.map("map").setView([8.3700, 124.8600], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);


const marker = L.marker([ 8.37157, 124.85650])
  .addTo(map)
  .bindPopup("<b>Manolo Fortich</b><p>Municipality</p>");


L.circle([8.42261, 124.81429], {
  color: "blue",
  fillColor: "#30a3ec",
  fillOpacity: 0.3,
  radius: 500
}).addTo(map);


map.on("click", function(event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  L.popup()
    .setLatLng(event.latlng)
    .setContent("Latitude: " + lat.toFixed(5) + "<br>Longitude: " + lng.toFixed(5))
    .openOn(map);
});


const locations = [
  
  {name: "nbsc", lat: 8.42164,lng: 124.81085 },
  {name: "nbsc", lat: 8.42007,lng: 124.81376 }
];

locations.forEach(function(place) {
  L.marker([place.lat, place.lng])
    .addTo(map)
    .bindPopup(place.name);
});
