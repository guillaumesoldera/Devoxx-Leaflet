L.TimeDimension.Layer.HeatMap = L.TimeDimension.Layer.extend({

    initialize: function(options) {
        var heatmapCfg = this._getHeatmapOptions(options.heatmatOptions || {});
        var layer = L.heatLayer([], heatmapCfg);
        L.TimeDimension.Layer.prototype.initialize.call(this, layer, options);
        this._currentLoadedTime = 0;
        this._currentTimeData = {
            max: this.options.heatmapMax || 10,
            data: []
        };
        this._period = this.options.period || "P1M";
        this._datas = this.options.datas || {};
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
        L.TimeDimension.Layer.prototype.onAdd.call(this, map);
        map.addLayer(this._baseLayer);
        if (this._timeDimension) {
            this._getDataForTime(this._timeDimension.getCurrentTime());
        }
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
        const points = datas[key]
        delete this._currentTimeData.data;
        this._currentTimeData = [...points];
        
        this._currentLoadedTime = time;
        if (this._timeDimension && time == this._timeDimension.getCurrentTime() && !this._timeDimension.isLoading()) {
            this._update();
        }
        this.fire('timeload', {
            time: time
        });
        


    },

});

L.timeDimension.layer.HeatMap = function(options) {
    return new L.TimeDimension.Layer.HeatMap(options);
};
