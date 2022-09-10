
USE SaltLickDB;

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
       ("Beef Ribs", 25.95, 2,"Ribs",true,1),
       ("Turkey", 16.95, default,default,true,1),
       ("Sausage", 12.95, default,default,true,1),
       ("Chicken", 14.95, 0.5,"Chicken",true,1),
       ("Pulled Pork", 14.95, 2,default,true,1),
       ("Vegetable", 9.95, 2,default,true,1),
       ("Thurman's Choice", 19.95, 2,default,true,1);