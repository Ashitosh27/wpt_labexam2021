const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "CDAC",
  database: "wptexam",
};

async function addmessage(a) {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  const sql = `insert into messages (messages) values (?)`;
  connection.queryAsync(sql,[a.message]);
  console.log("Message Added Successfully...");

  await connection.endAsync();
}

async function showMessages() {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  const sql = `select * from messages`;

  const list = await connection.queryAsync(sql);
  console.log(list);

  await connection.endAsync();
  return list;
}

const message = {
  message: "How Are You",
};
//addmessage(message);
//showMessages();

module.exports = { addmessage, showMessages };
