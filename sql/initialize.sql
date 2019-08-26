DROP TABLE IF EXISTS members;

CREATE TABLE members
(
  id INT NOT NULL
  AUTO_INCREMENT,
  username VARCHAR
  (50),
  email VARCHAR
  (50),
  phone VARCHAR
  (10),
  picture VARCHAR
  (50),
  PRIMARY KEY
  (id)
);
  CREATE TABLE locations
  (
    id INT NOT NULL
    AUTO_INCREMENT,
  member_id INT NOT NULL,
  location_pic VARCHAR
    (50),
  zipcode VARCHAR
    (9),
  PRIMARY KEY
    (id)
);