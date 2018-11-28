let fs = require('fs');
let http = require('http');




let server = http.createServer((req , res) =>{

    res.writeHead(200 ,{'Content-Type' : 'text/html'});
    let readStream = fs.createReadStream(__dirname + '/index.html' , 'utf-8');

    readStream.pipe(res);
})

server.listen(2000)

console.log(`Server is Listen to port 200 ${server}`)