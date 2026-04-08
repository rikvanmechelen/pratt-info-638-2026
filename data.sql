\c my_first_db

insert into authors (first_name, last_name) values ('James', 'S. A. Corey');
insert into authors (first_name, last_name) values ('Craig', 'Alanson');
insert into authors (first_name, last_name) values ('Cixin', 'Liu');

insert into genres (name) values ('Sience Fiction');
insert into genres (name) values ('Fantasy');
insert into genres (name) values ('Romance');
insert into genres (name) values ('Mystery');
insert into genres (name) values ('Horror');


insert into books (title, publishing_year, genre_id) values ('Leviathan Wakes', 2011, (select id from genres where name = 'Sience Fiction'));
insert into books (title, publishing_year, genre_id) values ('Caliban’s War', 2012, (select id from genres where name = 'Sience Fiction'));
insert into books (title, publishing_year, genre_id) values ('Abaddon’s Gate', 2013, (select id from genres where name = 'Sience Fiction'));

insert into books (title, publishing_year, genre_id) values ('Columbus Day', 2016, (select id from genres where name = 'Sience Fiction'));
insert into books (title, publishing_year, genre_id) values ('SpecOps', 2016, (select id from genres where name = 'Sience Fiction'));
insert into books (title, publishing_year, genre_id) values ('Paradise', 2016, (select id from genres where name = 'Sience Fiction'));

insert into books (title, publishing_year, genre_id) values ('The Three-Body Problem', 2006, (select id from genres where name = 'Sience Fiction'));

INSERT into authors_books (author_id, book_id) values (1, 1);
INSERT into authors_books (author_id, book_id) values (1, 2);
INSERT into authors_books (author_id, book_id) values (1, 3);

INSERT into authors_books (author_id, book_id) values (2, 4);
INSERT into authors_books (author_id, book_id) values (2, 5);
INSERT into authors_books (author_id, book_id) values (2, 6);

INSERT into authors_books (author_id, book_id) values (3, 7);