//framework imports
const express = require('express');
const handlebars = require('express-handlebars').create();

//application improts
const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books');


//framework setup
const app = express();
const port = 3000;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//application setup
app.use('/', indexRouter);
app.use('/authors', authorsRouter);
app.use('/books', booksRouter);


app.use((_req, res) => {
  res.status(404);
  res.send("<h1>404 - please go away, i am not home!</h1>");
});

app.use((err, _req, res, _next) => {
  console.error(err.message);
  res.status(500);
  res.send("<h1>500 - Aaaahrg, why did you do this to me!</h1>");
})




app.listen(port, () => console.log(
`Express started on http://localhost:${port}
press Ctrl-C to terminate.`));