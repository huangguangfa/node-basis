// 修改文件名称，可更改文件的存放路径

//fs.rename(oldFile, newFile, [callback(err)])

const fs = require('fs').promises;
fs.rename('./edit.text','./edit1.text').then( res =>{
    if(res === undefined){
        console.log('修改成功')
    }
})