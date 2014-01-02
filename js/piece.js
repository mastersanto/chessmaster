var chessmaster = chessmaster || {};
chessmaster.pieces = {
	pawn     : 0,
	rook     : 1,
	knight   : 2,
	bishop   : 3,
	queen    : 4,
	king     : 5,
	UNDEFINED: -1
};
chessmaster.colors = {
	black    : 0,
	white    : 1,
	UNDEFINED: -1
};
chessmaster.piece = function(color, type) {
	this.color = color;
	this.type = type;
};
chessmaster.pawn = function(color, type, x, y) {
	this.color = color;
	this.type = type;
	this.x = x;
	this.y = y;
}
.inherits(chessmaster.piece)
.method('possibleMovements', function() {
	var movements = [];
	if (this.color == chessmaster.colors.black && y < 7 /* and no piece in front */) {
		movements.push({ x: this.x, y: y + 1});
	}
	return movements;
});