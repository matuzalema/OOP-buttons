
function Button(text) {
	this.text = text;
}

Button.prototype.create = function() {
	var self = this;
	this.element = document.createElement('button');
	this.element.innerText = this.text;
	this.element.addEventListener('click', function() {
		alert(self.text);
		});
	this.element.classList.add('btn-primary');
	document.body.appendChild(this.element);
};

var btn1 = new Button('Hello!');
btn1.create();
var bt2 = new Button('Primary');
bt2.create();
var bt3 = new Button('Click');
bt3.create();