const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line;
    rl.close()
}).on('close',function(){
    [...input].forEach(ele=>console.log(ele))
    process.exit();
})