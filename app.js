const express = require("express");
const app = express();

const convert = require('json-to-plain-text');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/url", bodyParser.json(), (req, res) => {
    const body = req.body
    const height = body.height
    body.bmi = (body.weight / (height * height) * 703).toFixed(1)
    const text = convert.toPlainText(body)
    res.attachment('filename.txt')
    res.type('txt')
    res.send(text)
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});