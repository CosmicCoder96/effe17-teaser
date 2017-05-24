$("#os-phrases > h2")
    .css('opacity', 1).lettering( 'words' )
    .children( "span" ).lettering()
    .children( "span" ).lettering();

  function revealLogo() {
  	$("#os-phrases").fadeOut(1000);
    setTimeout(function(){$("#os-phrases").remove();
    	$('#fix').remove();
    	$('#letter-script').remove();
    $('head').append('<link id = "seq1Css" rel="stylesheet" href="css/seq1/style.css">');
$('body').append('<div class = "fader">  <button id ="lightsToggle" onclick=lightsOn()>Lights on/off</button><svg class="specialtext" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 750 200" preserveAspectRatio="xMidYMid meet" style="height:70%;width:70%"> <defs><filter id="texteffect"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur><feComponentTransfer><feFuncA type="linear" slope="1.5" intercept="0"></feFuncA></feComponentTransfer><feComposite result="outer" in2="SourceGraphic" operator="out"></feComposite><feGaussianBlur result="pre-inner" in="SourceGraphic" stdDeviation="2"></feGaussianBlur><feComposite in="SourceGraphic" in2="pre-inner" operator="out"></feComposite><feComponentTransfer result="inner"><feFuncA type="linear" slope="7.5" intercept="0"></feFuncA></feComponentTransfer><feMerge><feMergeNode in="outer"></feMergeNode><feMergeNode in="inner"></feMergeNode></feMerge><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter><linearGradient id="gradient" color-interpolation="sRGB" spreadMethod="repeat" x1="0" x2="0.5" y1="0.02" y2="0"><stop stop-color="#ef50d5" offset="0%"></stop><stop stop-color="#15f0f2" offset="33%"></stop><stop stop-color="#f2a415" offset="66%"></stop><stop stop-color="#ef50d5" offset="100%"></stop></linearGradient><mask id="textMask"><g filter="url(#texteffect)"><rect x="10" y="50" width="730" height="10" fill="#fff"></rect><rect x="10" y="170" width="830" height="10" fill="#fff"></rect><text id="text" x="375" y="150" text-anchor="middle" fill="#fff">Effervescence</text></g></mask></defs><rect id="fill" mask="url(#textMask)" fill="url(#gradient)" x="0" y="0" width="4000" height="200"></rect></svg></div>');
$('.fader').fadeIn(1000);
},10);
    
    // $(".page").children(".panel").fadeIn(1000);
 }
function lightsOn() {
	$('.fader').fadeOut(1000);
	setTimeout(function() {
	$('.fader').remove();

	$('head').remove('#seq1Css'); 
	$('head').append( '<link id = "seq2Css" rel="stylesheet" href="css/seq2/style.css">');
    	 $('body').removeAttr("style");

	$('.effe').append('  <h1 class = "fader" style = "color:white;top:30%;font-size:90px;font-family:Righteous">EFFERVESCENCE</h1>');
	$('.fader').fadeIn(1000);
	},1000);

}

function lightsOut() {
	$('.fader').fadeOut(1000);
	setTimeout(function(){
		$('.fader').remove();
	$('head').remove('#seq2Css'); 
	$('head').append('<link id = "seq1Css" rel="stylesheet" href="css/seq1/style.css">');
	$('body').append('<div class = "fader"><svg class="specialtext" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 750 200" preserveAspectRatio="xMidYMid meet" style="height:70%;width:70%"> <defs><filter id="texteffect"><feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur><feComponentTransfer><feFuncA type="linear" slope="1.5" intercept="0"></feFuncA></feComponentTransfer><feComposite result="outer" in2="SourceGraphic" operator="out"></feComposite><feGaussianBlur result="pre-inner" in="SourceGraphic" stdDeviation="2"></feGaussianBlur><feComposite in="SourceGraphic" in2="pre-inner" operator="out"></feComposite><feComponentTransfer result="inner"><feFuncA type="linear" slope="7.5" intercept="0"></feFuncA></feComponentTransfer><feMerge><feMergeNode in="outer"></feMergeNode><feMergeNode in="inner"></feMergeNode></feMerge><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter><linearGradient id="gradient" color-interpolation="sRGB" spreadMethod="repeat" x1="0" x2="0.5" y1="0.02" y2="0"><stop stop-color="#ef50d5" offset="0%"></stop><stop stop-color="#15f0f2" offset="33%"></stop><stop stop-color="#f2a415" offset="66%"></stop><stop stop-color="#ef50d5" offset="100%"></stop></linearGradient><mask id="textMask"><g filter="url(#texteffect)"><rect x="10" y="50" width="730" height="10" fill="#fff"></rect><rect x="10" y="170" width="830" height="10" fill="#fff"></rect><text id="text" x="375" y="150" text-anchor="middle" fill="#fff">Effervescence</text></g></mask></defs><rect id="fill" mask="url(#textMask)" fill="url(#gradient)" x="0" y="0" width="4000" height="200"></rect></svg></div>');
	$('.fader').fadeIn(1000);
	},1000);
}
// setTimeout(revealLogo,14000);
$('#lightsToggle').click(function () {
	lightsOn();
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 6700;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
    	window.scrollTo(0, 0);
    	$('#os-phrases').hide();
    	$('body').css({"overflow":"hidden;",
    		"height":"100vh"
    });
    	$('html').removeClass("skrollr");
    	$('html').removeClass("skrollr-desktop");

    	 $('body').removeAttr("style");
    	revealLogo();
        //do stuff
    }
});