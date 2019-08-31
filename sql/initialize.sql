DROP TABLE IF EXISTS members, locations, usersCredentials;

CREATE TABLE members (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  phone VARCHAR(10),
  picture VARCHAR(50),
  PRIMARY KEY (id)
);
CREATE TABLE locations (
  id INT NOT NULL AUTO_INCREMENT,
  member_id INT NOT NULL,
  location_pic VARCHAR(50),
  zipcode VARCHAR(9),
  PRIMARY KEY (id)
);
CREATE TABLE usersCredentials (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(25),
  password VARCHAR(100),
  PRIMARY KEY (id),
  UNIQUE KEY (username)
);
INSERT INTO members
	(first_name, last_name)
VALUES 
  ("James","Butt"),
  ("Josephine","Darakjy"),
  ("Art","Venere"),
  ("Lenna","Paprocki"),
  ("Donette","Foller"),
  ("Simona","Morasca"),
  ("Mitsue","Tollner"),
  ("Leota","Dilliard"),
  ("Sage","Wieser"),
  ("Kris","Marrier")
