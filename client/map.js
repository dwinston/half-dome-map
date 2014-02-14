// Guided by http://omarriott.com/aux/leaflet-js-non-geographical-imagery/
// and using https://github.com/rktjmp/tileup

Template.map.rendered = function () {
  // maximum maxZoom is 18 because it seems that L.CRS.Simple only
  // maps pixels to latLngs as far as that zoom level. minZoom should be
  // >= 0 for the same reason.
  // http://leafletjs.com/reference.html#tilelayer
  var map = L.map('map', {
    maxZoom: 18,
    minZoom: 14,
    crs: L.CRS.Simple
  }).setView([0, 0], 14);

  var southWest = map.unproject([0, 8406], map.getMaxZoom());
  var northEast = map.unproject([16614, 0], map.getMaxZoom());
  map.setMaxBounds(new L.LatLngBounds(southWest, northEast));

  // map_tiles directory not included with repo because map tiles
  // take up ~ 200MB.
  L.tileLayer('map_tiles/{z}/map_tile_{x}_{y}.jpg', {
    attribution: 'Map data &copy; Mark Porter Thomas'
  }).addTo(map);

  Session.set("map-ready", true);
};
