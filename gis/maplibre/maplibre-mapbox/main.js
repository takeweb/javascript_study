mapboxgl.accessToken = 'pk.eyJ1IjoidGFrZXdlYiIsImEiOiJjbDZkM3NzNXQyZXhjM2RuMzJ6c2JrNmpwIn0.Xdym14xmfIbt4_wrCVbJSQ';
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-74.5, 40], // starting position
  zoom: 9 // starting zoom
});

map.on('mousemove', (e) => {
  document.getElementById('info').innerHTML =
  // `e.point` is the x, y coordinates of the `mousemove` event
  // relative to the top-left corner of the map.
  JSON.stringify(e.point) +
  '<br />' +
  // `e.lngLat` is the longitude, latitude geographical position of the event.
  JSON.stringify(e.lngLat.wrap());
});