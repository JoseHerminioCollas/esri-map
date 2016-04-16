/** Display an Esri map
*
*/
require([
		"esri/layers/FeatureLayer",
		"esri/map",
		"esri/renderers/HeatmapRenderer" 
	], function ( 
		FeatureLayer, 
		Map, 
		HeatmapRenderer 
	){
	var map = new Map("map", {
		basemap: "gray",
		zoom: 14,
		center: [-122.332, 47.606],
		minZoom: 3,
		maxZoom: 35
	}) 
	var serviceURL = "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/SeattleBikes/FeatureServer/0" 
	var heatmapFeatureLayerOptions = {
		mode: FeatureLayer.MODE_SNAPSHOT,
		outFields: ["*"] 
	} 
	var heatmapFeatureLayer = new FeatureLayer(serviceURL, heatmapFeatureLayerOptions) 
	var colors = [ 
	"rgba(0, 0, 255, 0)", 
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)", 
	"rgb(255, 0, 0)"
	]        
	var heatmapRenderer = new HeatmapRenderer({
		field: "RACK_CAPAC",
		colors: colors   
	}) 

	heatmapFeatureLayer.setRenderer(heatmapRenderer) 
	map.addLayer(heatmapFeatureLayer) 

}) 