
CREATE DATABASE SaltLickDB;

USE SaltLickDB;

CREATE TABLE Top_Level_Category(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(60) NOT NULL
);

CREATE TABLE Food_Item(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10) NOT NULL,
    serving INT NULL,
    measurement VARCHAR(60) NULL,
    available TINYINT(1) NOT NULL,
    top_category INT,
    FOREIGN KEY (top_category) REFERENCES Top_Level_Category(id)
);



INSERT INTO Top_Level_Category (id, category_name)
VALUES (default, "Salt Lick Plates"),
       (default, "Small Plates"),
       (default, "Sandwiches"),
       (default, "Meat By The LB."),
       (default, "Beverages"),
       (default, "Sides"),
       (default, "Desserts"),
       (default, "Family Size Desserts"),
       (default, "To-Go BBQ Sauce");

INSERT INTO Food_Item (product_name, price, serving, measurement, available, top_category)
VALUES ("Brisket", 18.95,default,default,true,1),
	   ("Pork Ribs", 16.95,default,default,true,1),
	   ("Bison Ribs", 25.95, 2,"Ribs",true,1),
       ("Beef Ribs", 25.95, 2,"Ribs",true,1);
       
       