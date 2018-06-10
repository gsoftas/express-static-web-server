// Define the requirements
const express = require('express');
const path = require('path');
const app = express();

// Define the port the web server will listen to
app.set('port', 8080);

// Use Express to serve the static assets
app.use(express.static(path.join(__dirname, '../static')));

// Start the server 
const server = app.listen(app.get('port'), function() {
	console.log('The server is running on: ' + app.get('port'));
});
