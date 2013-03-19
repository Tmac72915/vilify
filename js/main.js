/**
 * Vilify main.js file
 */

(function( window ) {

var Game = window.Game,
	settings = Game.settings,
	canvas = Game.canvas = document.getElementById( "canvas" ),
	ctx = Game.ctx = canvas.getContext( "2d" );

settings.width = canvas.width;
settings.height = canvas.height;

// Fetch object data
Game.assetManager.add( "objects.json", new Game.Asset( "json", "game_data/objects.json" ) );

// Fetch map data
Game.assetManager.add( "maps.json", new Game.Asset( "json", "game_data/maps.json" ) );

// Fetch tile sprite sheet data
Game.assetManager.add( "tiles.json", new Game.Asset( "json", "images/tiles.json" ) );

// Fetch tower sprite sheet data
Game.assetManager.add( "towers.json", new Game.Asset( "json", "images/towers.json" ) );

// Add files to asset manager
Game.assetManager.add( "Tile Spritesheet", new Game.Asset( "image", "images/tiles.png" ) );
Game.assetManager.add( "Tower Spritesheet", new Game.Asset( "image", "images/towers.png" ) );

/**
 * Updates the game state
 */
Game.update = function() {
	for ( var i = 0; i < Game.entities.length; i++ ) {
		Game.entities[i].update();
	}
};

/**
 * Draws the current game state
 */
Game.draw = function() {
	// Clear ctx so we can draw over it
	ctx.clearRect( 0, 0, ctx.width, ctx.height );

	// Draw map
	settings.map.draw();
	
	// Draw entities
	for ( var i = 0; i < Game.entities.length; i++ ) {
		Game.entities[i].draw( ctx );
	}
};


// Load images and start game when done
Game.assetManager.load( function() {
	settings.objectData = Game.assets["objects.json"].elem;
	settings.mapData = Game.assets["maps.json"].elem;
	settings.tileData = Game.assets["tiles.json"].elem;
	settings.towerData = Game.assets["towers.json"].elem;

	settings.map = new Game.Map( settings.mapData.map1.mapArray );
	settings.map.waves = settings.mapData.map1.waves;

	// Create starting entities
	Array.prototype.push.apply( Game.entities, [
		new Game.Tower( "Basic Tower", { x: 64 * 0 + 32, y: 64 * 1 + 32, width: 64, height: 64 } ),
		new Game.Tower( "Laser Tower", { x: 64 * 1 + 32, y: 64 * 1 + 32, width: 64, height: 64 } ),
		new Game.Tower( "Dust Tower", { x: 64 * 2 + 32, y: 64 * 1 + 32, width: 64, height: 64 } ),
		new Game.Tower( "Flame Tower", { x: 64 * 3 + 32, y: 64 * 1 + 32, width: 64, height: 64 } ),
		new Game.Tower( "Curse Tower", { x: 64 * 4 + 32, y: 64 * 1 + 32, width: 64, height: 64 } ),
		new Game.Tower( "Poison Tower", { x: 64 * 5 + 32, y: 64 * 1 + 32, width: 64, height: 64 } ),
		new Game.Tower( "Lightning Tower", { x: 64 * 6 + 32, y: 64 * 1 + 32, width: 64, height: 64 } ),
		new Game.Tower( "Ice Tower", { x: 64 * 7 + 32, y: 64 * 1 + 32, width: 64, height: 64 } )
	] );

	// Start the engine
	Game.start();
});

})( window );
