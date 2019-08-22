var express = require("express");

var app = express();

app.get('/', (req, res) => {
    res.redirect("/Home");
});

app.get('/Home', (req, res) => {
    res.send("Alpha Is In His Hime!");
})
app.listen(8080, () => {
    console.log("Server Running!!!");
});
