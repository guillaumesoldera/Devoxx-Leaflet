L.TimeDimension.Layer.HeatMap = L.TimeDimension.Layer.extend({

    initialize: function(options) {
        var heatmapCfg = this._getHeatmapOptions(options.heatmatOptions || {});
        var layer = L.heatLayer([], heatmapCfg);
        this._timeDimension = L.timeDimension({
            timeInterval: '2012-07-01/2018-09-01',
            period: 'P1M',
            currentTime: 1343826000000
        })
        L.TimeDimension.Layer.prototype.initialize.call(this, layer, {...options, timeDimension: this._timeDimension});
        this._currentLoadedTime = 0;
        this._currentTimeData = {
            max: this.options.heatmapMax || 10,
            data: []
        };
        this._period = this.options.period || "P1M";
    },

    _getHeatmapOptions: function(options) {
        var config = {};
        var defaultConfig = {
            radius: 17,
            maxOpacity: .8,
            blur: 10
        };
        for (var attrname in defaultConfig) {
            config[attrname] = defaultConfig[attrname]; 
        }
        for (var attrname in options) {
            config[attrname] = options[attrname]; 
        }
        return config;
    },

    onAdd: function(map) {
        map.addLayer(this._baseLayer);
        L.TimeDimension.Layer.prototype.onAdd.call(this, map);
        this._timeDimensionControl = L.control.timeDimension({timeDimension: this._timeDimension});
        this._timeDimensionControl.addTo(map);
        if (this._timeDimension) {
            this._getDataForTime(this._timeDimension.getCurrentTime());
        }
    },

    onRemove: function(map) {
        map.removeLayer(this._baseLayer);
        this._timeDimensionControl.remove();
        this._timeDimensionControl = undefined;

    },

    _onNewTimeLoading: function(ev) {
        this._getDataForTime(ev.time);
        return;
    },

    isReady: function(time) {
        return (this._currentLoadedTime == time);
    },

    _update: function() {
        this._baseLayer.setLatLngs(this._currentTimeData);
        return true;
    },

    _getDataForTime: function(time) {
        const date = new Date(time);
        const year = date.getFullYear();
        const month = date.getMonth() + 1
        const key = year + '-' + month;
        fetch(`http://localhost:8000/data/${key}`)
            .then(r => r.json())
            .then(points => {
                delete this._currentTimeData.data;
                this._currentTimeData = JSON.parse(points);
                
                this._currentLoadedTime = time;
                if (this._timeDimension && time == this._timeDimension.getCurrentTime() && !this._timeDimension.isLoading()) {
                    this._update();
                }
                this.fire('timeload', {
                    time: time
                });
            })
        


    },

});

L.timeDimension.layer.HeatMap = function(options) {
    return new L.TimeDimension.Layer.HeatMap(options);
};
