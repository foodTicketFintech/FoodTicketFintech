const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/DB");
const cors = require("cors");
const bodyParser = require("body-parser");
const random = require("random");
const jwt = require("jsonwebtoken");
const onError = require("./onError");
const sha256 = require("sha256");
// cors 허용
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // true로 하면 설정한 내용을 response 헤더 추가
};
app.use(cors());

// 값 statc하게 넣어줬습니다.
app.set("jwt-secret", "foodticket");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/host", (req, res) => {
  res.send({ host: "hwi" });
});

app.get("/api/login/userInfo", (req, res) => {
  var email = req.query.email;
  db.query(
    "select food_ticket.balance, restaurant.name, restaurant.restaurant_address  from customer " +
      "left join food_ticket on food_ticket.customer_id = customer.id " +
      "left join restaurant on restaurant.id = food_ticket.restaurant_id " +
      "where customer.email = '" +
      email +
      "'",
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

app.post("/customer/join", (req, res) => {
  // TODO : 같은 아이디로 회원가입할 시 처리 로직 필요
  // TODO : 로그인이 필요한 서비스 url 호출 시, 검증 로직 필요

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
    `INSERT INTO customer VALUES(\"${id}\",\"${email}\",\"${password}\",\"${name}\",\"${birth}\",\"${address}\",\"${positionX}\",\"${positionY}\") `,
    (err, data) => {
      if (!err) {
        console.log(
          `INSERT INTO customer VALUES(\"${id}\",\"${email}\",\"${password}\",\"${name}\",\"${birth}\",\"${address}\",\"${positionX}\",\"${positionY}\") 실행 ✅ `
        );
        res.status(200);
      } else {
        console.log(err);
        onError(err);
      }
    }
  );
});
function hashFunc(password) {
  let salt = "foodticket";
  return sha256(password + salt);
}

app.post("/customer/login", (req, res) => {
  let id = req.body.id;
  let password = req.body.password;
  let secret = "foodticket";
  console.log(id, password);
  secret = app.get("jwt-secret");
  // let hashPassword = password;
  // hashFunc(password);
  // console.log(hashFunc(password));
  db.query(
    `SELECT * FROM customer WHERE email =\"${id}\" AND password = \"${password}\"`,
    (err, data) => {
      console.log(data[0].name);
      if (data[0].name) {
        res.send(err);
        // FIXME : login 실패시 err 보내게만 해놓음
      }
      if (!err) {
        // 1. jwt 만드는 부분
        let token = jwt.sign(
          {
            id: id,
            name: data[0].name,
          },
          secret,
          {
            expiresIn: "60m",
            subject: "userInfo",
          }
        );
        console.log(token);
        res.json({
          message: "Login Success!! ✅",
          token,
        });
      } else {
        // TODO : 400 error 만들어서 줘야 함
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.post("/customer/validate", (req, res) => {});

app.get("/restaurant", (req, res) => {
  let name = req.body.name;
  let positionX = req.body.position_x;
  let positionY = req.body.position_y;
  let address = req.body.restaurant_address;
  db.query("SELECT * FROM restaurant", (err, data) => {
    if (!err) {
      res.send(data);
      console.log("asdf");
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

app.listen(PORT, () => {
  "";
  console.log(`Server On : http://localhost : ${PORT} ✅`);
});
