import sha256 from "sha256";

const run = (password) => {
  let salt = "foodticket";
  return sha256(password + salt);
};

export default run;
