var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "T1lLwel1Ma1c",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryProducts();
  //userPrompt(); 
  
});

function queryProducts() {
  var query = connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    for(var i = 0; i < res.length; i++) {
      console.log("Item ID: " + res[i].item_id + "    Product name: " + res[i].product_name + "    Department name: " + res[i].department_name + "    Price: " + res[i].price + "    Stock quantity: " + res[i].stock_quantity + "\n---------------------------------------------------------------------------------------------------\n");
    }
    inquirer.prompt([
  {
    name: "item_id",
    message: "What is the ID of the product you would like to buy?"
  }, {
    name: "units",
    message: "How many units would you like to buy?"
  }
]).then(function(answers) {
  console.log("Do you want to buy " + answers.units + " of " +answers.item_id + "?");
});
  });