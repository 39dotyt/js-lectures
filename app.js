var express = require('express')
  , fib = require('./fib')
  , app = express();

app.use(express.bodyParser());

app.get('/', function (req, res) {
  console.log(req.query);
  if (req.query.question === 'How are you?') {
    res.send('Fine!');
  } else {
    res.send('Hello!');
  }
});

app.get('/fib/', function (req, res) {
  console.log(req.query); // fibCount
  var sequence = fib(parseInt(req.query.fibCount) || 5);
  console.log(sequence);
  res.json(sequence);
});

app.post('/fib/', function (req, res) {
  console.log(req.body); // fibCount
  var sequence = fib(parseInt(req.body.fibCount) || 5);
  console.log(sequence);
  res.json(sequence);
});

app.listen(8000);

//var fib = require('./fib');

//fib(5);

//var t = {
//  a: 3,
//  b: 32,
//  myName: 'Юрий',
//  sayHello: function () {
//    console.log('Hello!');
//  },
//  dob: {
//    month: 3,
//    year: 2013,
//    day: 12
//  }
//};
