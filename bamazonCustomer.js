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
  });

var userPrompt = function() {
  inquirer.prompt({
    type: 'input',
    name: 'item_id',
    message: 'What is the ID of the item you would like to buy?',
  }).then(function(answer) {
    console.log(answer);
  })
}
  // logs the actual query being run
  console.log(query.sql);
        connection.end();

}