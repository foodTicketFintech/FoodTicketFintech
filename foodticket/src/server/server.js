const express = require('express');
const app = express();
const PORT = process.env.PORT || 52.79.236.55;
const db = require('./config/DB');

app.get('/api/host', (req, res) => {
    res.send({ host : 'hwi'});
})

app.get('/api/test', (req, res) => {
    db.query("select * from customer", (err, data) => {
        if(!err) {
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