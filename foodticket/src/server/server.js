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
  db.query(
    `INSERT INTO customer VALUES(\"${id}\",\"${email}\",\"${password}\",\"${name}\",\"${birth}\",\"${address}\",\"${positionX}\",\"${positionY}\") `,
    (err, data) => {
      if (!err) {
        res.status(200);
      } else {
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
  secret = app.get("jwt-secret");
  // let hashPassword = password;
  // hashFunc(password);
  // console.log(hashFunc(password));
  db.query(
    `SELECT * FROM customer WHERE email =\"${id}\" AND password = \"${password}\"`,
    (err, data) => {
      if (!data[0].name) {
        res.send(err);
      }
      if (!err) {
        // 1. jwt 만드는 부분
        let token = jwt.sign(
          {
            id: id,
            name: data[0].name,
            userId : data[0].id,
          },
          secret,
          {
            expiresIn: "60m",
            subject: "userInfo",
          }
        );
        res.json({
          message: "Login Success!! ✅",
          token,
        });
      } else {
        // TODO : 400 error 만들어서 줘야 함
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
    } else {
      res.send(err);
    }
  });
});

app.get("/restaurant/food", (req, res) => {
  let res_id = req.body.res_id;
  let res_name = req.body.res_name;
  let menu_id = req.body.menu_id;
  let menu_name = req.body.menu_name;
  let price = req.body.price;
  let restaurant_address = req.body.restaurant_address;
  let position_x = req.body.position_x;
  let position_y = req.body.position_y;
  db.query(
    "select r.id as res_id, r.name as res_name, m.id as menu_id, m.name as menu_name, price, restaurant_address, position_x, position_y  from menu m, restaurant r where m.restaurant_id = r.id",
    (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        res.send(err);
      }
    }
  );
});

app.post("/order", (req, res) => {
  let email = req.body.id;

  db.query(
    `select r.name as rname, m.name as fname, f.balance,m.price from food_ticket as f right join menu as m on f.restaurant_id = m.restaurant_id right join restaurant as r on f.restaurant_id = r.id where customer_id=(select id from customer where email="${email}")`,
    (err, data) => {
      if (!err) {
        res.send(data);
      } else {
        res.send(err);
      }
    }
  );
});

app.post("/customer/pay", (req, res) => {
  let restaurant_id = req.body.res_id;
  let customer_id = req.body.customer_id;
  let start_date = "2020-8-24";
  let end_date = "2020-8-24";
  let balance = req.body.balance;
  db.query(
    `INSERT INTO food_ticket (restaurant_id, customer_id, start_date, end_date, balance) VALUES (${restaurant_id}, ${customer_id}, ${start_date}, ${end_date}, ${balance})`,
    (err, data) => {
      if(!err){
        res.send(data)
      } else {
        res.send(err);
      }
    }
    )
})

app.listen(PORT, () => {
  "";
  console.log(`Server On : http://localhost : ${PORT} ✅`);
});
