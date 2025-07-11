mapboxgl.accessToken = mapToken;
 
const map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/streets-v12',
    container: 'map', 
    center: listing.geometry.coordinates, 
    zoom: 9 
});

const marker = new mapboxgl.Marker({ color: "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(` <h4>${listing.title}</h5> <p>Exact location provided after booking</p> `))
    .addTo(map);
