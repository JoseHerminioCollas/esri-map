
var bikeShopLayer 

require([
		"esri/layers/FeatureLayer",
		"esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/renderers/SimpleRenderer", 
		"esri/Color",
      	"esri/InfoTemplate" 
 
	], function ( 
		FeatureLayer, 
		SimpleLineSymbol, SimpleFillSymbol, SimpleRenderer,
		Color,
        InfoTemplate
	){

	var template = new InfoTemplate();
	template.setTitle("<b>${Shop}</b>");
	template.setContent("${Address}");

	var dU = 'http://services5.arcgis.com/jpyPhilPVQexyw4j/arcgis/rest/services/Seattle_Bike_Shops/FeatureServer/0'
	bikeShopLayer= new FeatureLayer( dU, {
		mode: FeatureLayer.MODE_ONDEMAND,
        infoTemplate: template,
		outFields: ["*"] 
	}  ) 

} )