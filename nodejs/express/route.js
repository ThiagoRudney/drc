var express = require('express'),
    app = express();

/*app.get('/', function (req, res) {
   res.send('<h1>Hello from NodeJS</h1>');
});*/

app.use(express.static('public'));

app.get('/service', function (req, res) {
    res.json({data: 'Some data'});
});

app.get('/service/:name/:last_name', function (req, res) {
    res.send('<h1>' +req.params.name +req.params.last_name + ' pra quem voce tira o chapéu?</h1>');
});

app.listen(8080);

console.log('Server running on localhost:8080');