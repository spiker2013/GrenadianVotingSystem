function LoadMap(data){
console.log(data);
var countriesLayer;
var geoJsonLayer1, geoJsonLayer2, geoJsonLayer3, geoJsonLayer4, geoJsonLayer5, geoJsonLayer6;


//------------------------------------------------------------------------------------------------>
//FUNCTIONS FOR INTERACTING WITH COUNTRIES LAYER.

//highlights the layers as it is clicked.
function highlightFeature(e){
	var layer = e.target;
	layer.setStyle(
		{
			weight: 5,
			color: 'purple',
			fillColor: 'white',
			fillOpacity: 0.2
		}
	);
	if(!L.Browser.ie && !L.Browser.opera){
		layer.bringToFront();
	}
}

//resets the layers features after the mouse moves away from it.
function resetHighlight(e){
	countriesLayer.resetStyle(e.target);
}

//zooms on a layer whn clicked.
function zoomToFeature(e){
	map.fitBounds(e.target.getBounds());
}

//this function enables all features listed on each country.
function countryEachFeature(feature, layer){
	layer.on(
		{
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		}
	);
}

//------------------------------------------------------------------------------------------------>


//------------------------------------------------------------------------------------------------>
//FUNCTIONS FOR STYLING COUNTRIES LAYER.

//This function "getCountryColor" assigns each country a color based on their population size
function getCountryColor(popEst){
	if(popEst > 100000000){
		return 'red';
	}
	else if(popEst > 50000000){
		return 'blue';
	}
	else{
		return 'green';
	}
}

//This function gives the map its style
function countriesStyle(feature){
	return{
		fillColor: getCountryColor(feature.properties.POP_EST),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: 3,
		fillOpacity: 0.7
	}
}

//------------------------------------------------------------------------------------------------>


//------------------------------------------------------------------------------------------------>
//FUNCTIONS FOR INTERACTING WITH PROVINCES.

//highlights the layers as it is clicked.
function highlightFeature(e){
	var layer = e.target;
	layer.setStyle(
		{
			weight: 5,
			color: 'purple',
			//fillColor: 'red',
			fillOpacity: 0.4
		}
	);
	if(!L.Browser.ie && !L.Browser.opera){
		layer.bringToFront();
	}
}

//resets the layers features after the mouse moves away from it.
function resetHighlightSPW(e){
	geoJsonLayerSPW.resetStyle(e.target);
}
function resetHighlightSPE(e){
	geoJsonLayerSPE.resetStyle(e.target);
}
function resetHighlightSANW(e){
	geoJsonLayerSANW.resetStyle(e.target);
}
function resetHighlightSANE(e){
	geoJsonLayerSANE.resetStyle(e.target);
}
function resetHighlightSASW(e){
	geoJsonLayerSASW.resetStyle(e.target);
}
function resetHighlightSASE(e){
	geoJsonLayerSASE.resetStyle(e.target);
}
function resetHighlightSD(e){
  geoJsonLayerSD.resetStyle(e.target);
}
function resetHighlightSGNW(e){
  geoJsonLayerSGNW.resetStyle(e.target);
}
function resetHighlightSGNE(e){
  geoJsonLayerSGNE.resetStyle(e.target);
}
function resetHighlightSGC(e){
  geoJsonLayerSGC.resetStyle(e.target);
}
function resetHighlightSGS(e){
  geoJsonLayerSGS.resetStyle(e.target);
}
function resetHighlightSGSE(e){
  geoJsonLayerSGSE.resetStyle(e.target);
}
function resetHighlightSJ(e){
  geoJsonLayerSJ.resetStyle(e.target);
}
function resetHighlightSM(e){
  geoJsonLayerSM.resetStyle(e.target);
}

//zooms on a layer whn clicked.
function zoomToFeature(e){
	map.fitBounds(e.target.getBounds());
}

//this function enables all features listed on each country.
function geoEachFeatureSPW(feature, layer){
	layer.on(
		{
			mouseover: highlightFeature,
			mouseout: resetHighlightSPW,
			click: zoomToFeature
		}
	);
}
function geoEachFeatureSPE(feature, layer){
	layer.on(
		{
			mouseover: highlightFeature,
			mouseout: resetHighlightSPE,
			click: zoomToFeature
		}
	);
}
function geoEachFeatureSANW(feature, layer){
	layer.on(
		{
			mouseover: highlightFeature,
			mouseout: resetHighlightSANW,
			click: zoomToFeature
		}
	);
}
function geoEachFeatureSANE(feature, layer){
	layer.on(
		{
			mouseover: highlightFeature,
			mouseout: resetHighlightSANE,
			click: zoomToFeature
		}
	);
}
function geoEachFeatureSASW(feature, layer){
	layer.on(
		{
			mouseover: highlightFeature,
			mouseout: resetHighlightSASW,
			click: zoomToFeature
		}
	);
}
function geoEachFeatureSASE(feature, layer){
	layer.on(
		{
			mouseover: highlightFeature,
			mouseout: resetHighlightSASE,
			click: zoomToFeature
		}
	);
}
function geoEachFeatureSD(feature, layer){
  layer.on(
    {
      mouseover: highlightFeature,
      mouseout: resetHighlightSD,
      click: zoomToFeature
    }
  );
}
function geoEachFeatureSGNW(feature, layer){
  layer.on(
    {
      mouseover: highlightFeature,
      mouseout: resetHighlightSGNW,
      click: zoomToFeature
    }
  );
}
function geoEachFeatureSGNE(feature, layer){
  layer.on(
    {
      mouseover: highlightFeature,
      mouseout: resetHighlightSGNE,
      click: zoomToFeature
    }
  );
}
function geoEachFeatureSGC(feature, layer){
  layer.on(
    {
      mouseover: highlightFeature,
      mouseout: resetHighlightSGC,
      click: zoomToFeature
    }
  );
}
function geoEachFeatureSGS(feature, layer){
  layer.on(
    {
      mouseover: highlightFeature,
      mouseout: resetHighlightSGS,
      click: zoomToFeature
    }
  );
}
function geoEachFeatureSGSE(feature, layer){
  layer.on(
    {
      mouseover: highlightFeature,
      mouseout: resetHighlightSGSE,
      click: zoomToFeature
    }
  );
}
function geoEachFeatureSJ(feature, layer){
  layer.on(
    {
      mouseover: highlightFeature,
      mouseout: resetHighlightSJ,
      click: zoomToFeature
    }
  );
}
function geoEachFeatureSM(feature, layer){
  layer.on(
    {
      mouseover: highlightFeature,
      mouseout: resetHighlightSM,
      click: zoomToFeature
    }
  );
}

//------------------------------------------------------------------------------------------------>


//------------------------------------------------------------------------------------------------>
//FUNCTIONS FOR STYLING ROVINCES LAYERS.

//This function assigns each province a color based on thepolitcal party that won that constituency.
function getGeoColor(winVote){
	if(winVote == 1){
		return 'green';
	}
	else if(winVote == 2){
		return 'yellow';
	}
  else 
    return 'white';
}

//This function gives the province its style
function geoStyle(winVote){
	return{
		fillColor: getGeoColor(winVote),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: 3,
		fillOpacity: 0.7
	}
}

//------------------------------------------------------------------------------------------------>


//------------------------------------------------------------------------------------------------>
//CODE FOR VIEWING THE MAP.

//Setting the map.
var map = L.map('map').setView([12.1793, -61.6595], 10.5);
countriesLayer = L.geoJson(countries,
	{
		style: countriesStyle,
		onEachFeature: countryEachFeature
	}
);//.addTo(map);
var provincesLayer = L.geoJson(provinces);//.addTo(map);

//Plugin from https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant
// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
var roads = L.gridLayer.googleMutant({type: 'hybrid'}).addTo(map);


//This allows one to view the entire map.
//map.fitBounds(countriesLayer.getBounds());

//------------------------------------------------------------------------------------------------>



//------------------------------------------------------------------------------------------------>
//LEAFLET GEOMETRY PLUGIN IMPLEMENTATION.
//------------------------------------------------------------------------------------------------>



//------------------------------------------------------------------------------------------------>
//LEAFLET GEOMETRY CONTROL.
map.pm.addControls({
    drawPolygon: true,
    drawPolyline: true,
    deleteLayer: true,
});

//------------------------------------------------------------------------------------------------>


//------------------------------------------------------------------------------------------------>
//PLOTTING THE POINTS FOR THE SEPARAE PROVINCES.

var geoJsonDataSD = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -61.71140671,
              12.01480814
            ],
            [
              -61.63793564,
              12.04737895
            ],
            [
            	-61.70282364,
            	12.07020974
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSGNW = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
            -61.72809515,
            12.11012211
            ],
            [
              -61.74779892,
              12.1088162
            ],
            [
              -61.74985886,
              12.04637166
            ],
            [
            -61.72740851,
            12.0772232
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSGNE = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
            	-61.70282364,
            	12.07020974
            ],
            [
              -61.70145035,
              12.10948757
            ],
            [
              -61.72809515,
              12.11012211
            ],
            [
              -61.72740851,
              12.0772232
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSGC = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -61.70282364,
              12.07020974
            ],
            [
              -61.72740851,
              12.0772232
            ],
            [
              -61.74985886,
              12.04637166
            ],
            [
              -61.72843848,
              12.04902091
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSGS = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -61.70282364,
              12.07020974
            ],
            [
              -61.72843848,
              12.04902091
            ],
            [
              -61.74985886,
              12.04637166
            ],
            [
              -61.75830756,
              12.02551675
            ],
            [
              -61.80087958,
              12.00335379
            ],
            [
              -61.733245,
              12.03189665
            ],
            [
              -61.733245,
              12.03189665
            ],
            [
              -61.71140671,
              12.01480814
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSGSE = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -61.733245,
              12.03189665
            ],
            [
              -61.80087958,
              12.00335379
            ],
            [
              -61.74320135,
              11.99730903
            ],
            [
              -61.71140671,
              12.01480814
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSANW = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -61.70145035,
              12.10948757
            ],
            [
              -61.67295456,
              12.16721885
            ],
            [
              -61.64089117,
              12.16886008
            ],
            [
              -61.65805731,
              12.11280756
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSANE = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -61.65805731,
              12.11280756
            ],
            [
              -61.64089117,
              12.16886008
            ],
            [
              -61.60360336,
              12.1692325
            ],
            [
              -61.62578497,
              12.11549297
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSASW = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
            	-61.70282364,
            	12.07020974
            ],
            [
              -61.70145035,
              12.10948757
            ],
            [
            	-61.65805731,
            	12.11280756
            ],
            [
              -61.63793564,
              12.04737895
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSASE = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -61.63793564,
              12.04737895
            ],
            [
              -61.65805731,
              12.11280756
            ],
            [
              -61.62578497,
              12.11549297
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSJ = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -61.70145035,
              12.10948757
            ],
            [
            	-61.67295456,
            	12.16721885
            ],
            [
            	-61.72239304,
            	12.17594458
            ],
            [
            	-61.74779892,
            	12.1088162
            ],
            [
            -61.72809515,
            12.11012211
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSM = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
            	-61.67295456,
            	12.16721885
            ],
            [
            	-61.67226791,
            	12.20144892
            ],
            [
            	-61.68277655,
            	12.22020321
            ],
            [
            	-61.72239304,
            	12.17594458
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSPW = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
          	[
            	-61.67295456,
            	12.16721885
            ],
            [
            	-61.67226791,
            	12.20144892
            ],
            [
            	-61.68277655,
            	12.22020321
            ],
            [
            	-61.65805731,
            	12.23496671
            ],
            [
            	-61.60724554,
            	12.22355862
            ]
          ]
        ]
      }
    }
    ]
};

