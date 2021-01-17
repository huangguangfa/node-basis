let moduleData = require('./module'); //会加载并运行js内容
console.log(moduleData) //{ test: [Function: test], aa: 10 }
moduleData.test() //module.js run test