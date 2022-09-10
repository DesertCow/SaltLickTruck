
DROP DATABASE IF EXISTS SaltLickDB;
CREATE DATABASE SaltLickDB;

USE SaltLickDB;

CREATE TABLE Top_Level_Category(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(60) NOT NULL
);

CREATE TABLE Food_Item(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NULL,
    price DECIMAL NULL,
    serving INT NOT NULL,
    measurement INT NOT NULL,
    available TINYINT(1) NOT NULL,
    top_category INT,
    FOREIGN KEY (top_category) REFERENCES Top_Level_Category(id)
);
