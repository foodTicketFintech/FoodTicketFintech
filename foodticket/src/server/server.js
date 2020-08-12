const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/DB');

app.get('/api/host', (req, res) => {
    res.send({ host : 'hwi'});
})

app.get('/api/test', (req, res) => {
    db.query("select * from customer", (err, data) => {
        if(!err) {
            res.header("Access-Control-Allow-Origin","*");
            res.send(data);
        } else {
            console.log(err);
            res.send(err);
        }

    })
})

app.listen(PORT, ()=> {
    console.log("Server On : http://localhost:",PORT);
})