var chessmaster = chessmaster || {};
chessmaster.board = (function($) {
	var board = [];
	/* Board will be initialized to the following 
       ----------------
     | R K B K Q B K R |
     | P P P P P P P P |
     | . . . . . . . . |
     | . . . . . . . . |
     | . . . . . . . . |
     | . . . . . . . . |
     | P P P P P P P P |
     | R K B K Q B K R |
       ----------------
	*/
	var init = function() {
		this.board = [{}, {}, {}, {}, {}, {}, {}, {},
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 0, 6),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 1, 6),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 2, 6),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 3, 6),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 4, 6),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 5, 6),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 6, 6),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 7, 6),
                      {}, {}, {}, {}, {}, {}, {}, {},
                      {}, {}, {}, {}, {}, {}, {}, {},
                      {}, {}, {}, {}, {}, {}, {}, {},
                      {}, {}, {}, {}, {}, {}, {}, {},
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 0, 1),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 1, 1),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 2, 1),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 3, 1),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 4, 1),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 5, 1),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 6, 1),
                      new chessmaster.pawn(chessmaster.colors.white, chessmaster.pieces.pawn, 7, 1),
                      {}, {}, {}, {}, {}, {}, {}, {}];
	};
	init($('.table').first());
	console.log(this.board);
})(jQuery);