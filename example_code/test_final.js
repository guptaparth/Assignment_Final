'use strict';
const fs=require('fs');

const { spawn } = require('child_process');

///*
//fs.createReadStream(req.payload.message).pipe(fs.createWriteStream('test.js'));
var gpp = spawn('node', ['test1.js']);

gpp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
gpp.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

gpp.on('close', (code) => {
  console.log(`child process exited`);
});
//*/

///*
// Running code to compile Java Code
var gpp2 = spawn('javac', ['test.java']);
var gpp1 = spawn('java',['test']);

gpp1.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
  
gpp1.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

gpp1.on('close', (code) => {
  console.log(`child process exited`);
});
//*/

///*
// Running code to compile c++ code
var gpp3 = spawn('g++', ['test.cpp']);
var gpp4 = spawn('./a.out');

gpp4.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
gpp4.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  
gpp4.on('close', (code) => {
  console.log(`child process exited`);
});
//*/

/*
// Running code to compile c code
var gpp5 = spawn('gcc', ['test.c']);
var gpp6 = spawn('./a.out');
gpp6.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

gpp6.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

gpp6.on('close', (code) => {
  console.log(`child process exited`);
});

*/
