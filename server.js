const http = require('http');
const roundRobin = require("./roundRobin")
const serverConfig = require("./config.json").servers


const servers = serverConfig.map(server =>({
    ...server
}))

const loadBalancerAlgorithem = 'roundRobin'

const server = http.createServer((req,res)=>{
    if(loadBalancerAlgorithem === 'roundRobin'){
        roundRobin(servers, req, res)
    }else{
        res.writeHead(500)
        res.end('load balancer algorim is not support.')
    }
})

server.listen(3000,()=>{
    console.log('load balacner server run on 3000')
})