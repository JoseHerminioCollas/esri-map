
var bikeShopLayer 

require([
		"esri/layers/FeatureLayer",
		"esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/renderers/SimpleRenderer", 
		"esri/Color" 
	], function ( 
		FeatureLayer, 
		SimpleLineSymbol, SimpleFillSymbol, SimpleRenderer,
		Color
	){

	var dU = 'http://services5.arcgis.com/jpyPhilPVQexyw4j/arcgis/rest/services/Seattle_Bike_Shops/FeatureServer/0'
	bikeShopLayer= new FeatureLayer( dU, {
		mode: FeatureLayer.MODE_ONDEMAND,
		outFields: ["*"] 
	}  ) 

} )