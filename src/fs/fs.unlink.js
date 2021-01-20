
const fs = require('fs');

fs.unlink(__dirname + '/demo.text',( err , db) =>{
    if( err === null ){
        console.log('删除成功')
    }
    console.log(err,db )
})