const http = require('http');
const port = 3000;

const server = http.creatServer(function(req,res) {
 res.write("Hello World!")
 res.end()
})
