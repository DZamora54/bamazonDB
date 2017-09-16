DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lamp", "furniture", 39.99, 50),
("table", "furniture", 69.99, 32),
("bread", "food", 3.5, 287),
("apples", "food", 0.33, 845),
("tire", "automotive", 79.57, 18),
("firetruck", "toy", 7.28, 41),
("basketball", "sports", 42.11, 25),
("microwave", "appliances", 562.54, 2),
("rake", "garden", 12.85, 17),
("skillet", "kitchen", 15.64, 63);