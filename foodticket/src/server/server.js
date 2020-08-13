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
  // json으로 받음
  // id, name, password, birth, address, positionX, positionY
  let id = req.body.id;
  let name = req.body.name;
  let password = req.body.password;
  let birth = req.body.birth;
  let address = req.body.address;
  let positionX = req.body.positionX;
  let positionY = req.body.positionY;
  //"select * from customer"
  // TODO : ID를 hash함수에 넣어서 기본키 만들자
  db.query(
    `INSERT INTO customer VALUES(101,\"${id}\", \"${name}\",\"${password}\",\"${birth}\",\"${address}\",\"${positionX}\",\"${positionY}\") `,
    (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log("Server On : http://localhost:", PORT);
});
