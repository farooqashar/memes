
var input = window.prompt("What meme topic do you want to see?");

for (i = 0; i < 5; i++) {
var request = new XMLHttpRequest();


//var input1 = alert(input))
request.open('GET', "https://api.giphy.com/v1/gifs/random?api_key=X1eRcC1LAcPrE0DP7luuizxZt5JW1Z3j&tag=" +input+  "&rating=g");

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	var originalUrl = parsedData.data.images.original.url;
	console.log(originalUrl);

	//Create gif on page
	var gif = document.createElement('img');
	gif.setAttribute('src', originalUrl);
	document.body.appendChild(gif);
};

request.send();
}
