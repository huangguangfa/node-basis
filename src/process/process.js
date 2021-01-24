// process 对象是一个全局变量，提供了有关当前 Node.js 进程的信息并对其进行控制。 作为全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。 它也可以使用 require() 显式地访问：
console.log(process.env.PATH.split(':').join('\n')); //查看 PATH
// 获取平台信息
console.log(`该处理器的架构是 ${process.arch}`); 
console.log(`此平台是 ${process.platform}`);
console.log(process.memoryUsage()) //存使用情况的对象
// {
//     rss: 23371776,  是驻留集大小, 是给这个进程分配了多少物理内存（占总分配内存的一部分），包含所有的 C++ 和 JavaScript 对象与代码
//     heapTotal: 4648960, 代表 V8 的内存使用情况。
//     heapUsed: 2646224, 代表 V8 的内存使用情况。
//     external: 840097 代表 V8 管理的，绑定到 Javascript 的 C++ 对象的内存使用情况。
//   }
console.log(process.argv) //获取命令运行的参数 node process.js 1 2 
// [
//     '/usr/local/bin/node',
//     '/Users/guangfa/Desktop/guangfaMac/guangfa/node/node-basis/src/process/process.js',
//     '1',
//     '2'
//   ]

const EventEmitter = require('events').EventEmitter;

function complexOperations() {
  const events = new EventEmitter();

  process.nextTick(function () {
    events.emit('success',{name:'张三'});
  });

  return events;
}

complexOperations().on('success', function (data) {
  console.log('success!',data);
});