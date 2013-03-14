var start = new Date().getTime();


var map = mapbox.map('mymap');
var firstlayer  = mapbox.layer().id('danwood.russia');
    map.addLayer(mapbox.layer().id('danwood.att-background'));
    map.addLayer(firstlayer)
    map.ui.zoomer.add();
    map.centerzoom({
        lat: 48.110749,
        lon: -0
    }, 3);



$(document).ready(function() {

$('ul.layerswitcher a').click(function (e) {
  e.preventDefault();
  $('ul.layerswitcher a').removeClass('active');
  $(this).addClass('active');
  activeL = $(this).attr('data-layer');
  

  map.removeLayer(firstlayer);
  map.removeLayer()
  map.addLayer(mapbox.layer().id(activeL));
});



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







var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);
console.log(screen.height);
console.log(screen.width);