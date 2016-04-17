// bike route
var routeLayer	
require([
		"esri/layers/FeatureLayer",
		"esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/renderers/SimpleRenderer", 
		 "esri/Color" 
	], function ( 
		FeatureLayer, 
		SimpleLineSymbol, SimpleFillSymbol, SimpleRenderer,
		Color
	){

	var symbol = new SimpleLineSymbol();
	symbol.setWidth( 9 );
	symbol.setColor(new Color([25,200,0, 0.4 ] ) );
	var renderer = new SimpleRenderer(symbol);

	var sU = "http://gis.geog.uw.edu:6080/arcgis/rest/services/geogx560/Bike_Routes/MapServer/0" 
	routeLayer = new FeatureLayer( sU, {
		mode: FeatureLayer.MODE_ONDEMAND,
		outFields: ["*"] 
	} )
    routeLayer.setRenderer( renderer );

})