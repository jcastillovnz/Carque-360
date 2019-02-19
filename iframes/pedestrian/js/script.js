

$( window ).on( "load", function() {

  document.getElementById("loader").style.display = "none";

});


$(document).ready(function(){

var $threeSixty = $('.threesixty');
$threeSixty.threeSixty({
dragDirection: 'horizontal',
useKeys: true,
draggable: true,
});







var interval;

$('#control-play').click(function(e){
document.getElementById("control-pause").style.display = "block";	
document.getElementById("control-play").style.display = "none";
interval = setInterval(play, 200);


function play() {

$threeSixty.nextFrame();
}

});


$('#control-pause').click(function(e){
document.getElementById("control-pause").style.display = "none";	
document.getElementById("control-play").style.display = "block";
clearInterval(interval);

});










$('.next').click(function(){
$threeSixty.nextFrame();


});

$('.prev').click(function(){
$threeSixty.prevFrame();
});


$threeSixty.on('down', function(){
$('.ui, h1, h2, .label, .examples').stop().animate({opacity:0}, 300);
});



 $threeSixty.on('up', function(){
 $('.ui, h1, h2, .label, .examples').stop().animate({opacity:1}, 500);
});



$('#control-zoom-in').on('click', function(e) {
changeZoom(10, e);




 });
$('#control-zoom-out').on('click', function(e) {
  changeZoom(-10 , e);
 });



 function changeZoom(amount, e) {
if (currheight === 600  ) return false;
  else {


var currheight =  $('.renders').css("height");

var newheight =  parseInt(currheight)  + amount;

 $('.renders').css("height" , newheight );
 $('.renders').css("z-index" , "0" );
 $('.masks').css("height" , newheight );
 $('.highlights').css("height" , newheight);


  }
  }



});




