
const fs = require('fs');
fs.opendir(__dirname,(err,dir) =>{
    console.log(err,dir)
})