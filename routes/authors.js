const express = require('express');

const Author = require('../models/author');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('authors/index', { title: 'BookedIn || Authors', authors: Author.all });
});

router.get('/form', function(req, res, next) {
  res.render('authors/form', { title: 'BookedIn || Authors' });
});

router.post('/upsert', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  Author.upsert(req.body);
  res.redirect(303, "/authors");
});

router.get('/edit', function(req, res, next) {
  let authorIdx = req.query.id
  let author = Author.get(authorIdx);
  res.render('authors/form', { title: 'BookedIn || Authors', author: author, authorIdx: authorIdx });
});

module.exports = router;

