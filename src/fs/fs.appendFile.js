// 异步地追加数据到文件，如果文件尚不存在则创建文件。 data 可以是字符串或 Buffer
// fs.appendFile(path, data[, options], callback)
const fs = require('fs').promises;
let path = __dirname + '/fs.demo.js'
fs.appendFile(path,'let age = 18').then( res =>{
    if(res === undefined){ console.log('添加成功！') }
})
