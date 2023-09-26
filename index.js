const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    const clientIP = req.ip; // Get client's IP address
    const frwdedIP = req.headers["x-forwarded-for"];
    console.log("🚀 ~ file: server.js:7 ~ app.get ~ frwdedIP:", frwdedIP);
    const connIP = req.connection.remoteAddress;
    console.log("🚀 ~ file: server.js:9 ~ app.get ~ connIP:", connIP);
  
    console.log("🚀 ~ file: server.js:6 ~ app.get ~ clientIP:", clientIP);
    res.send(`Client IP : ${clientIP} | fwdedIP : ${frwdedIP} | connIP: ${connIP}`);})
app.listen(process.env.PORT || 3000)