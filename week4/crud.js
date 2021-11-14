const http = require('http')

let db = {}
i = 0

const server = http.createServer((req, res) => {
    const url_parsed = req.url.split('/')
    const method = req.method
    
    console.log(method)
    console.log(url_parsed)
    console.log(db)

    if(method == 'POST'){
        db[i] = url_parsed[1]
        i += 1
    }else if(method == 'GET'){
        if(url_parsed[1] == ''){
            res.write(JSON.stringify(db))
        }else{
            const url_i = Number(url_parsed[1])
            res.write(db[url_i])
        }
    }else if(method == 'PUT'){
        const url_i = Number(url_parsed[1])
        const url_d = url_parsed[2]
        db[url_i] = url_d
    }else if(method == 'DELETE'){
        const url_i = Number(url_parsed[1])
        db[url_i] = undefined
    }
    res.end()
}).listen(8080, () => {
    console.log("server is running on 8080 port.")
})