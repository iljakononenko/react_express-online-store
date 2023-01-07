const express = require('express')
const {connectDb} = require("./db");
// const {host, port} = require('./configuration')
const app = express();

const PORT = 5050;

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
}

app.get("/test", (req, res) => {
    res.send("Test passed!");
})

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once("open", startServer)
