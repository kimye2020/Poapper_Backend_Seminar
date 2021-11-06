const http = require('http')
require('date-utils')

http.createServer((req, res) => {
    var time = new Date()
    var t = time.toFormat('YYYY-MM-DD HH24:MI:SS')
    res.write(t)
    res.end()
}).listen(8080, () => {
    console.log("server is running on 8080 port.")
})