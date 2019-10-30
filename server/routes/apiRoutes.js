module.exports = function(app);

const tablesBooked = require('../../data/tableData');


// Displays all customers
app.get('/api/tablesBooked', function(req, res) {
  return res.json(tablesBooked);
});


// Create New tablesBooked - takes in JSON input
app.post('/api/tablesBooked', function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newCustomer = req.body;
  console.log(newCustomer);
  tablesBooked.push(newCustomer);
  res.sendStatus(201);
});
