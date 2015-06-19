var express = require('express'),
    app = express();

app.get('/', function (req, res) {
   res.send('<h1>Hello from NodeJS</h1>');
});

app.listen(8080);

console.log('Server running on localhost:8080');