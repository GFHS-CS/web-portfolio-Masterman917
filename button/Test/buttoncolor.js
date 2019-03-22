//
//
//var button = document.getElementById("clickme"),
//  count = 0;
//button.onclick = function() {
//  count += count;
//  button.innerHTML = "Click me: " + count;
//};

var button = document.getElementById("clickme"),
	count = 1;
button.onclick = function() {
	count += count;
	button.innerHTML = "Click me: " + count;
};
