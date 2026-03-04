const express = require('express');

const Book = require('../models/book');
const Author = require('../models/author');

const router = express.Router();

router.get('/', function(req, res, next) {
  const books = Book.all
  res.render('books/index', { title: 'BookedIn || books', books: books });
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || Books', authors: Author.all  });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Book.upsert(req.body);
  res.redirect(303, '/books')
});

router.get('/edit', async (req, res, next) => {
  let bookIdx = req.query.id;
  let book = Book.get(bookIdx);
  res.render('books/form', { title: 'BookedIn || Books', book: book, bookIdx: bookIdx, authors: Author.all  });
});

router.get('/show/:id', async (req, res, next) => {
  let bookIdx = req.params.id;
  let book = Book.get(bookIdx);
  let author = Author.get(book.authorId);
  let authors = []
  if (book.authorIds) {
    authors = book.authorIds.map(Author.get)
  }
  res.render('books/show', { title: 'BookedIn || Book', book: book, bookIdx: bookIdx, authors: authors });
});

module.exports = router;

