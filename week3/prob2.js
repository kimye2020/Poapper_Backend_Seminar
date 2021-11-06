const http = require('http')

http.createServer((req, res) => {
    x = req.url.split('/')
    if(x[1] == 'add'){
        a = Number(x[2]) + Number(x[3])
        res.write(String(a))
        res.end()
    }else if(x[1] == 'sub'){
        a = Number(x[2]) - Number(x[3])
        res.write(String(a))
        res.end()
    }else if(x[1] == 'mul'){
        a = Number(x[2]) * Number(x[3])
        res.write(String(a))
        res.end()
    }else if(x[1] == 'div'){
        a = Number(x[2]) / Number(x[3])
        res.write(String(a))
        res.end()
    }
}).listen(8080, () => {
    console.log("server is running on 8080 port.")
})