var geoJsonDataSPE = {
    "type": "FeatureCollection",
    "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -61.67295456,
              12.16721885
            ],
            [
              -61.60724554,
              12.22355862
            ],
            [
              -61.60360336,
              12.1692325
            ],
            [
              -61.64089117,
              12.16886008
            ]
          ]
        ]
      }
    }
    ]
};


//------------------------------------------------------------------------------------------------>


//------------------------------------------------------------------------------------------------>
//PRESENTING THE LAYERS WITH THEIR RESPECTIVE DATA.

//NB. The parameter for the "geoStyle" function determines what color code is assigned to the layer. Refer to the "geoStyle" function for the color coding.


var constituency = new Array();
var NNP = new Array();
var NDC = new Array();

data.forEach(function(i){
  constituency.push(i['Constituency']);
  NNP.push(parseInt(i['NNP']) + parseInt(i['NNPTraditional']));
  NDC.push(parseInt(i['NDC']) + parseInt(i['NDCTraditional']));
});

function winner(NNP, NDC, i) {
  if (NNP[i] > NDC[i])
    return 1;
  else if (NDC[i] > NNP[i])
    return 2;
  else 
    return 0;
}


var geoJsonButton = document.getElementById('test-geojson');
geoJsonLayerSD = L.geoJson(geoJsonDataSD,
	{
		style: geoStyle(winner(NNP, NDC, 4)),
		onEachFeature: geoEachFeatureSD
	}
).addTo(map);

