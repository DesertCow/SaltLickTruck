
DROP DATABASE IF EXISTS SaltLickDB;
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
