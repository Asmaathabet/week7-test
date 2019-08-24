BEGIN;
DROP TABLE IF EXISTS cities CASCADE; 
CREATE TABLE cities (
id SERIAL PRIMARY KEY,
name varchar(255),
city varchar(255)
);

INSERT INTO cities(name,city) VALUES ('asmaa','Gaza'),('Ahmed','kanyounies');

COMMIT;