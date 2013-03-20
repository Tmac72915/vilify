/**
 * Handles sidebar functionailty
 */

(function( window ) {

var Game = window.Game,
	document = window.document,
	
	$sidebar = $( "#sidebar" )
	
$( "#lab" ).children().eq( 0 ).css( "background", "grey" );

$( "#inventory" ).children().eq( 0 ).children().eq( 0 ).css( "background", "grey url( image_url_here )" );
$( "#inventory" ).children().eq( 0 ).children().eq( 1 ).css( "background", "grey url( image_url_here )" );

})( window );