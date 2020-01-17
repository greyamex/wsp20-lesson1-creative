const functions = require('firebase-functions'); //import this library/module
const express = require('express') // light req/resp framework
const app = express() //'app' handles all requests through http
const path = require('path') // this is for the warning requiring 'path.join()' in place of '+' to concatenate
//const util = require('util')

exports.httpReq = functions.https.onRequest(app)

app.get('/', frontendHandler); // slash only is called a 'root request'

app.get('/b', backendHandler);

app.get('/home', frontendHandler);

app.get('/login', frontendHandler);


// request and response are provided by the Node.js framework
// request object: all info being sent from client computer web browser, likewise for response
function frontendHandler(request, response) {
    response.sendFile(path.join(__dirname, '/spa/index.html')) // specifies absolute full path on this computer where the index.html is
}

function backendHandler(req, res) {
    const n = Math.random(); // 0 ~ 1 (not including 1)
    const num = Math.floor(n * 10); // 0 ~ 9 int
    let s = 0;
    s = 50 + 12;

    let page = `
        <h1>Your lucky number is ${num}</h1>
        Sum is ${s}
    `;

    res.send(page)
}