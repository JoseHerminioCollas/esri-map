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

  	var b1 = document.querySelector('#control button:nth-child(1)')
  	var isHeatOn = true
  	b1.onclick = function(){
		if( isHeatOn ) bikeRackMarkLayer.hide() 
  		else bikeRackMarkLayer.show()
  		isHeatOn = !isHeatOn		
  	} 

  	var b2 = document.querySelector('#control button:nth-child(2)')
  	var isB2On = true
  	b2.onclick = function(){
		if( isB2On ) routeLayer.hide() 
  		else routeLayer.show()
  		isB2On = !isB2On		
  	} 

  	var b3 = document.querySelector('#control button:nth-child(3)')
  	var isB3On = true
  	b3.onclick = function(){
		if( isB3On ) bikeRackHeatmapLayer.hide() 
  		else bikeRackHeatmapLayer.show()
  		isB3On = !isB3On		
  	} 



}) 
