import sha256 from "sha256";

const run = (password) => {
  let salt = "foodticket";
  return sha256(password + salt);
};

export default run;

// TODO : 이 소스에서는 password + salt값만 hash했는데 KISA 기술안내서 찾아보자
