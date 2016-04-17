
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
// ???
var aU = 'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Bicycle_Count/FeatureServer/0'
// does this work
var u = 'http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/0'
//Includes signs installed and maintained by the Seattle Department of Transportation within the public right of way. The inventory is maintained in SDOT’s Infor/Hansen Asset Management System, and displayed in GIS as point events along a block face.
var bU = 'http://gisrevprxy.seattle.gov/ArcGIS/rest/services/SDOT_EXT/DSG_datasharing/MapServer/21'
var cU = 'http://gisrevprxy.seattle.gov/ArcGIS/rest/services/SDOT_EXT/DSG_datasharing/MapServer/22'
var dU = 'http://services5.arcgis.com/jpyPhilPVQexyw4j/arcgis/rest/services/Seattle_Bike_Shops/FeatureServer/0'
	bikeRackMarkLayer= new FeatureLayer( bikeRackURL, {
		mode: FeatureLayer.MODE_ONDEMAND,
		outFields: ["*"] 
	}  ) 

} )