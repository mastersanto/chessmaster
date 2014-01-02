var chessmaster = chessmaster || {};
chessmaster.movement = (function($) {
	var
	identifyPiece = function($piece) {
		if ($piece.hasClass('pawn'))        return chessmaster.pieces.pawn;
		else if ($piece.hasClass('tower'))  return chessmaster.pieces.rook;
		else if ($piece.hasClass('knight')) return chessmaster.pieces.knight;
		else if ($piece.hasClass('bishop')) return chessmaster.pieces.bishop;
		else if ($piece.hasClass('queen'))  return chessmaster.pieces.queen;
		else if ($piece.hasClass('king'))   return chessmaster.pieces.king;
		return pieces.UNDEFINED;
	},
	identifyColor = function() {
		if ($piece.hasClass('black'))      return chessmaster.colors.black;
		else if ($piece.hasClass('white')) return chessmaster.colors.white;
		return colors.UNDEFINED;
	};
	return {
	};
})(jQuery);