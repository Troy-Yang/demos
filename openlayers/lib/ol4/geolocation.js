var geolocation = new ol.Geolocation({
    // take the projection to use from the map's view
    projection: ol.proj.get('EPSG:4326')
});
// listen to changes in position
geolocation.on('change', function (evt) {
    window.console.log(geolocation.getPosition());
});

geolocation.setTracking(true);


var accuracyFeature = new ol.Feature();
geolocation.on('change:accuracyGeometry', function () {
    var coordinates = geolocation.getAccuracyGeometry();
    var newGps = GPS.gcj_encrypt(coordinates[1], coordinates[0]);
    coordinates = [newGps.lon, newGps.lat];
    accuracyFeature.setGeometry(coordinates);
});

var positionFeature = new ol.Feature();
positionFeature.setStyle(new ol.style.Style({
    image: new ol.style.Circle({
        radius: 6,
        fill: new ol.style.Fill({
            color: '#3399CC'
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 2
        })
    })
}));

geolocation.on('change:position', function () {
    var coordinates = geolocation.getPosition();
    var newGps = GPS.gcj_encrypt(coordinates[1], coordinates[0]);
    coordinates = [newGps.lon, newGps.lat];
    positionFeature.setGeometry(coordinates ?
        new ol.geom.Point(coordinates) : null);
});

var geolocationLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [accuracyFeature, positionFeature]
  })
});