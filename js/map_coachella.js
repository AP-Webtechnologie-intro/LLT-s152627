
let map = L.map('map').setView([33.683770319664966, -116.23863146267365], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// define rectangle geographical bounds
let bounds = [[33.683770319664966, -116.23863146267365], [33.683770319664966, -116.23863146267365]];

// zoom the map to the rectangle bounds
map.fitBounds(bounds);

L.marker([33.683770319664966, -116.23863146267365]).addTo(map);

