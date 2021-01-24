

const fs = require('fs');

// const text = '这是要写入的文字内容';

// fs.writeFile(__dirname + '/edit1.text',text,(err,db) =>{
//     if(err === null){
//         console.log('写入成功！')
//     }
// })

//写入图片进行保存
fs.readFile('../img/img.jpg',(err,data) =>{
    if (err) throw err;
    fs.writeFile('../img/img1.png',data,(err,db) =>{
        if (err) throw err;
        console.log(db)
    })
})