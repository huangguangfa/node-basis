const fs = require('fs');

let writeFile = fs.createWriteStream(__dirname + '/fs.demo.js',{
    flags:'w',
    encoding:'utf8',
    start:0,
    highWaterMark:3
})

let readFile = fs.createReadStream(__dirname +'/copy.demo.js',{
    highWaterMark:10, //文件一次读多少字节,默认 64*1024
    flags:'r', //默认 'r'
    autoClose:true, //默认读取完毕后自动关闭
    start:0, //读取文件开始位置
    end:1000, //流是闭合区间 包含start也含end
    encoding:'utf8' //默认null
})
readFile.on('data',( Stream ) =>{
    writeFile.write(Stream)
})

writeFile.on('open',() =>{
    console.log('打开文件开始写入')
})
writeFile.on('close',() =>{
    console.log('文件关闭写完了')
})
writeFile.on('drain', () =>{ 
    console.log('写完一个流成功')
})
writeFile.on('ready',() =>{
    console.log('开始写入')
})