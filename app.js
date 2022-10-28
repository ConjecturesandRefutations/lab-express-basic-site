// Require Express
const express = require('express');
 
// Express server handling requests and responses
const app = express();
 
// Make everything inside of public/ available
app.use(express.static(__dirname + '/public'));;
 
//Making stylesheet available
app.use("/public/stylesheet/styles.css",express.static(__dirname + "/public/stylesheet/styles.css"));

// Route to Homepage:
app.get('/home.html', (req, res) => res.sendFile(__dirname + '/views/home.html'));

//Route to Aboutpage
app.get('/about.html', (req, res) => res.sendFile(__dirname + '/views/about.html'));

// Route to Works Page:
app.get('/works.html', (req, res) => res.sendFile(__dirname + '/views/works.html'));

// Route to Photo Gallery Page:
app.get('/gallery.html', (req, res) => res.sendFile(__dirname + '/views/gallery.html'));
 
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
