const http = require('http');
const roundRobin = require("./roundRobin")
const leastConnection = require("./leastConnect")
const serverConfig = require("./config.json").servers


// const servers = serverConfig.map(server =>({
//     ...server
// }))
const servers = serverConfig.map(server =>({
    ...server,
    connections: 0
})) 

const loadBalancerAlgorithem = 'leastConnection' // or robin round 

const server = http.createServer((req,res)=>{
    if(loadBalancerAlgorithem === 'roundRobin'){
        roundRobin(servers, req, res)
    }
    else if(loadBalancerAlgorithem === 'leastConnection'){
        leastConnection(server, req, res)
    }
    else{
        res.writeHead(500)
        res.end('load balancer algorim is not support.')
    }
})

server.listen(3000,()=>{
    console.log('load balacner server run on 3000')
})