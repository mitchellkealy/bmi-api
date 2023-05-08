var express = require("express");
var app = express();

const convert = require('json-to-plain-text');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/url", bodyParser.json(), (req, res) => {
    const body = req.body
    body.bmi = 25
    const text = convert.toPlainText(body)
    console.log(text)
    res.attachment('filename.txt')
    res.type('txt')
    res.send(text)
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});