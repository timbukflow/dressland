$(document).ready(function(){


$('#slider').cycle({ 
    fx:      'fade',  //scrollHorz  fade
	startingSlide: 1,
auto: false,
     speedIn:  500, 
	    speedOut: 500, 
	 	sync:     0, 
	    delay:  0,


	pager:  '#subnav', 
	    pagerAnchorBuilder: function(idx, slide) { 
	        return '#subnav div:eq(' + idx + ') a'; 
	    }
});

$('#slider_firma').cycle({ 
    fx:      'fade',  //scrollHorz  fade
		auto: false,
     speedIn:  500, 
	    speedOut: 500, 
	 	sync:     0, 
	    delay:  0,

	pager:  '#subnav', 
	    pagerAnchorBuilder: function(idx, slide) { 
	        return '#subnav div:eq(' + idx + ') a'; 
	    }
});


$('.subnavpunkt').hover(
	function () { 
 	$(this).stop().fadeTo('fast', 0.5);
 },
function () { 
	$(this).stop().fadeTo('slow', 1.0);
 });

$('.subnavpunkt').click(function() {
 $('#slider').cycle('pause');
});


$('.subnavpunkt').click(function() {
 $('#slider_firma').cycle('pause');
});

$('header').fadeTo('fast', 0.5);

$('header').hover(
	function () { 
 	$(this).stop().fadeTo('fast', 1.0);
 },
function () { 
	$(this).stop().fadeTo('slow', 0.5);
 });

$('#logo_dressland').hover(
	function () { 
 	$(this).stop().fadeTo('fast', 0.5);
 },
function () { 
	$(this).stop().fadeTo('slow', 1.0);
 });


$('#LanguageChooser').hover(
	function () { 
 	$(this).stop().animate({left: '-130px'},{duration: '500',easing: 'easeOutCirc'});
	
 },
	function () { 
	$(this).stop().animate({left: '-237px'},{duration: '500',easing: 'easeOutCirc'});
 });


$('#Aktion-button').hover(
	function () { 
 	$(this).stop().animate({left: '0px'},{duration: '500',easing: 'easeOutCirc'});	
 },
	function () { 
	$(this).stop().animate({left: '-51px'},{duration: '500',easing: 'easeOutCirc'});
 });

$('#facebook-button').hover(
	function () { 
 	$(this).stop().animate({left: '0px'},{duration: '500',easing: 'easeOutCirc'});	
 },
	function () { 
	$(this).stop().animate({left: '-74px'},{duration: '500',easing: 'easeOutCirc'});
 });


// Regenschirm-Aktion Bildergalerie

 $(".aktion-bilder-galerie").mouseenter(function(){
	$(".aktion-information", this).stop(true,true).animate({opacity:'0.8',bottom:'0px'},{duration:'slow'});
	$(".aktion-p", this).stop(true,true).animate({opacity:1},{duration:'slow'});	 
 });

$(".aktion-bilder-galerie").mouseleave(function(){
	$(".aktion-information", this).stop(true,true).animate({opacity:'0',bottom:'-250px'},{duration:'slow'});
	$(".aktion-p", this).stop(true,true).animate({opacity:0},{duration: 'slow'});
 });


// Regenschirm-Aktion Open / Close

$('.main-aktion-bild-animation').hover(
	function(){ 
 	$('.main-aktion-bild').hide();
	$('.main-aktion-bild-open').show();
 },
	function(){ 
 	$('.main-aktion-bild').show();
	$('.main-aktion-bild-open').hide();
});
    

});

















