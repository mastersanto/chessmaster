var chessmaster = chessmaster || {};
chessmaster.movement = (function($) {
	var pieces = {
		pawn     : 0,
		rook     : 1,
		knight   : 2,
		bishop   : 3,
		queen    : 4,
		king     : 5,
		UNDEFINED: -1
	},
	colors = {
		black    : 0,
		white    : 1,
		UNDEFINED: -1
	},
	mapBoard = function($board) {
		return 0;
	},
	identifyPiece = function($piece) {
		if ($piece.hasClass('pawn'))        return pieces.pawn;
		else if ($piece.hasClass('tower'))  return pieces.rook;
		else if ($piece.hasClass('knight')) return pieces.knight;
		else if ($piece.hasClass('bishop')) return pieces.bishop;
		else if ($piece.hasClass('queen'))  return pieces.queen;
		else if ($piece.hasClass('king'))   return pieces.king;
		return pieces.UNDEFINED;
	},
	identifyColor = function() {
		if ($piece.hasClass('black'))      return colors.black;
		else if ($piece.hasClass('white')) return colors.white;
		return colors.UNDEFINED;
	},
	pawnMovements = function() {

	};
	return {
		possibleMovements: function($piece, $position) {
			var piece = identifyColor($piece), color = identifyColor($piece);
			if (piece == pieces.pawn) {
				//return 
			}
			return [];
		}
	};
})(jQuery);