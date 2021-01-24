
const process = require('child_process');
console.log(process);
// {
//     _forkChild: [Function: _forkChild],
//     ChildProcess: [Function: ChildProcess],
//     exec: [Function: exec],
//     execFile: [Function: execFile],
//     execFileSync: [Function: execFileSync],
//     execSync: [Function: execSync],
//     fork: [Function: fork],
//     spawn: [Function: spawn],
//     spawnSync: [Function: spawnSync]
//   }

let { spawn } = process;
let res = spawn()



