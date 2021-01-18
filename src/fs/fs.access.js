//测试用户对 path 指定的文件或目录的权限
// fs.access(path[, mode], callback)
// mode
// F_OK	表明文件对调用进程可见。 这对于判断文件是否存在很有用，但对 rwx 权限没有任何说明。 如果未指定模式，则默认值为该值。
// R_OK	表明调用进程可以读取文件。
// W_OK	表明调用进程可以写入文件。
// X_OK	表明调用进程可以执行文件。 在 Windows 上无效（表现得像 fs.constants.F_OK）
const fs = require('fs').promises;

fs.access(__dirname + '/fs.demo1.js').then( res =>{
    if(res === undefined){
        console.log('文件存在')
    }
}).catch( err =>{
    console.log(err)
})