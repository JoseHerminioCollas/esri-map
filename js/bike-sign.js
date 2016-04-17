
var bikeSignLayer   

require([
		"esri/layers/FeatureLayer",
		"esri/map",
		"esri/renderers/HeatmapRenderer", 
		"esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/renderers/SimpleRenderer", 
		"esri/Color",
       	"esri/InfoTemplate" 
	], function ( 
		FeatureLayer, 
		Map, 
		HeatmapRenderer,
		SimpleLineSymbol, SimpleFillSymbol, SimpleRenderer,
		Color,
        InfoTemplate
	){

	var template = new InfoTemplate();
	template.setTitle("<b>${TEXT}</b>");
	template.setContent("  color:  ${COLOR1} ");
	
	//Includes signs installed and maintained by the Seattle Department of Transportation within the public right of way. The inventory is maintained in SDOT’s Infor/Hansen Asset Management System, and displayed in GIS as point events along a block face.
	var bU = 'http://gisrevprxy.seattle.gov/ArcGIS/rest/services/SDOT_EXT/DSG_datasharing/MapServer/21'
	//Layer: Marked Street (Bicycle Facility) (ID: 22)
	var cU = 'http://gisrevprxy.seattle.gov/ArcGIS/rest/services/SDOT_EXT/DSG_datasharing/MapServer/22'

	bikeSignLayer= new FeatureLayer( bU, {
		mode: FeatureLayer.MODE_ONDEMAND,
        infoTemplate: template,
		outFields: ["*"] 
	}  ) 

} )