DROP DATABASE IF EXISTS amazon_clone_test;
DROP DATABASE IF EXISTS amazon_clone;

CREATE DATABASE amazon_clone_test;
CREATE DATABASE amazon_clone;

\c

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(40),
  average_rating INT,
  product_description VARCHAR(400),
  product_url VARCHAR(100),
  in_stock BOOLEAN,
);

CREATE TABLE users (
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(40),
  users_name VARCHAR(40),
  avatar_url VARCHAR(100),
  helpful_vote_count INT,
  email VARCHAR(40),
);

CREATE TABLE reviews (
  reviews_id SERIAL PRIMARY KEY,
  review_body VARCHAR(40),
  created_at VARCHAR(40),
  author VARCHAR(100),
  helpful_vote_count INT,
  star_count VARCHAR(40),
  product_id INT
);

