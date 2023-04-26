import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './style.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidGFrZXdlYiIsImEiOiJjbDZkM3NzNXQyZXhjM2RuMzJ6c2JrNmpwIn0.Xdym14xmfIbt4_wrCVbJSQ';

const map = new mapboxgl.Map({
    container: 'map',
    projection: { name: 'globe'},
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [139.767, 35.681],
    zoom: 2,
});

map.addControl(
    new mapboxgl.NavigationControl({
        visualizePitch: true,
    })
);
