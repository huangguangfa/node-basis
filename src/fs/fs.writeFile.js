

const fs = require('fs');

const text = '这是要写入的文字内容';

fs.writeFile(__dirname + '/edit1.text',text,(err,db) =>{
    if(err === null){
        console.log('写入成功！')
    }
})