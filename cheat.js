var matchingGradient = [
    "#79BBD2",
    "#71A6CE",
    "#788FC2",
    "#8676AD",
    "#925C8E",
    "#944367",
    "#7e3957"
]

function toMin(durationInSec) {
    return Math.round((durationInSec / 60)) + 'min.'
}



function barsLayer() {
    var markersBar = bars.map(bar => {
        return L.marker(
            [bar.geometry.location.lat,bar.geometry.location.lng],
            {
                title: bar.name
            }
        ).bindPopup(bar.name);
    })
    var markerClusterGroup = L.markerClusterGroup();
    markerClusterGroup.addLayers(markersBar)
    return markerClusterGroup;
    //return L.layerGroup(markersBar);
}

function isochronesLayer() {
    var isochronesLayerGroup = isochrones.isochrones.map((iso, idx) => {
        const color = matchingGradient[idx];
        return L.geoJSON(iso.geojson, {
            style: {
                fillColor: color,
                weight: 1,
                opacity: 0.9,
                color: color,
                fillOpacity: 0.8,
            }, attribution: '&copy; Navitia'
        });
    })
    return L.layerGroup(isochronesLayerGroup);
}

function legend() {
    var legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = '<h4>Travel time legend</h4>'
        isochrones.isochrones.forEach((iso, idx, allTab) => {
            var text = toMin(iso.min_duration) + ' &dash; ' + toMin(iso.max_duration)
            div.innerHTML +=
            '<i style="background:' + matchingGradient[idx] + '"></i> ' +
                text + (idx !== allTab.length - 1 ? '<br>' : '');
        })
        return div;
    };
    return legend;
}

function journeyLine() {
    var multiLines = journey.journeys.map(j => {
        var latlngs = j.sections.filter(s => s.type !== "waiting").map(s => {
            if (s.geojson !== undefined) {
                return s.geojson.coordinates.map(coord => {
                    return [coord[1], coord[0]]
                })
            }
        })
        var line = L.polyline(latlngs, {
            opacity: 0.8,
            dashArray: "2 12",
            color: 'yellow',
            weight: 10,
            attribution: '&copy; Navitia'
        }).bindPopup('Duration : ' + toMin(j.duration));
        line.on('mouseover', function () {
            line.setStyle({color: 'red'})
        })
        line.on('mouseout', function () {
            line.setStyle({color: 'yellow'})
        })
        return line
    })
    return L.layerGroup(multiLines);
}

var positionCircle = undefined;
L.Control.Geoloc = L.Control.extend({
    onAdd: (mapRef) => {
        var div = L.DomUtil.create('div', 'geolocation-container');
        var button = L.DomUtil.create('button', '', div);
        button.innerHTML = "Locate";
        button.onclick = () => {
            mapRef.locate();
            button.disabled = true;
        }
        mapRef.on('locationfound', (locEvent) => {
            var point = locEvent.latlng;
            var radius = locEvent.accuracy;
            mapRef.panTo(point);
            mapRef.setZoom(16, {animate: true})
            if (positionCircle) {
                positionCircle.remove();
            }
            positionCircle = L.circle(point, radius).addTo(mapRef).bindPopup('Vous êtes dans cette zone').openPopup();
            button.disabled = false;
        })
        return div;
    }
})

L.control.geoloc = (opts) => {
    return new L.Control.Geoloc(opts);
}

