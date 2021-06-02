const http = require('http');

http.createServer((req,res)=> {
    console.log('nak nak');
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=test.txt");
    res.end('end////////////')
}).listen('8000');

