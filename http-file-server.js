const http = require('http')

const fs = require('fs')

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((req,res)=>{
const ch = fs.createReadStream(file,{ encoding : 'utf8'})

ch.pipe(res);

})

server.listen(port)