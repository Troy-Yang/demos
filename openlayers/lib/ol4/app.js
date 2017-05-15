var layerManager = new layerManager();
var map = new ol.Map({
  target: 'map',
  layers: [
    layerManager.gdLayer,
    geolocationLayer
  ],
  view: new ol.View({
    center: [116.40969, 39.89945],
    projection: ol.proj.get('EPSG:4326'),
    zoom: 7
  })
});

//ol.proj.transform([116.40969, 39.89945], 'EPSG:4326', 'EPSG:3857'),

