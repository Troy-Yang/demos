function layerManager() {
    var gdLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            attributions: [new ol.Attribution({ html: '&copy; <a class="ol-attribution-amap" href="http://ditu.amap.com/">高德地图</a>' })],
            projection: ol.proj.get('EPSG:3857'),
            url: 'http://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
            wrapX: true
        })
    });
    var esriUrlTemplate = 'https://services.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}'
    var esriLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            attributions: [new ol.Attribution({ html: 'Copyright:© 2013 ESRI, i-cubed, GeoEye' })],
            projection: ol.proj.get('EPSG:4326'),
            tileUrlFunction: function(tileCoord) {
                return esriUrlTemplate.replace('{z}', (tileCoord[0] - 1).toString())
                            .replace('{x}', tileCoord[1].toString())
                            .replace('{y}', (-tileCoord[2] - 1).toString());
            }
        })
    });

    var bingLayer = new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5',
            projection: ol.proj.get('EPSG:3857'),
            imagerySet: 'Road'
        })
    });
    var tiandituLayer
    return {
        gdLayer: gdLayer,
        esriLayer: esriLayer,
        bingLayer: bingLayer
    };
}

// //var urlTemplate = 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}';
// var urlTemplate = "http://t2.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}";
// var attribution = new ol.Attribution({
//     html: '© <a href="http://www.chinaonmap.com/map/index.html">天地图</a>'
// });
// var coor = ol.proj.transform([116.40969, 39.89945], 'EPSG:4326', 'EPSG:3857');
// var view = new ol.View({
//     center: coor,
//     zoom: 13
// });
// var map = new ol.Map({
//     target: 'map',
//     layers: [
//         new ol.layer.Tile({
//             source: new ol.source.XYZ({
//                 attributions: [attribution],
//                 url: urlTemplate,
//                 tileUrlFunction: function (tileCoord) {
//                     return urlTemplate.replace('{z}', (tileCoord[0] - 1).toString())
//                         .replace('{x}', tileCoord[1].toString())
//                         .replace('{y}', (-tileCoord[2] - 1).toString());
//                 }
//             })
//         }),
//         new ol.layer.Tile({
//             source: new ol.source.XYZ({
//                 url: "http://t2.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}"
//             })
//         })
//     ],
//     view: view
// });