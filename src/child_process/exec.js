// const { exec } = require('child_process');
//1
// let exec_res = exec('ls',{cwd:'/Users/guangfa/Desktop/guangfaMac/guangfa/node/node-basis/src'},( error,stdout,stderr ) =>{
//     console.log(error,stdout,stderr)
// })
// console.log('exec_res',exec_res)
//2
// let exec_res = exec('ls',{ cwd:'/Users/guangfa/Desktop/guangfaMac/guangfa/node/node-basis/src' })
// exec_res.stdout.on('data', data =>{
//     console.log('stdout',data.toString());
// })
// exec_res.stderr.on('data', data =>{
//     console.log('stderr',data)
// })
// exec_res.on('exit',code =>{
//     console.log(`子进程退出，退出码 ${code}`);
// })

//3
const util = require('util');
const exec = util.promisify( require('child_process').exec );
async function test(){
    let { stdout } = await exec('ls');
    console.log('stdout',stdout)
    // console.log('stderr',stderr)
}
test();
