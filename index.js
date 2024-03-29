// Creating an HTTP Server
// import http module
const http = require("http");
const {division} = require('./division.js')
const {multiplication} = require('./multiplication.js')
// declare port number
const portNo = +process.env.PORT || 3030;

const server = http.createServer((req, res)=> {
    // set the response header and content type that will be returned
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 

    // set the response here
    res.end(`Hello guys.\nFYI: This was made possible using the http core module\nYou are SO welcome!\nDivision: ${division(10, 5)}\nMultiplication: ${multiplication(10, 10)}`);
});

//  Listen on a specific port (in this case it is port 3030)
server.listen(portNo, ()=> {
    console.log(`The server is running at http://localhost:${portNo}`)

});  

