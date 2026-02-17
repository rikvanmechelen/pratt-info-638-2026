const express = require('express');
const router = express.Router();

const books = [
     "Leviathan Wakes", "Columbus Day", "The Three-Body Problem"
  ]

router.get('/', function(req, res, next) {

  res.render('books/index', { title: 'BookedIn || books', books: books });
});

module.exports = router;

