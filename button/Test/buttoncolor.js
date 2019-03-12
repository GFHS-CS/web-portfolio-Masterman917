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

var h2 = document.getElementById("starter"),
	count = 1;
h2.onclick="Myfunction()" {
	count += 1000;
	h2.innerHTML = count;
};
