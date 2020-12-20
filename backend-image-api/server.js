const express = require('express');
const app = express()
server = require('http').createServer(app);

const cors = require("cors");
const uploadRoutes = require("./routes/api/uploads");

app.use("*", cors());
app.use(express.json());
app.use(uploadRoutes);

//app.get("/",(req, res) => res.send("gotcha"));
// app.listen(4000);
server.listen(5000, function() {
    console.log('ready to go!');
});

