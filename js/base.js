Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};
Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
});