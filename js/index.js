$("#os-phrases > h2")
    .css('opacity', 1).lettering( 'words' )
    .children( "span" ).lettering()
    .children( "span" ).lettering();

  function revealLogo() {     
    $("#os-phrases").remove();
    $('head').append('<link rel="stylesheet" href="css/seq1/style.css">');
    $('body').append('<h1 style = "color:white;font-size:5em">EFFERVESCENCE</h1>');
    // $(".page").children(".panel").fadeIn(1000);
 }

 setTimeout(revealLogo,10000);