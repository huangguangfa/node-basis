let user_name = "张三";
console.log('测试新进程去执行js文件',user_name)

const path = require('path');

console.log(path.join(__dirname,'demo.js') )
// console.log(process.env.PATH.split(':').join('\n'));
console.log(process.arch)