
var bikeRackHeatmapLayer, bikeRackMarkLayer

require([
		"esri/layers/FeatureLayer",
		"esri/map",
		"esri/renderers/HeatmapRenderer", 
		"esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/renderers/SimpleRenderer", 
		 "esri/Color" 
	], function ( 
		FeatureLayer, 
		Map, 
		HeatmapRenderer,
		SimpleLineSymbol, SimpleFillSymbol, SimpleRenderer,
		Color
	){

	var bikeRackURL = "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/SeattleBikes/FeatureServer/0" 
	bikeRackHeatmapLayer = new FeatureLayer( bikeRackURL, {
		mode: FeatureLayer.MODE_ONDEMAND,
		outFields: ["*"] 
	}  ) 
	var colors = [ 
	"rgba(0, 0, 255, 0)", 
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)", 
	"rgb(255, 0, 0)"
	]        
	var bikeRackHeatmapRenderer = new HeatmapRenderer({
		field: "RACK_CAPAC",
		colors: colors   
	}) 
	bikeRackHeatmapLayer.setRenderer( bikeRackHeatmapRenderer ) 

	bikeRackMarkLayer= new FeatureLayer( bikeRackURL, {
		mode: FeatureLayer.MODE_ONDEMAND,
		outFields: ["*"] 
	}  ) 

} )