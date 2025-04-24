// CORE MODULES

const http = require("http")

http.createServer((request, response) => {
    console.log("Server Running!")
    response.write("Hello World from Node.Js")
    response.end()
}).listen(3000)