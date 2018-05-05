const express = require('express')
const socket = require('socket.io')
const { spawnSync } = require('child_process')
const { spawn } = require('child_process')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 5600

const server = app.listen(PORT, () => {
    console.log(`the port is listening at ${PORT}`)
})
app.use(express.static(__dirname))

const io = socket(server)

io.on('connection', (socket) => {
    socket.on("compile", (data) => {
        let input_data = data.input
        if (data.menu == 'Javascript') {
            fs.writeFileSync("test.js", input_data, 'utf8', (err) => {
                if (err) throw err
            })
            var gpp = spawn('node', ['test.js']);
            gpp.stdout.setEncoding('utf8')
            gpp.stdout.on('data', (data) => {
                io.sockets.emit("compile", data)
                console.log(`stdout: ${data}`);
            });

            gpp.stderr.on('data', (err) => {
                io.sockets.emit("compile", err)
                console.log(`stderr: ${err}`);
            });

            gpp.on('close', (code) => {
                console.log(`Javascript Code Exexuted`);
            });
        }
        else if (data.menu == 'Java') {
            fs.writeFileSync("test.java", input_data, 'utf8', (err) => {
                if (err) throw err
            })
            var gpp2 = spawnSync('javac', ['test.java']);
            var gpp1 = spawn('java', ['test']);

            gpp1.stdout.setEncoding('utf8')
            gpp1.stdout.on('data', (data) => {
                io.sockets.emit("compile", data)
                console.log(`stdout: ${data}`);
            });

            gpp1.stderr.on('data', (err) => {
                io.sockets.emit("compile", err)
                console.log(`stderr: ${err}`);
            });

            gpp1.on('close', (code) => {
                console.log(`Java Code Exexuted`);
            });
        }
        else if (data.menu == "C++") {
            fs.writeFileSync("test.cpp", input_data, 'utf8', (err) => {
                if (err) throw err
            })
            var gpp3 = spawnSync('g++', ['test.cpp', '-o', 'b.out']);
            var gpp4 = spawn('./b.out');
            gpp4.stdout.setEncoding('utf8')
            gpp4.stdout.on('data', (data) => {
                io.sockets.emit("compile", data)
                console.log(`stdout: ${data}`);
            });

            gpp4.stderr.on('data', (err) => {
                io.sockets.emit("compile", err)
                console.log(`stderr: ${err}`);
            });

            gpp4.on('close', (code) => {
                console.log(`C++ Code Exexuted`);
            });
        }
        else if (data.menu == "C") {
            fs.writeFileSync("test.c", input_data, 'utf8', (err) => {
                if (err) throw err
            })
            var gpp5 = spawnSync('gcc', ['test.c']);
            var gpp6 = spawn('./a.out');
            gpp6.stdout.setEncoding('utf8')
            gpp6.stdout.on('data', (data) => {
                io.sockets.emit("compile", data)
                console.log(`stdout: ${data}`);
            });

            gpp6.stderr.on('data', (err) => {
                io.sockets.emit("compile", err)
                console.log(`stderr: ${err}`);
            });

            gpp6.on('close', (code) => {
                console.log(`C Code Exexuted`);
            });
        }
    })
})