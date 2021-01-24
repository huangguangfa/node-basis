const fs = require('fs');
fs.readFile('../img/img.jpg','utf8',(err, data) =>{
    if (err) throw err;
    console.log(data);
})