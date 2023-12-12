
let map = L.map('map').setView([51.53366297325615, -0.0617523467079242], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// define rectangle geographical bounds
let bounds = [[51.5336, -0.0617], [51.5336, -0.0617]];

// zoom the map to the rectangle bounds
map.fitBounds(bounds);

L.marker([51.5336, -0.0617]).addTo(map);

