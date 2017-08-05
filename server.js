// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Reservation Data
//===============================================================

var reservationList = [{
  customerName: "Yoda",
  phoneNumber: "847-222-2222",
  customerEmail: "Yoda@gmail.com",
  customerID: "123"
}, {
  customerName: "Bex",
  phoneNumber: "847-222-2222",
  customerEmail: "Yoda@gmail.com",
  customerID: "100"
}
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tableview.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "tablereservation.html"));
});

// Get all reservations for api
app.get("/api/reservationList", function(req, res) {
  res.json(reservationList);
});

// Create New Reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  var newReservation = req.body;

 console.log(newReservation);

  reservationList.push(newReservation);

  res.json(newReservation);

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
