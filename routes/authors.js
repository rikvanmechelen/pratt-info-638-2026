const express = require('express');

const Author = require('../models/author');

const router = express.Router();

router.get('/', async function(req, res, next) {
  let authors = await Author.all();
  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});

router.get('/form', function(req, res, next) {
  res.render('authors/form', { title: 'BookedIn || Authors' });
});

router.post('/upsert', async function(req, res, next) {
  console.log(JSON.stringify(req.body));
  await Author.upsert(req.body);
  let createdOrupdated = req.body.id ? 'updated' : 'created';
  req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the author has been ${createdOrupdated}!`,
  };
  res.redirect(303, "/authors");
});

router.get('/edit', async function(req, res, next) {
  let authorId = req.query.id
  let author = await Author.get(authorId);
  res.render('authors/form', { title: 'BookedIn || Authors', author: author });
});

module.exports = router;

