// 获取文件信息。
//fs.stat(path, [callback(err, stats)])
const fs = require('fs').promises;
fs.stat('./edit1.text').then( res =>{
    console.log(res)
    // Stats {
    //     dev: 16777220,
    //     mode: 33188,
    //     nlink: 1,
    //     uid: 501,
    //     gid: 20,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 40588074,
    //     size: 18,
    //     blocks: 8,
    //     atimeMs: 1610978034289.2458,
    //     mtimeMs: 1610978033245.403,
    //     ctimeMs: 1610978033245.403,
    //     birthtimeMs: 1610883468753.9055,
    //     atime: 2021-01-18T13:53:54.289Z,
    //     mtime: 2021-01-18T13:53:53.245Z,
    //     ctime: 2021-01-18T13:53:53.245Z,
    //     birthtime: 2021-01-17T11:37:48.754Z
    //   }
}).catch( err =>{
    console.log(err)
})