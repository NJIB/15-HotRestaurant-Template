const htmlRoutes = require('./server/routes/htmlRoutes');
const apiRoutes = require('./server/routes/apiRoutes');

// Dependencies
// =============================================================
const express = require('express');
// const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
htmlRoutes(app);
apiRoutes(app);
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

<<<<<<< HEAD
// Routes
// =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'view.html'));
// });

// app.get('/add', function(req, res) {
//   res.sendFile(path.join(__dirname, 'add.html'));
// });

// Displays all customers
app.get('/api/tablesBooked', function(req, res) {
  return res.json(tablesBooked);
});

// // Displays a single character, or returns false
// app.get('/api/tablesBooked/:character', function(req, res) {
//   const chosen = req.params.character;

//   console.log(chosen);

//   for (let i = 0; i < tablesBooked.length; i++) {
//     if (chosen === tablesBooked[i].routeName) {
//       return res.json(tablesBooked[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New tablesBooked - takes in JSON input
// app.post('/api/tablesBooked', function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   const newCustomer = req.body;

//   console.log(newCustomer);

//   tablesBooked.push(newCustomer);

//   res.json(newCustomer);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
