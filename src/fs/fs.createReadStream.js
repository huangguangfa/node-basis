const fs = require('fs');

let fileStream = fs.createReadStream(__dirname + '/copy.demo.js',{
    highWaterMark:10, //文件一次读多少字节,默认 64*1024
    flags:'r', //默认 'r'
    autoClose:true, //默认读取完毕后自动关闭
    start:0, //读取文件开始位置
    end:1000, //流是闭合区间 包含start也含end
    encoding:'utf8' //默认null
})

fileStream.on('open',()=>{
    console.log('文件打开')
})

fileStream.on('data',(data) =>{
    console.log('data',data)
})
fileStream.on('end',()=>{ //文件读取完毕后触发
    console.log("读取完毕");
});
fileStream.on("close",()=>{ //最后文件关闭触发
    console.log("关闭")
})