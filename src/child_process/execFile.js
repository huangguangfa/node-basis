const { execFile } = require('child_process');

const execFile_res = execFile('node demo.js',(error, stdout, stderr) =>{
    if (error) {
        throw error;
    }
    console.log(stdout);
})