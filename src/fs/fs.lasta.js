const fs = require('fs');
fs.lstat(__dirname + '/fs.demo.js',(err,stats) =>{
    console.log(err,stats)
    // null Stats {
    //     dev: 16777220,
    //     mode: 33188,
    //     nlink: 1,
    //     uid: 501,
    //     gid: 20,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 40671287,
    //     size: 619,
    //     blocks: 8,
    //     atimeMs: 1611061468739.3694,
    //     mtimeMs: 1611061467582.7808,
    //     ctimeMs: 1611061467582.7808,
    //     birthtimeMs: 1610980135595.574,
    //     atime: 2021-01-19T13:04:28.739Z,
    //     mtime: 2021-01-19T13:04:27.583Z,
    //     ctime: 2021-01-19T13:04:27.583Z,
    //     birthtime: 2021-01-18T14:28:55.596Z
    //   }
})