var geoJsonLayerSJ = L.geoJson(geoJsonDataSJ,
	{
		style: geoStyle(winner(NNP, NDC, 9)),
		onEachFeature: geoEachFeatureSJ
	}
).addTo(map);

var geoJsonLayerSM = L.geoJson(geoJsonDataSM,
	{
		style: geoStyle(winner(NNP, NDC, 10)),
		onEachFeature: geoEachFeatureSM
	}
).addTo(map);

var geoJsonLayerSPE = L.geoJson(geoJsonDataSPE,
	{
		style: geoStyle(winner(NNP, NDC, 11)),
		onEachFeature: geoEachFeatureSPE
	}
).addTo(map);
var geoJsonLayerSPW = L.geoJson(geoJsonDataSPW,
  {
    style: geoStyle(winner(NNP, NDC, 12)),
    onEachFeature: geoEachFeatureSPW
  }
).addTo(map);

var geoJsonLayerSANE = L.geoJson(geoJsonDataSANE,
  {
    style: geoStyle(winner(NNP, NDC, 0)),
    onEachFeature: geoEachFeatureSANE
  }
).addTo(map);
var geoJsonLayerSANW = L.geoJson(geoJsonDataSANW,
  {
    style: geoStyle(winner(NNP, NDC, 1)),
    onEachFeature: geoEachFeatureSANW
  }
).addTo(map);
var geoJsonLayerSASW = L.geoJson(geoJsonDataSASW,
  {
    style: geoStyle(winner(NNP, NDC, 3)),
    onEachFeature: geoEachFeatureSASW
  }
).addTo(map);
var geoJsonLayerSASE = L.geoJson(geoJsonDataSASE,
  {
    style: geoStyle(winner(NNP, NDC, 2)),
    onEachFeature: geoEachFeatureSASE
  }
).addTo(map);

