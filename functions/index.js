const functions = require('firebase-functions'); //import this library/module
const express = require('express') // light req/resp framework
const app = express() //'app' handles all requests through http

exports.httpReq = functions.https.onRequest(app)

app.get('/', requestHandler);

app.get('/home', requestHandler);

app.get('/login', requestHandler);

// request and response are provided by the Node.js framework
// request object: all info being sent from client computer web browser, likewise for response
function requestHandler(request, response) {
    response.sendFile(__dirname + '/spa/index.html') // specifies absolute full path on this computer where the index.html is
}