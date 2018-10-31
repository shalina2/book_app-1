CREATE DATABASE books_app;
DROP TABLE IF EXISTS bookshelf;

CREATE TABLE bookshelf (
    id int,
    author varchar(255),
    title varchar(255),
    isbn varchar(255),
    image_url varchar(255),
    description varchar(255),
    bookshelf varchar(255)
)

INSERT INTO bookshelf VALUES (1,Daniela steel,love,1234567,https://d3by36x8sj6cra.cloudfront.net/assets/images/book/large/9780/7515/9780751542479.jpg,love story,1)