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

    // TODO addLayers( [] ) TODO
	map.addLayer( bikeRackMarkLayer )
	map.addLayer( routeLayer )
	map.addLayer( bikeRackHeatmapLayer ) 

  	var el = document.querySelector('#control button')
  	var isHeatOn = true
  	el.onclick =  function(){
		if( isHeatOn ) bikeRackMarkLayer.hide() 
  		else bikeRackMarkLayer.show()
  		isHeatOn = !isHeatOn		
  	} 

}) 
