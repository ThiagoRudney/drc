var fs = require('fs');

fs.stat('./page.html', function(err, stats){
    console.log('Is file ?' + stats.isFile());
    console.log(stats);
});