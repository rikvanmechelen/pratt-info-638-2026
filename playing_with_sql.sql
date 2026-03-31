drop database if exists my_first_db;

create database my_first_db;

\c my_first_db

create table authors (
  id serial primary key,
  first_name text,
  last_name text
);

CREATE TABLE genres (
  id serial primary key,
  name text
);

CREATE TABLE books (
  id serial primary key,
  title text,
  genre_id int,
  publishing_year int
);


insert into authors (first_name, last_name) values ('william', 'shakespeare');
insert into authors (first_name, last_name) values ('jane', 'austen');
insert into authors (first_name, last_name) values ('leo', 'tolstoy');
insert into authors (first_name, last_name) values ('virginia', 'woolf');
insert into authors (first_name, last_name) values ('James', 'S. A. Corey');
insert into authors (first_name, last_name) values ('Craig', 'Alanson');
insert into authors (first_name, last_name) values ('Cixin', 'Liu');
insert into authors (first_name, last_name) values ('John', 'Scalzi');

insert into genres (name) values ('Sience Fiction');
insert into genres (name) values ('Fantasy');
insert into genres (name) values ('Romance');
insert into genres (name) values ('Mystery');
insert into genres (name) values ('Horror');


insert into books (title, publishing_year, genre_id) values ('Leviathan Wakes', 2011, (select id from genres where name = 'Sience Fiction'));
insert into books (title, publishing_year, genre_id) values ('Caliban’s War', 2012, (select id from genres where name = 'Sience Fiction'));