var geoJsonLayerSGNE = L.geoJson(geoJsonDataSGNE,
  {
    style: geoStyle(winner(NNP, NDC, 5)),
    onEachFeature: geoEachFeatureSGNE
  }
).addTo(map);
geoJsonLayerSGNW = L.geoJson(geoJsonDataSGNW,
  {
    style: geoStyle(winner(NNP, NDC, 6)),
    onEachFeature: geoEachFeatureSGNW
  }
).addTo(map);
var geoJsonLayerSGS = L.geoJson(geoJsonDataSGS,
  {
    style: geoStyle(winner(NNP, NDC, 7)),
    onEachFeature: geoEachFeatureSGS
  }
).addTo(map);
var geoJsonLayerSGSE = L.geoJson(geoJsonDataSGSE,
  {
    style: geoStyle(winner(NNP, NDC, 8)),
    onEachFeature: geoEachFeatureSGSE
  }
).addTo(map);
var geoJsonLayerSGC = L.geoJson(geoJsonDataSGC,
  {
    style: geoStyle(winner(NNP, NDC, 13)),
    onEachFeature: geoEachFeatureSGC
  }
).addTo(map);

//Making the separate layers (provinces) editable.

/*
geoJsonLayer1.pm.toggleEdit({
    draggable: true,
    snappable: true
});
geoJsonLayer2.pm.toggleEdit({
    draggable: true,
    snappable: true
});
geoJsonLayer3.pm.toggleEdit({
    draggable: true,
    snappable: true
});
geoJsonLayer4.pm.toggleEdit({
    draggable: true,
    snappable: true
});
geoJsonLayer5.pm.toggleEdit({
    draggable: true,
    snappable: true
});
geoJsonLayer6.pm.toggleEdit({
    draggable: true,
    snappable: true
});
*/

