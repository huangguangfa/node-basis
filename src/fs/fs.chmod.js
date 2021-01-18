
//异步地更改文件的权限。 除了可能的异常，完成回调没有其他参数
//fs.chmod(path, mode, callback)
const fs = require('fs').promises;

fs.chmod('my_file.txt', 0o775, (err) => {
    if (err) throw err;
    console.log('文件 “my_file.txt” 的权限已被更改');
});