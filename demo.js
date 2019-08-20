/// <reference path="./assets/leaflet-1.3.4/leaflet.js" />
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
        }).bindTooltip(toMin(iso.min_duration) + ' &dash; ' + toMin(iso.max_duration), {sticky: true});
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
            color: '#79b3af',
            weight: 10,
            attribution: '&copy; Navitia'
        }).bindPopup('Duration : ' + toMin(j.duration));
        line.on('mouseover', function () {
            line.setStyle({color: '#ea633a'})
        })
        line.on('mouseout', function () {
            line.setStyle({color: '#79b3af'})
        })
        return line
    })
    return L.layerGroup(multiLines);
}

L.Control.Geoloc = L.Control.extend({
    onAdd: (mapRef) => {
        var button = L.DomUtil.create('button', 'geoloc-button')
        button.innerHTML = 'Locate';
        button.onclick = () => {
            mapRef.locate();
            button.disabled = true;
            mapRef.on('locationfound', (locEvent) => {
                var radius = locEvent.accuracy / 2
                var point = locEvent.latlng
                mapRef.setView(point, 16)
                button.disabled = false;
                L.circle(point, radius).addTo(mapRef).bindPopup('Vous êtes vers là').openPopup()
            })
            mapRef.on('locationerror', (err) => {
                button.disabled = false;
            })
        }
        return button;
    }
})

L.control.geoloc = (opts) => {
    return new L.Control.Geoloc(opts);
}
function init(){
    // Espace Encan
    var lat = 46.1519906;
    var lng = -1.1506331;


    // Glacier
    var iceCreamLat = 46.156636;
    var iceCreamLng = -1.154570;
    
    // Gare Montparnasse
    //var stationLat = 48.839268;
    //var stationLng = 2.320752;


    var zoomLevel = 15;

    var map = L.map('map').setView([lat, lng], zoomLevel);

    // Wikimedia
    var mainLayer = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
        attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
        minZoom: 1,
        maxZoom: 19
    });

    // OpenStreetMap
    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    });

    var waterColor =  L.tileLayer('http://b.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });

    mainLayer.addTo(map)
    // Satellite layer
    var satelliteLayer = L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'ESRI'
    })

    // Public Transport
    var transportLayer = L.tileLayer('http://openptmap.org/tiles/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="http://openptmap.org/" target="_blank" rel="noopener noreferrer">OpenPTMap</a> / <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OSM Contributors</a>',
        maxZoom: 22,
    })

    var iceCreamMarker = L.marker([iceCreamLat, iceCreamLng], {title: 'Glacier'})
    var customIcon = L.icon({
        iconUrl: 'assets/images/jscMarker.png',
        iconSize:     [64, 64], // taille de l'icone
        iconAnchor:   [32, 64], // point de l'icone qui correspondra à la position du marker
        popupAnchor:  [0, -64] // point depuis lequel la popup doit s'ouvrir relativement à l'iconAnchor
    });
    var jscMarker = L.marker(
        [lat, lng],
        {icon: customIcon}
    );
    jscMarker.addTo(map)

    jscMarker.bindPopup(
        "<div class='jsc-popup'>Le JugSummerCamp c'est là ! <br><img src='assets/images/logo-summercamp.png'></div>",
        {className: 'jsc-popup-container'}
    )

    iceCreamMarker.bindPopup('Hello')
    
        var timeDimensionHeatmap = L.timeDimension.layer.HeatMap(
            {
                attribution: '&copy; <a href="https://opendata.paris.fr">OpenDataParis</a> contributors'
            }
        );
    var circle = L.circle([iceCreamLat, iceCreamLng], 200, { color: 'red'})
    

    var iceCreamGroup = L.layerGroup([circle, iceCreamMarker, journeyLine()])
    var isoGroup = isochronesLayer();
    var isoLegend = legend()
    isoGroup.on('add', () => {
        isoLegend.addTo(map)
    })
    isoGroup.on('remove', () => {
        isoLegend.remove();
    })

    var geolocButton = L.control.geoloc({position: 'topleft'})
    

    geolocButton.addTo(map)

    L.control.layers({
        'Main': mainLayer,
        'Water Color': waterColor,
        'Satellite': satelliteLayer,
    }, {
        'Transport': transportLayer,
        'Glacier': iceCreamGroup,
        'Isochrones': isoGroup,
        'Bars': barsLayer(),
        'Timedimension': timeDimensionHeatmap

    }).addTo(map)
}