const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/DB");
const cors = require("cors");
const bodyParser = require("body-parser");

// cors 허용
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // true로 하면 설정한 내용을 response 헤더 추가
};
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/host", (req, res) => {
  res.send({ host: "hwi" });
});

app.get("/api/test", (req, res) => {
  db.query("select * from customer", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

app.post("/customer/join", (req, res) => {
  console.log(req.body);
  db.query("select * from customer", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("Server On : http://localhost:", PORT);
});
