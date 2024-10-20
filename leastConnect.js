const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({})

let current  = 0;

const leastConnection = (servers, req, res) =>{
  
    [].slice.call(servers).sort((a,b) => a.connections - b.connections)
  
    // servers.sort((a,b) => a.connections - b.connections)
  
    const target = servers[0]
    target.connections++
    console.log(target)


    proxy.web(req,res,{target: `http://${target.host}:${target.port}`})

    res.on('finish',()=>{
        target.connections--
    })
}

module.exports = leastConnection