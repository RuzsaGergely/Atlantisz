const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const qs = require('qs')
const https = require('https')
const app = express();

app.use(bodyParser.json());

const settings = {
    "apikey": "7856d350-1fda-45f5-822d-e1a2f3f1acf0",
    "clientID": "919e0c1c-76a2-4646-a2fb-7085bbbf3c56",
    "useragent": "Kreta.Ellenorzo/2.9.15.2020060401"
}

axios.defaults.headers.common['apiKey'] = settings.apikey;

// --- e-Kréta requestek ---
app.get('/kreta/getschools/:schoolID?', function (req, res) {
    if (req.params.schoolID != undefined) {
        axios.get("https://kretaglobalmobileapi.ekreta.hu/api/v2/Institute/" + req.params.schoolID)
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response.data))
            })
            .catch(error => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ "code": "500", "message": error }))
            });
    } else {
        axios.get("https://kretaglobalmobileapi.ekreta.hu/api/v2/Institute/")
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response.data))
            })
            .catch(error => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ "code": "500", "message": error }))
            });
    }
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
    axios.get("https://" + req.body["school"] + ".e-kreta.hu/idp/api/v1/Token", conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data))
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": "500", "message": error }))
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
    axios.get("https://" + req.body["school"] + ".e-kreta.hu/idp/api/v1/Token", conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data))
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": "500", "message": error }))
        });
})

app.post('/kreta/studentdata', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        headers: {
            'User-Agent': settings.useragent,
            'Authorization': 'bearer ' + req.body["Authtoken"]
        }
    }
    axios.get("https://" + req.body["School"] + ".e-kreta.hu/mapi/api/v1/StudentAmi?fromDate=" + req.body["fromDate"] + "&toDate=" + req.body["toDate"], conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data))
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": "500", "message": error }))
        });
})

app.post('/kreta/getlessons', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        headers: {
            'User-Agent': settings.useragent,
            'Authorization': 'bearer ' + req.body["Authtoken"]
        }
    }
    axios.get("https://" + req.body["School"] + ".e-kreta.hu/mapi/api/v1/LessonAmi?fromDate=" + req.body["fromDate"] + "&toDate=" + req.body["toDate"], conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data))
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": "500", "message": error }))
        });
})

app.post('/kreta/getszamonkeresek', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        headers: {
            'User-Agent': settings.useragent,
            'Authorization': 'bearer ' + req.body["Authtoken"]
        }
    }
    axios.get("https://" + req.body["School"] + ".e-kreta.hu/mapi/api/v1/BejelentettSzamonkeresAmi?fromDate=" + req.body["fromDate"] + "&toDate=" + req.body["toDate"], conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data))
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": "500", "message": error }))
        });
})

app.get('/kreta/getpostalada/:id?', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        headers: {
            'User-Agent': settings.useragent,
            'Authorization': 'bearer ' + req.headers["authtoken"]
        }
    }
    if (req.params.id != undefined) {
        axios.get("https://eugyintezes.e-kreta.hu/integration-kretamobile-api/v1/kommunikacio/postaladaelemek/" + req.params.id, conf)
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response.data))
            })
            .catch(error => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ "code": "500", "message": error }))
            });
    } else {
        axios.get("https://eugyintezes.e-kreta.hu/integration-kretamobile-api/v1/kommunikacio/postaladaelemek/sajat/", conf)
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response.data))
            })
            .catch(error => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ "code": "500", "message": error }))
            });
    }
})

app.post('/kreta/postaladaelem/olvasott', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        headers: {
            'User-Agent': settings.useragent,
            'Authorization': 'Bearer ' + req.headers["authtoken"],
        }
    }
    axios.post("https://eugyintezes.e-kreta.hu/integration-kretamobile-api/v1/kommunikacio/uzenetek/olvasott", JSON.stringify(req.body), conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": response.status }))
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": "500", "message": error }))
        });
})

app.get('/kreta/atlagok', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        headers: {
            'User-Agent': settings.useragent,
            'Authorization': 'Bearer ' + req.headers["authtoken"]
        }
    }
    axios.get("https://" + req.headers["school"] + ".e-kreta.hu/mapi/api/v1/TantargyiAtlagAmi", conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": response.data }))
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": "500", "message": error }))
        });
})

app.post('/kreta/tanarihazifeladat/', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        headers: {
            'User-Agent': settings.useragent,
            'Authorization': 'Bearer ' + req.body["Authtoken"]
        }
    }
    if (req.body["ID"] != null || req.body["ID"] != undefined) {
        axios.get("https://" + req.body["School"] + ".e-kreta.hu/mapi/api/v1/HaziFeladat/TanarHaziFeladat/" + req.body["ID"], conf)
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(response.data))
            })
            .catch(error => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ "code": "500", "message": error }))
            });
    } else {
        axios.get("https://" + req.body["School"] + ".e-kreta.hu/mapi/api/v1/LessonAmi?fromDate=" + req.body["fromDate"] + "&toDate=" + req.body["toDate"], conf)
            .then(response => {
                let output = [];
                let data = response.data;
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        if (data[key].TeacherHomeworkId != null) {
                            output.push({"TeacherHomeworkId": data[key].TeacherHomeworkId });
                        }
                    }
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(output));
            })
            .catch(error => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ "code": "500", "message": error }))
            });
    }
})

app.post('/kreta/tanarihazifeladat/kesz', function (req, res) {
    //console.log('Got body:', req.body);
    let conf = {
        headers: {
            'User-Agent': settings.useragent,
            'Authorization': 'Bearer ' + req.body["Authtoken"],
            'Content-Type': 'application/json; charset=utf-8'
        },
    }
    let data = {

    }
    axios.post("https://" + req.body["School"] + ".e-kreta.hu/mapi/api/v1/HaziFeladat/Megoldva", JSON.stringify({ "TanarHaziFeladatId": req.body["TanarHaziFeladatId"], "IsMegoldva": req.body["IsMegoldva"] }), conf)
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": response.status }))
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": "500", "message": error }))
        });
})
// --- e-Kréta requestek vége ---

// --- Neptun requestek ---
app.get('/neptun/intezmenyek', function (req, res) {
    // Rossz a cert, így át kell ugranom a verifyt
    const instance = axios.create({
        httpsAgent: new https.Agent({  
            rejectUnauthorized: false
        })
    });
    instance.post("https://mobilecloudservice.cloudapp.net/MobileServiceLib/MobileCloudService.svc/GetAllNeptunMobileUrls")
        .then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response.data))
        })
        .catch(error => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ "code": "500", "message": error }))
        });
})
// --- Neptun requestek vége ---
let server = app.listen(8000, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Atlantisz figyel a http://%s:%s elérhetőségen...", host, port)
})