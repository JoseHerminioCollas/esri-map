/** Display an Esri map
*
*/
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

	var map = new Map("map", {
		basemap: "gray",
		zoom: 14,
		center: [-122.332, 47.6102],
		minZoom: 3,
		maxZoom: 35
	}) 
	// bike racks heat map
	var bikeRackURL = "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/SeattleBikes/FeatureServer/0" 
	var bikeRackHeatmapLayer = new FeatureLayer( bikeRackURL, {
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
	// TODO toggle this dynamicmapservices : url do not hae    '/0' 
	bikeRackHeatmapLayer.setRenderer( bikeRackHeatmapRenderer ) 

	// bike route
	var symbol = new SimpleLineSymbol();
	symbol.setWidth( 9 );
	symbol.setColor(new Color([25,200,0, 0.4 ] ) );
	var renderer = new SimpleRenderer(symbol);

	var sU = "http://gis.geog.uw.edu:6080/arcgis/rest/services/geogx560/Bike_Routes/MapServer/0" 
	var routLayer = new FeatureLayer( sU, {
		mode: FeatureLayer.MODE_ONDEMAND,
		outFields: ["*"] 
	} )
    routLayer.setRenderer( renderer );

    // TODO addLayers( [] ) TODO
	map.addLayer( bikeRackHeatmapLayer ) 
	map.addLayer( routLayer )
}) 
