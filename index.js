const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const qs = require('qs')
var app = express();

app.use(bodyParser.json());

const settings = {
    "apikey": "7856d350-1fda-45f5-822d-e1a2f3f1acf0",
    "clientID": "919e0c1c-76a2-4646-a2fb-7085bbbf3c56",
    "useragent": "Kreta.Ellenorzo/2.9.6.2019121703"
}

axios.defaults.headers.common['apiKey'] = settings.apikey;

// --- e-Kréta requestek ---
app.get('/kreta/getschools', function (req, res) {
    axios.get("https://kretaglobalmobileapi.ekreta.hu/api/v2/Institute/")
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data))
        })
        .catch(error => {
            res.end(JSON.stringify({"code": "500", "message": error}))
        });
})

app.post('/kreta/getbearer', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        data: qs.stringify({
            institute_code: req.body["school"],
            userName: req.body["username"],
            password: req.body["password"],
            grant_type: 'password',
            client_id: settings.clientID,
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'User-Agent': settings.useragent
          }
    }
    axios.get("https://"+ req.body["school"]+".e-kreta.hu/idp/api/v1/Token", conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data))
        })
        .catch(error => {
            res.end(JSON.stringify({"code": "500", "message": error}))
        });
})

app.post('/kreta/refreshtoken', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        data: qs.stringify({
            institute_code: req.body["school"],
            refresh_token: req.body["refresh_token"],
            grant_type: 'refresh_token',
            client_id: settings.clientID,
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'User-Agent': settings.useragent
          }
    }
    axios.get("https://"+ req.body["school"]+".e-kreta.hu/idp/api/v1/Token", conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data))
        })
        .catch(error => {
            res.end(JSON.stringify({"code": "500", "message": error}))
        });
})

// --- e-Kréta requestek vége ---

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Atlantisz figyel a http://%s:%s elérhetőségen...", host, port)
})