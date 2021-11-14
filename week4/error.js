//Homework 3의 prob2 코드
const http = require('http')

http.createServer((req, res) => {
    x = req.url.split('/')
    if(x[1] == 'add'){
        a = Number(x[2]) + Number(x[3]) //database에 존재하지 않는 index값을 요청했을지도...? localhost:8080/add/1 이럴 경우 에러 발생. 나머지도 마찬가지
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
        a = Number(x[2]) / Number(x[3]) //Number(x[3])이 0일 경우 에러가 발생한다. localhost:8080/add/1/0 이럴 경우 에러 발생
        res.write(String(a))
        res.end()
    }
}).listen(8080, () => {
    console.log("server is running on 8080 port.")
})