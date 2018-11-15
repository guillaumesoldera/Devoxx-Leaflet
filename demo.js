var matchingGradient = [
    "#79BBD2",
    "#71A6CE",
    "#788FC2",
    "#8676AD",
    "#925C8E",
    "#944367",
]

function toMin(durationInSec) {
    return Math.round((durationInSec / 60)) + 'min.'
}



function barsLayer() {
    var barLayerGroup = bars.map(bar => {
        return L.marker(
            [bar.geometry.location.lat,bar.geometry.location.lng],
            {
                title: bar.name
            }
        ).bindPopup(bar.name);
    })
    return L.layerGroup(barLayerGroup);
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
        var latlngs = j.sections.map(s => {
            return s.geojson.coordinates.map(coord => {
                return [coord[1], coord[0]]
            })
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

function init(){
    // Kinepolis Location
    var lat = 51.2459082;
    var lng = 4.4162091;


    // Station Antwerpen Centraal
    var stationLat = 51.217222;
    var stationLng = 4.421111;

    var zoomLevel = 13;
    var map = L.map('map').setView([lat, lng], zoomLevel);
    var stationMarker = L.marker(
        [stationLat, stationLng],
        {
            title: "Antwerpen Centraal"
        }
    ).bindPopup('Hello station');
    var circle = L.circle([stationLat, stationLng], 2000, {color: 'red'});

    var journeyOverlay = journeyLine();

    var stationJourneyLayer = L.layerGroup([journeyOverlay, circle, stationMarker])
    
    /*
    Tiles are numbered as {z}/{x}/{y} or {z}/{x}/{y}{r}, where
        - z is zoom,
        - x is the tile number from left to right,
        - y is the tile number from top to bottom.
        - r is for retina screen
    */

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


    

    var controlLayer = L.control.layers({
        'OpenStreetMap': osmLayer,
        'Wikimedia': mainLayer,
        'Stamen': stamenToner,
        'WaterColor': waterColor,
        'GrayScale': grayScaleLayer
    }, {
        'Travel time': isochronesOverlay,
        'Transport': transportLayer,
        'Bars': barsOverlay,
        'Station': stationJourneyLayer,
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