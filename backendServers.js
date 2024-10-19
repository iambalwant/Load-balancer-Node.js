const http = require('http');
const serverConfig = require('./config.json').servers


const createServer = (host, port)=>{
    http.createServer((req,res)=>{
        res.writeHead(200)
        res.end(`Server responce from port: ${port}`)
    }).listen(port, host, ()=>{
        console.log(`Server is running at http://${host}:${port}`)
    })
}

serverConfig.forEach(server => createServer(server.host, server.port));