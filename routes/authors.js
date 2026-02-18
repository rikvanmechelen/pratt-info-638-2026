const express = require('express');

const Author = require('../models/author');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('authors/index', { title: 'BookedIn || Authors', authors: Author.all });
});

router.get('/form', function(req, res, next) {
  res.render('authors/form', { title: 'BookedIn || Authors' });
});

router.post('/create', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  Author.add(req.body);
  res.redirect(303, "/authors");
});

module.exports = router;

