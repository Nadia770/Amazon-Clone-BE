DROP DATABASE IF EXISTS amazon_clone_test;
DROP DATABASE IF EXISTS amazon_clone;

CREATE DATABASE amazon_clone_test;
CREATE DATABASE amazon_clone;

\c amazon_clone_test

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100),
  price INT,
  average_rating INT,
  product_description VARCHAR(400),
  product_url TEXT,
  in_stock BOOLEAN
);

CREATE TABLE users (
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(40),
  users_name VARCHAR(40),
  avatar_url TEXT,
  helpful_vote_count INT,
  email TEXT,
  country VARCHAR(40)
);

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  body TEXT,
  created_at TEXT,
  author TEXT,
  helpful_count INT,
  star_count TEXT,
  product_id INT REFERENCES products(product_id)
);

