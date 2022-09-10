
USE SaltLickDB;

-- Main Categories
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

-- Salt Lick Plates (p1)
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

-- Salt Lick Plates (p2)
INSERT INTO Food_Item (product_name, price, serving, measurement, available, top_category)
VALUES ("Brisket & Pork Ribs", 17.95,default,default,true,1),
	     ("Brisket & Sausage", 17.95,default,default,true,1),
	     ("Brisket & Turkey", 17.95, default,default,true,1),
       ("Pulled Pork & Brisket", 17.95, default,default,true,1),
       ("Pulled Pork Combo", 16.95, default,default,true,1),
       ("Pork Ribs Combo", 16.95, default,default,true,1),
       ("Sausge & Turkey", 16.95, default,default,true,1),
       ("Brisket & Bison Rib", 25.95, default,default,true,1),
       ("Bison & Beef Ribs", 25.95, default,default,true,1),
       ("Brisket & Beef Ribs", 25.95, default,default,true,1);

-- Small Plates
INSERT INTO Food_Item (product_name, price, serving, measurement, available, top_category)
VALUES ("Brisket", 10.95,default,default,true,2),
	     ("Pork Ribs", 9.95,default,default,true,2),
	     ("Sausge", 8.95, default,default,true,2),
       ("Pulled Pork", 9.95, default,default,true,2),
       ("Turkey", 9.95, default,default,true,2),
       ("Combo", 10.95, default,default,true,2);

-- Sandwiches
INSERT INTO Food_Item (product_name, price, serving, measurement, available, top_category)
VALUES ("Sliced or Chopped Beef", 13.95,default,default,true,3),
	     ("Pulled Pork", 11.95,default,default,true,3),
	     ("Sausge", 10.95, default,default,true,3),
       ("Turkey", 13.95, default,default,true,3),
       ("Marino's Triple Chop", 13.95, default,default,true,3),
       ("Make It A Plate", 2.00, default,default,true,3);

-- Meat By The LB.
INSERT INTO Food_Item (product_name, price, serving, measurement, available, top_category)
VALUES ("1/2 LB Brisket", 13.95,default,default,true,4),
	     ("1/2 LB Pork Ribs", 11.95,default,default,true,4),
	     ("1/2 LB Sausge", 10.95, default,default,true,4),
       ("1/2 LB Turkey", 13.95, default,default,true,4),
       ("1/2 LB Chicken", 13.95, default,default,true,4),
       ("1/2 LB Pulled Pork", 9.95, default,default,true,4),
       ("Bison Ribs", 2.00, "2","Ribs",true,4),
       ("Beef Ribs", 2.00, "2","Ribs",true,4);