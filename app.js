var express = require('express');

var app = express();

app.use(express.static('public'));

app.get("/public", function(req, res) {
  res.send("Test");

});

app.listen(3000, function() {
  console.log('Server App started on 3000 port');
});
