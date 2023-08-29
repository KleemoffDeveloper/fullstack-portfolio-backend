DROP DATABASE IF EXISTS characters_dev;
CREATE DATABASE characters_dev;

\c characters_dev;

-- Character age is the age of the character during their first comicbook appearance

DROP TABLE IF EXISTS characters

CREATE TABLE characters (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 age INTEGER,
 images TEXT[],
 first_appearance TEXT, -- first_appearance means the comic issue
 description TEXT
 );

 DROP TABLE IF EXISTS image_gallery

CREATE TABLE image_gallery (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 image_url TEXT NOT NULL
 );