
var map = L.map("map").setView([0, 0], 2);

L.tileLayer(
  "https://api.maptiler.com/maps/toner-v2/{z}/{x}/{y}.png?key=5lxPCnBExSBWwqr8roJK",
  {
    maxZoom: 19,
    attribution:
      '<a href="https://api.maptiler.com/maps/toner-v2/256/{z}/{x}/{y}.png?key=5lxPCnBExSBWwqr8roJK</a>',
  }
).addTo(map);


var marker1 = L.marker([19.076090, 72.877426]).addTo(map);           //mumbai
var marker2 = L.marker([	35.652832, 139.839478]).addTo(map);         //tokyo
var marker3 = L.marker([31.224361, 121.469170]).addTo(map);          //shanghai
var marker4 = L.marker([19.432608, -99.133209]).addTo(map);          //mexico
var marker5 = L.marker([40.730610, -73.935242]).addTo(map);          //new york
var marker6 = L.marker([-22.932398, -42.486675]).addTo(map);         //Rio de Janeiro
var marker7 = L.marker([	34.052235, -118.243683]).addTo(map);        //Los Angeles
var marker8 = L.marker([48.858093, 2.294694]).addTo(map);            //Paris
var marker9 = L.marker([51.509865, -0.118092]).addTo(map);           //london
var marker10 = L.marker([28.679079, 77.069710]).addTo(map);            //delhi
var marker11 = L.marker([-15.793889, -47.882778]).addTo(map);           //brazil

var latlangs = Array();
latlangs.push(marker1.getLatLng());
latlangs.push(marker2.getLatLng());
latlangs.push(marker3.getLatLng());
latlangs.push(marker4.getLatLng());
latlangs.push(marker5.getLatLng());
latlangs.push(marker6.getLatLng());
latlangs.push(marker7.getLatLng());
latlangs.push(marker8.getLatLng());
latlangs.push(marker9.getLatLng());
latlangs.push(marker10.getLatLng());
latlangs.push(marker11.getLatLng());


var polyline = L.polyline(latlangs, {color:"red"}).addTo(map);
map.fitBounds(polyline.getBounds());



