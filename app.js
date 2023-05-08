const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/bmi", bodyParser.json(), (req, res) => {
    const body = req.body
    const height = body.height
    body.bmi = parseInt((body.weight / (height * height) * 703).toFixed(1))
    res.type('json')
    res.send(body)
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});