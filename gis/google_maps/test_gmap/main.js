let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
        lat: 35.68145,
        lng: 139.76721
    },
    zoom: 10,
  });
}

window.initMap = initMap;