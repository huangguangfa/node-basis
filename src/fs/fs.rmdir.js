
const fs = require('fs');
try{
    fs.rmdir(__dirname+'/mkdirFile',(err,db) =>{
        console.log(err,db)
        if(err === null){
            console.log('删除成功！')
        }
    })
}catch (err){
    console.log(err)
}
 