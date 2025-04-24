// CORE MODULES

const http = require("http")
const sayHello = require("./local-module")

http.createServer((request, response) => {
    console.log("Server Running!")

    sayHello("Krissia")
    response.write("Hello World from Node.Js")
    response.end()
}).listen(3000)