var url = 'http://api.tiles.mapbox.com/v3/';
var m, interaction;
var layer = 'danwood.russia';
var legend; 
//do i need a legend?

function buildMap(layer) {
  wax.tilejson(url + layer + '.jsonp', function(tilejson) {
   if (!m) {
     m = new MM.Map('mymap', new wax.mm.connector(tilejson)); 
   
     interaction = wax.mm.interaction()
        .map(m)
        .tilejson(tilejson)
        .on(wax.tooltip().animate(true).parent(m.parent).events());
      
     wax.mm.zoomer(m).appendTo(m.parent);
   
     m.setCenterZoom({ lat: 0, lon: 0}, 3);
   
     legend = wax.mm.legend(m,tilejson).appendTo(m.parent);

    } else {
     $('.wax-legend').remove();
     m.setLayerAt(0, new wax.mm.connector(tilejson));
     interaction.tilejson(tilejson);
     legend.content(tilejson.legend || '');
     wax.mm.legend(m, tilejson).appendTo(m.parent);
     attribution.content(tilejson.attribution || '');
    }
  });
}

$(document).ready(function() {
  buildMap(layer);
	
  $('ul.layerswitcher a').click(function (e) {
    e.preventDefault();
    $('ul.layerswitcher a').removeClass('active');
    $(this).addClass('active');
    layer = $(this).attr('data-layer');

// DON'T FORGET TO BUILD THE MAP!!!!
    buildMap(layer); 
    
  });
});

$(document).ready(function() {
$('a.pull-tab').click(function (e) {
       e.preventDefault();
       $('a.pull-tab').removeClass('active');
       $('.about-data').addClass('active');
       $('a.closed').addClass('active');
   });

$('a.closed').click(function (e) {
       e.preventDefault();
       $('.about-data').removeClass('active');
       $('a.closed').removeClass('active');
       $('a.pull-tab').addClass('active');
   });       
});
