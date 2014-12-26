var express = require('express');
var app = express();
 

 console.log("代理服务器已经在 8088 端口启动。");

 var server = app.listen(8088, function() {
    console.log('Listening on port %d', server.address().port);
});

app.use(express.bodyParser());
 
app.use(express.static(__dirname + '/public'));


app.get('/hello', function(req, res) {
		res.sendfile('public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});


app.post('/tech', function(req, res) {
  var id = req.body;
  console.log(id);
  res.json(id);
});

app.get('/tech/:id', function(req, res) {
  var id = req.params.id
  
  res.json(id);
});