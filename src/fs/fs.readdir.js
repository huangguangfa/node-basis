const fs = require('fs');
const path = require('path');
const file_path = path.resolve() + '/readdir_file';
console.log(file_path)
fs.readdir(file_path,(err,list) =>{
    console.log(err,list)
})
