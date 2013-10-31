var express = require('express') // requiring express module
  , fib = require('./fib') // require Fibonacci script
  , app = express(); // creating express application

app.use(express.bodyParser()); // including bodyParser to parsed data passed in POST-requests body

app.get('/', function (req, res) {
  console.log(req.query);
  if (req.query.question === 'How are you?') {
    res.send('Fine!');
  } else {
    res.send('Hello!');
  }
});

// two next handlers explains difference between POST and GET requests

app.get('/fib/', function (req, res) {
  console.log(req.query);
  var sequence = fib(parseInt(req.query.fibCount) || 5);
  console.log(sequence);
  res.json(sequence);
});

app.post('/fib/', function (req, res) {
  console.log(req.body);
  var sequence = fib(parseInt(req.body.fibCount) || 5);
  console.log(sequence);
  res.json(sequence);
});

app.listen(8000); // runs our application and starts waiting for requests on port 8000