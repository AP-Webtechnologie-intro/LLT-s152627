
let map = L.map('map').setView([50.968199552046165, 4.6847850288357105], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// define rectangle geographical bounds
let bounds = [[50.968199552046165, 4.6847850288357105], [50.968199552046165, 4.6847850288357105]];

// zoom the map to the rectangle bounds
map.fitBounds(bounds);

L.marker([50.968199552046165, 4.6847850288357105]).addTo(map);

