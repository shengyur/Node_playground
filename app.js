var foo = require('Theon')

// console.log(foo.name)
console.log("我的子模块是",module.children)

setTimeout(() => {
console.log(module.loaded)
}, 2000);

