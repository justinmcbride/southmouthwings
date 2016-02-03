function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapLocation = new google.maps.LatLng(40.013975, -105.2781899);

  var mapOptions = {
    center: mapLocation,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);
  var service = new google.maps.places.PlacesService(map);

  var marker = new google.maps.Marker({
    map: map,
    position: mapLocation
  });
  marker.setMap(map);

  var request = {
    placeId : 'ChIJtY9ngiXsa4cRKuxQz04eyDY'
  };

  var companyInfo =
    "<b>South Mouth Wings</b><br/>" +
    "<a href=\"https://maps.google.com?saddr=Current+Location&daddr=South+Mouth+Wings+Boulder+CO+80302\">" +
      "1650 Broadway, Boulder, CO 80302, United States</a><br/>" +
    "<a href=\"http://southmouthwings.com\">SouthMouthWings.com</a><br/>" +
    "<a href=\"tel://1-303-449-9464\">(303) 449-9464</a>"
  ;
  var infowindow = new google.maps.InfoWindow();
  infowindow.setContent(companyInfo);

  var details;
  service.getDetails(request, function(resp, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      details = resp;
     
      infowindow.open(map, marker);
    }
    else {
      console.log("status: " + status);
    }
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}