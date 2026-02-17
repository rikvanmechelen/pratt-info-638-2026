const express = require("express");

const router = express.Router();

router.get('/', (_req, res) => {
  res.render('index', {title: "BookedIn"})
});

router.get('/about_us', (_req, res) => {
  res.render('about_us', {title: "BookedIn"})
});

module.exports = router;