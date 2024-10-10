CREATE DATABASE mentorsdb;

CREATE TABLE mentors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    school VARCHAR(100),
    bio text,
    job VARCHAR(100),
);
