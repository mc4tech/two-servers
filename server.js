// Here we require/import the HTTP module
var http = require("http");

//these are the ports the server listens to 
var PORTONE = 7000;
var PORTTWO = 7500;

// Here we create a generic function to handle requests and responses for serverOne
function handleRequestOne(request, response) {
	console.log("Good job!");
  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Good job!!! Path Hit: " + request.url);
}

// Here we create a generic function to handle requests and responses for serverTwo
function handleRequestTwo(request, response) {
	console.log("Catch up sucka!");
  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Catch up sucka! Path Hit: " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Here we start our serverOne so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTONE);

});

// Here we start our serverTwo so that it can begin listening to client requests.
serverTwo.listen(PORTTWO, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTTWO);

});

