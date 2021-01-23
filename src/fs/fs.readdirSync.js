const fs = require('fs');
const path = require('path').resolve() + '/readdir_file';

const list = fs.readdirSync(path);
console.log(list)