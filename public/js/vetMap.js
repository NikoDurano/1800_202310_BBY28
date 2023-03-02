let map;

function initMap() {

   // The location of Uluru
   const wr = { lat: 49.016788, lng: -122.805706};
   //49.016788, -122.805706
  //The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), {
    center: wr,//{ lat: -34.397, lng: 150.644 },
    zoom: 4,
  });

   // The marker, positioned at Uluru
   const marker = new google.maps.Marker({
    position: wr,
    map: map,
  });

}

window.initMap = initMap;