const express = require('express');
const router = express.Router();

const authors = [
    "James S. A. Corey", "Craig Alanson", "Cixin Liu"
  ]

router.get('/', function(req, res, next) {

  res.render('authors/index', { title: 'BookedIn || Authors', authors: authors });
});

module.exports = router;

