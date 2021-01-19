
const fs = require('fs');

fs.mkdir(__dirname + '/mkdirFile', { recursive: true },(err) =>{
    console.log(err)
})
console.log('创建了')