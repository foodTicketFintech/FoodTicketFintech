const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/DB");
const cors = require("cors");
const bodyParser = require("body-parser");
const random = require("random");

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
  // TODO : 같은 아이디로 회원가입할 시 처리 로직 필요

  // json으로 받음
  // id, name, password, birth, address, positionX, positionY
  let email = req.body.id;
  let name = req.body.name;
  let password = req.body.password;
  let birth = req.body.birth;
  let address = req.body.address;
  let positionX = req.body.positionX;
  let positionY = req.body.positionY;

  // random한 ID값 생성
  let randomId = random.int(0, 1000000);
  let id = randomId;
  console.log(randomId);
  db.query(
    `INSERT INTO customer VALUES(\"${id}\",\"${email}\", \"${name}\",\"${password}\",\"${birth}\",\"${address}\",\"${positionX}\",\"${positionY}\") `,
    (err, data) => {
      if (!err) {
        console.log(
          `INSERT INTO customer VALUES(\"${id}\",\"${email}\", \"${name}\",\"${password}\",\"${birth}\",\"${address}\",\"${positionX}\",\"${positionY}\") 실행 ✅ `
        );
        res.send(data);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.post("/customer/login", (req, res) => {
  let id = req.body.id;
  let password = req.body.password;
  db.query(`SELECT * FROM CUSTOMER WHERE email =${id} AND password = ${password}`, (err, data) => {
    if (!err) {
      // 1. jwt 만드는 부분
      res.send(data);
    } else {
      // TODO : 400 error 만들어서 줘야 함
      console.log(err);
      res.send(err);
    }
  });
});

app.post("/customer/validate", (req, res) => {});

app.listen(PORT, () => {
  "";
  console.log(`Server On : http://localhost : ${PORT} ✅`);
});
