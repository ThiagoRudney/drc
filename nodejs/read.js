var fs = require('fs');

fs.readFile('./page.html', function(err, buffer){
    console.log(buffer.toString());
});
