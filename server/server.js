var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql/models.js');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json({ extended: true }));

app.get('/barlist', function (req, res) {
  db.selectThreeBars(function (error, result) {
  	if (error) {
  	  console.log('errored out /barlist', error);
  	}
  	console.log('This are the three bars', result);
  	res.send(result);
  });
});

app.get('/bar', function (req, res) {
  db.selectOneBar(2, function (error, result) {
  	if (error) {
  	  console.log('errored out /bar', error);
  	}
  	console.log('this is the bar', result);
  	res.send(result);
  })
})

app.get('/bartender', function (req, res) {
	db.selectOneBartender(2, 'Datum Bass', function (error, result) {
	  if (error) {
	  	console.log('errored out /bartender', error);
	  }
	  console.log('this is the bartender', result);
	  res.send(result);
	})
})

app.get('/bartenderlist', function (req, res) {
	db.selectAllBartendersFromBar(1, function (error, result) {
	  if (error) {
	  	console.log('errored out from /bartenderlist', error)
	  }
	  console.log('this is the bartender list', result);
	  res.send(result);
	})
})

// need to work on this more to find bug. possibly postman

// app.post('/barlist', function(req, res) {

//   // var body = [];
//   // req.on('data', function (chunk) {
//   //   body.push(chunk);
//   //   res.send();
//   // }).on('end', function() {
//   //   body = Buffer.concat(body).toString();

//   //   console.log('This the body ', body);
//   //   console.log('type of body ', typeof body);
//   //   console.log('type of parsed ', typeof JSON.parse(body));
//   // })
//   var body = '';
//   req.on('data', function(chunk) {
//     console.log('chunk looks like:', chunk + '')
//     var test = JSON.parse(chunk);
//     console.log('teste chunk looks like', test)
//     console.log('type of test is', typeof(test))
//     // var chunk = JSON.parse(chunkString)
//     // console.log('chunk', typeof chunk.toString())
//     // setInterval(function() { console.log('**************', typeof chunk, 'chunk', chunk)}, 1000)
//     console.log('len', chunk.length)
//     // for (var i = 0; i < chunk.leng)
//     // body.concat(chunk.toString());
//     // // body.concat([JSON.parse(chunk)]);
//     // var bars = body;
//     // console.log('bars be', bars)
//     // console.log(typeof(bars))
//     // bars.forEach(function(bar) {
//     //   console.log('bar is***************', bar);
//     //   db.insertBarIntoDB(bar, function (error, result) {
//     //     if (error) {
//     //       console.log('errored out from /barlist post', error);
//     //     }
//     //     console.log('success post to database');
//         res.send();
//     //   })
//     // })
//   })
// })

app.listen(5000, function() {
  console.log('listening on port 5000!');
});

