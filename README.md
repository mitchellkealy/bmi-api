# bmi-api
## About
This is a simple and lean API which calculates BMI when sent height and weight.

## Initial Setup
- Clone this repository to your local machine
- Open up the project in a text editor
- run `npm install`
- run `node app.js`

## How to Use
Send a JSON payload to http://localhost:3000/url that matches the following structure:
```
{
    "height": 80, 
    "weight": 200 
}
```
The app will then return a text response similar to this:
```
height         : 80
weight         : 200
bmi            : 22.0
```

Please reach out to kealym@oregonstate.edu with any questions.

 
