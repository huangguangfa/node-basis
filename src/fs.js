const fs = require('fs');

//同步方式
fs.unlinkSync('./remove.js');
//callback形式
fs.unlink('./remove.js',(err) =>{
    console.log(err)
})
//promise
const fss = require('fs/promises');
fss.unlink('./remove.js').then( res =>{
    console.log(res)
})

console.log(fs)
