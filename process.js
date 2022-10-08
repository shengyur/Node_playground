// process.stdin 可用于 读入 标准输入流 的对象
// Begin reading from stdin so the process does not exit
process.stdin.resume()

process.stdin.on('data', function(chunk) {
    process.stdout.write('进程接收到数据了！:'+ chunk)
})