//------------------------------------------------------------------------------------------------>


//------------------------------------------------------------------------------------------------>
//ENTER CODE HERE TO DISPLAY THE VALUES IN THE POP UP TAB ON THE MAP.

geoJsonLayerSD.bindPopup("Constituency: "+ constituency[4] + "<br>NNP: " + NNP[4] + "<br>NDC: " + NDC[4]);
geoJsonLayerSJ.bindPopup("Constituency: "+ constituency[9] + "<br>NNP: " + NNP[9] + "<br>NDC: " + NDC[9]);
geoJsonLayerSM.bindPopup("Constituency: "+ constituency[10] + "<br>NNP: " + NNP[10] + "<br>NDC: " + NDC[10]);

geoJsonLayerSPW.bindPopup("Constituency: "+ constituency[12] + "<br>NNP: " + NNP[12] + "<br>NDC: " + NDC[12]);
geoJsonLayerSPE.bindPopup("Constituency: "+ constituency[11] + "<br>NNP: " + NNP[11] + "<br>NDC: " + NDC[11]);

geoJsonLayerSANW.bindPopup("Constituency: "+ constituency[1] + "<br>NNP: " + NNP[1] + "<br>NDC: " + NDC[1]);
geoJsonLayerSANE.bindPopup("Constituency: "+ constituency[0] + "<br>NNP: " + NNP[0] + "<br>NDC: " + NDC[0]);
geoJsonLayerSASW.bindPopup("Constituency: "+ constituency[3] + "<br>NNP: " + NNP[3] + "<br>NDC: " + NDC[3]);
geoJsonLayerSASE.bindPopup("Constituency: "+ constituency[2] + "<br>NNP: " + NNP[2] + "<br>NDC: " + NDC[2]);

geoJsonLayerSGNW.bindPopup("Constituency: "+ constituency[6] + "<br>NNP: " + NNP[6] + "<br>NDC: " + NDC[6]);
geoJsonLayerSGNE.bindPopup("Constituency: "+ constituency[5] + "<br>NNP: " + NNP[5] + "<br>NDC: " + NDC[5]);
geoJsonLayerSGC.bindPopup("Constituency: "+ constituency[13] + "<br>NNP: " + NNP[13] + "<br>NDC: " + NDC[13]);
geoJsonLayerSGS.bindPopup("Constituency: "+ constituency[7] + "<br>NNP: " + NNP[7] + "<br>NDC: " + NDC[7]);
geoJsonLayerSGSE.bindPopup("Constituency: "+ constituency[8] + "<br>NNP: " + NNP[8] + "<br>NDC: " + NDC[8]);
//------------------------------------------------------------------------------------------------>


//------------------------------------------------------------------------------------------------>
//IMPLEMENTING LAYERS.

var baseMaps = {
	'Google Graphics': roads
};
var overlayMaps = {
	'Countries': countriesLayer,
	'Provinces': provincesLayer
};
L.control.layers(baseMaps, overlayMaps).addTo(map);

//------------------------------------------------------------------------------------------------>


//------------------------------------------------------------------------------------------------>
//IMPLEMENTING THE LEGEND.

var legend = L.control({position: 'bottomright'});
legend.onAdd = function(map){
	var div = L.DomUtil.create('div', 'legend');
	var labels = [
		"//",
		"NNP Political Party Wins Constituency",
		"NDC Political Party Wins Constituency",
	];
	var grades = [100000001, 50000001, 50000000];
	div.innerHTML = '<div><b>Legend</b></div>';
	for(var i=1; i<3; i++){
		div.innerHTML += '<i style="background:' + getGeoColor(i) + '">&nbsp;&nbsp</i>&nbsp;&nbsp;"' + labels[i] + '<br />';
	}
	return div;
}
legend.addTo(map);

//------------------------------------------------------------------------------------------------>

}
