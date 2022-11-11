const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname + "/assets");
});
app.listen(process.env.PORT || 3000);
