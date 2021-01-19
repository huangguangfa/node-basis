const fs = require('fs').promises;
fs.copyFile(__dirname + '/copy.demo.js',__dirname + '/fs.demo.js').then( res =>{
    if(res === undefined){
        console.log('复制成功')
    }
})