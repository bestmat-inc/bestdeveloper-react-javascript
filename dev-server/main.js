const express = require("express");
const app = express();
const port = 3002;

app.get("/", function(res, req) {
    res.send("Server Backend");
});