function init(){

    // 1. Init map
    // 2. Layers
    // 3. Layer as overlay (Transport public)
    // 4. Marker simple avec Popup
    // 5. Marker custom avec popup custom
    // 6. Circle
    // 7. LayerGroup (marker + circle)
    // 8. Polylines
    // 9. GeoJSON
    // 10. Bars (plugin)
    // 11. Control Geoloc (extend)
    // 12. Plugin custom (time dimension + heatmap)

    // Palais des Congrès Location
    var lat = 48.877179;
    var lng = 2.280502;


    // Gare Montparnasse
    var stationLat = 48.839268;
    var stationLng = 2.320752;

    var zoomLevel = 13;
    var map = L.map('map').setView([lat, lng], zoomLevel);
    var stationMarker = L.marker(
        [stationLat, stationLng],
        {
            title: "Montparnasse"
        }
    ).bindPopup('Hello station');
    var circle = L.circle([stationLat, stationLng], 2000, {color: 'red'});

    var journeyOverlay = journeyLine();

    var stationJourneyLayer = L.layerGroup([circle, journeyOverlay, stationMarker])

    var timeDimensionHeatmap = L.timeDimension.layer.HeatMap(
        {
            attribution: '&copy; <a href="https://opendata.paris.fr">OpenDataParis</a> contributors'
        }
    );

    
    /*
    Tiles are numbered as {z}/{x}/{y} or {z}/{x}/{y}{r}, where
        - z is zoom,
        - x is the tile number from left to right,
        - y is the tile number from top to bottom.
        - r is for retina screen
    */
   
    /*var tempLayer = L.tileLayer('https://c.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=06aac0fd4ba239a20d824ef89602f311', {
        attribution: '&copy; <a href="https://openweathermap.org">OpenWeatherMap</a> contributors',
        opacity: '0.5'
    })*/
    var tempLayer = L.tileLayer('https://a.sat.owm.io/vane/2.0/weather/TA2/{z}/{x}/{y}?appid=9de243494c0b295cca9337e1e96b00e2&fill_bound', {
        attribution: '&copy; <a href="https://openweathermap.org">OpenWeatherMap</a> contributors'
    })

    // OpenStreetMap
    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    });
    // Wikimedia
    var mainLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
        attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
        minZoom: 1,
        maxZoom: 19
    });
    // Stamen Layer
    var stamenToner = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });
    var waterColor =  L.tileLayer('http://b.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });
    // Gray Scale layer
    var grayScaleLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        id: 'mapbox.light',
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    })

    // Satellite layer
    var satelliteLayer = L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'ESRI'
    })
    
    // Public Transport
    var transportLayer = L.tileLayer('http://openptmap.org/tiles/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="http://openptmap.org/" target="_blank" rel="noopener noreferrer">OpenPTMap</a> / <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OSM Contributors</a>',
        maxZoom: 22,
    })

    var barsOverlay = barsLayer()

    var isochronesOverlay = isochronesLayer();                
    var legendControl = legend()
    isochronesOverlay.on('add', function() {
        legendControl.addTo(map);
    });
    isochronesOverlay.on('remove', function() {
        legendControl.remove();
    });


    var geolocButton = L.control({'position': 'topleft'})
    geolocButton.onAdd = () => {
        var div = L.DomUtil.create('div', 'geoloc');
        var button = L.DomUtil.create('button', '', div)
        button.innerHTML = "Locate";
        button.onclick = () => {
            map.locate();
            button.innerHTML = 'En cours...';
            button.disabled = true;
        }

        map.on('locationfound', (locEvent) => {
            var radius = locEvent.accuracy / 2;
            map.panTo(locEvent.latlng);
            map.setZoom(16, {animate: true})
            L.marker(locEvent.latlng).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point").openPopup();
            L.circle(locEvent.latlng, radius).addTo(map);
            button.innerHTML = "Locate";
            button.disabled = false;
        })

        map.on('locationerror', (error) => {
            window.alert('Sorry bro...');
            button.innerHTML = "Locate";
            button.disabled = false;
        })

        return div;
    }

    //var heat = L.heatLayer(items, {radius: 17, blur: 10});



    var controlLayer = L.control.layers({
        'OpenStreetMap': osmLayer,
        'Wikimedia': mainLayer,
        'Stamen': stamenToner,
        'WaterColor': waterColor,
        'GrayScale': grayScaleLayer,
        'Satellite': satelliteLayer
    }, {
        'Temperature': tempLayer,
        'Travel time': isochronesOverlay,
        'Transport': transportLayer,
        'Bars': barsOverlay,
        'Station': stationJourneyLayer,
        'Time dimension': timeDimensionHeatmap
    })
    
    mainLayer.addTo(map);
    controlLayer.addTo(map);
    var customIcon = L.icon({
        iconUrl: 'assets/images/devoxxMarker.png',
        iconSize:     [64, 64], // taille de l'icone
        iconAnchor:   [32, 64], // point de l'icone qui correspondra à la position du marker
        popupAnchor:  [0, -64] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
    });
    var devoxxMarker = L.marker(
        [lat, lng],
        {icon: customIcon}
    );
    devoxxMarker.bindPopup("<div class='devoxx-popup'>Devoxx is here ! <br><img src='assets/images/DevoxxLogo.png'></div>", {className: 'devoxx-popup-container'})
    devoxxMarker.bindTooltip("<span>Devoxx Location (Kinepolis)</span>")
    devoxxMarker.addTo(map);
}