function myMap() {
  var mapCanvas = document.getElementById("map");
  // Coordenadas del área metropolitana de Medellín
  var medellinCoords = new google.maps.LatLng(6.2442, -75.5812);

  var mapOptions = {
    center: medellinCoords,
    zoom: 12 // Ajusta el nivel de zoom según tus necesidades
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);
}
