# bmi-api
## About
This is a simple and lean API which calculates BMI when sent height and weight.

## Initial Setup
- Clone this repository to your local machine
- Open up the project in a text editor
- run `npm install`
- run `node app.js`

## How to Use
Send a JSON payload to http://localhost:3000/bmi that matches the following structure, including lbs and inches:
```
{
    "height": 80, 
    "weight": 200 
}
```
The app will then return a json response similar to this:
```
{
    "height": 80,
    "weight": 200,
    "bmi": 22
}
```

Now you can parse the response by doing something similar to
```
import fetch from 'node-fetch';

const fake_data = {"height": 80, "weight": 200}

const response = await fetch('http://localhost:3000/bmi', {method: 'POST', body: fake_data});
const data = await response.json();

console.log(data);
```
## UML Diagram
![BMP API UML DIAGRAM](https://github.com/mitchellkealy/bmi-api/blob/main/UML-Diagram.png)

Please reach out to kealym@oregonstate.edu with any questions.

 
