/*
Implement a small command line node app called fetcher.js
which should take a URL as a command-line argument as well as a
local file path and download the resource to the specified path.
 */
/*
Use the request library to make the HTTP request
Use Node's fs module to write the file
Use the callback based approach we've been learning so far
Do not use the pipe function
Do not use synchronous functions (see warning below)
 */
const request = require('request');
const fs = require('fs');
const arr = process.argv.slice(2);

request(arr[0], (error, response, body) => {
  //console.log('error:', error); 
  //console.log('statusCode:', response && response.statusCode);  
  //console.log('body:', body); 
  //console.log(body.length);
  fs.writeFile(arr[1], body ,function (err) {
  if (err) return console.log(err);
   console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ./index.html.`);
  })
});

