const dotenv = require("dotenv/config");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cors = require("cors");
const app = express();

//process.env
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "build")));
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing

//mysql
// get the client
const mysql = require("mysql2");
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};
/*
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const SECRET_KEY = process.env.SECRET_KEY;
*/

//http:localhost:3100/?data=3
app.get("/", function (req, res) {
  req.session.myname = "lyc";
  let num = req.query.data;
  res.send({
    data: num,
  });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//--------------- reservation_data ---------------//
const postDataKeys = [
  "room",
  "duration",
  "start_time",
  "attendence",
  "date",
  "name",
  "phone",
  "email",
  "order_status",
];
//http://localhost:3100/reservation_data?data[date]=2021-07-24

app.get("/reservation_data", function (req, res) {
  //get user
  const reqData = req.query.data;
  let sqlStr = "";
  let values = [];

  async function getSqlStrAndValues() {
    let date = reqData.hasOwnProperty("date") ? reqData.date : null;
    let order_id = reqData.hasOwnProperty("order_id") ? reqData.order_id : null;
    sqlStr = ""; //init
    values = []; //init
    let varName = "";
    if (date !== null) {
      varName = "date";
      sqlStr += sqlStr === "" ? ` ${varName} = ?` : ` AND ${varName} = ?`;
      values.push(date);
    }
    if (order_id !== null) {
      varName = "order_id";
      sqlStr += sqlStr === "" ? ` ${varName} = ?` : ` AND ${varName} = ?`;
      values.push(order_id);
    }
    if (sqlStr === "" || values.length === 0) {
      return false;
    }
    return true;
  }

  async function selectDataFromSqlStr() {
    //insert data
    const sql = "SELECT * FROM reserved_data WHERE" + sqlStr;
    let dataList = await query(sql, values);
    return dataList;
  }

  async function getDataFromDB() {
    try {
      if (!(await getSqlStrAndValues())) {
        res.status(500).send({
          status: "ERROR",
          data: {
            status: "error",
            message: "GET ERROR: the query is null.",
          },
        });
        return;
      }
      let dataList = await selectDataFromSqlStr();
      res.status(200).send({
        status: "ok",
        data: {
          result: dataList,
          message: "get order success",
        },
      });
    } catch {
      res.status(500).send({
        status: "error",
        data: {
          message: "GET ERROR: reservation_data (server/db error)",
        },
      });
    }
  }

  getDataFromDB();
});

app.post("/reservation_data", function (req, res) {
  const postData = req.body.data;
  const order_id =
    postData["room"] +
    postData["start_time"].replace(/:/g, "") +
    postData["date"].replace(/-/g, "") +
    postData["phone"] +
    new Date().toISOString().replace(/:|-|\./g, "");
  async function checkHasSameData() {
    // Check has same data or not
    let sql = "SELECT * FROM `reserved_data` WHERE ";
    let values = [];
    let isExist = false;
    //如果有同樣的資料，不insert
    postDataKeys.forEach((key, index) => {
      sql += postDataKeys[index] + "= ?";
      sql += index === postDataKeys.length - 1 ? "" : " AND ";
      values.push(postData[key]);
    });
    let dataList = await query(sql, values);
    if (dataList.length === 1) {
      isExist = true;
    }
    return isExist;
  }
  async function insertData() {
    //Insert
    sql = "INSERT INTO reserved_data (";
    values = [];

    postDataKeys.forEach((key, index) => {
      //sql= 'INSERT INTO reserved_data (room, duration, start_time, attendence, date, name, phone, email, order_status, order_id) VALUES ?';

      // values = [
      //   [
      //     'A',
      //     2.5,
      //     '20:30',
      //     '5',
      //     '2021-07-20',
      //     'test',
      //     '0912345678',
      //     'test@gmail.com',
      //     'reserved',
      //     'A20305202107200912345678',
      //   ],
      // ];
      sql += postDataKeys[index];
      sql += index === postDataKeys.length - 1 ? "" : ", ";
      values.push(postData[key]);
    });
    sql += ", order_id) VALUES ?";
    values.push(order_id);
    values = [values];

    let dataList = await query(sql, [values]);
    return dataList;
  }

  async function postDataToDB() {
    try {
      if (await checkHasSameData()) {
        res.status(400).send({
          status: "error",
          data: {
            message: "There is same data in the database.",
          },
        });
        return;
      }

      await insertData();
      res.status(200).send({
        status: "ok",
        data: {
          order_id: order_id,
          message: "Applied success",
        },
      });
    } catch {
      res.status(500).send({
        status: "error",
        data: {
          message: "POST ERROR: reserved_data (server/db error)",
        },
      });
    }
  }

  postDataToDB();
});

app.patch("/reservation_data", function (req, res) {
  const patchData = req.body.data;
  const target_column = patchData["target_column"];
  const target_value = patchData["target_value"];
  const order_id = patchData["order_id"];
  /*
  get: target_column, target_value, order_id

  target_column: //要修改的項目
    "room",
    "duration",
    "start_time",
    "attendence",
    "date",
    "name",
    "phone",
    "email",
    "order_status",
  */
  async function updateDataDependsOnTargetColumn() {
    //update data
    let sql =
      "UPDATE `reserved_data` SET " +
      target_column +
      "= ? WHERE `order_id` = ? ";
    let values = [target_value, order_id];
    let dataList = await query(sql, values);
    return dataList;
  }

  async function patchDataToDB() {
    try {
      let dataList = await updateDataDependsOnTargetColumn();
      if (dataList.affectedRows === 1) {
        res.status(200).send({
          status: "ok",
          data: {
            order_id: order_id,
            message: `${target_column} changed success, value = ${target_value}`,
          },
        });
        return;
      }
      res.status(400).send({
        status: "error",
        data: {
          message: "update reserved_data failed",
        },
      });
    } catch {
      res.status(500).send({
        status: "error",
        data: {
          message: "PATCH ERROR: reserved_data (server/db error)",
        },
      });
    }
  }

  patchDataToDB();
});

// app.patch("/reservation_data", function (req, res) {
//   const patchData = req.body.data;
//   const target_column = patchData["target_column"];
//   const target_value = patchData["target_value"];
//   const order_id = patchData["order_id"];
//   /*
// get: target_column, target_value, order_id

// target_column: //要修改的項目
//   "room",
//   "duration",
//   "start_time",
//   "attendence",
//   "date",
//   "name",
//   "phone",
//   "email",
//   "order_status",
// */
//   try {
//     pool.getConnection(function (err, connection) {
//       if (err) {
//         connection.release();
//         res.status(510).send({
//           status: "error",
//           data: {
//             status: "error",
//             message: "PATCH ERROR: not connected!",
//           },
//         });
//         // throw err;
//         console.log(err);
//         return;
//       }
//       // let sql =
//       //   "UPDATE `reserved_data` SET order_status = ? WHERE `date` = ? AND `room` = ? AND `time` = ?";
//       // // let values = ["tested", "2021.07.24", "A", "10:00"];
//       // let values = [patchData["edit_target"], patchData["date"], patchData["room"], patchData["time"]];
//       // let sql =
//       //   "UPDATE `reserved_data` SET order_status = ? WHERE `order_id` = ? ";
//       let sql =
//         "UPDATE `reserved_data` SET " +
//         target_column +
//         "= ? WHERE `order_id` = ? ";
//       let values = [target_value, order_id];
//       connection.query(sql, values, function (err, result) {
//         if (err) {
//           connection.release();
//           res.status(510).send({
//             status: "error",
//             data: {
//               message: "PATCH ERROR: sql query failed",
//             },
//           });
//           // throw err;
//           console.log(err);
//           return;
//         }
//         connection.release();
//         res.status(200).send({
//           status: "ok",
//           data: {
//             order_id: order_id,
//             message: `${target_column} changed success, value = ${target_value}`,
//           },
//         });
//       });
//     });
//   } catch (err) {
//     connection.release();
//     res.status(500).send({
//       status: "error",
//       data: {
//         message: "PATCH ERROR: reseverd data (server/db error)",
//       },
//     });
//   }
// });

//http://localhost:3100/api/user
app.get("/api/user", function (req, res) {
  //get user
  async function selectDataFromEmail() {
    //insert data
    let sql = "SELECT * FROM users WHERE email = ?";
    let values = [req.session.email];
    let dataList = await query(sql, values);
    return dataList;
  }

  async function getDataFromDB() {
    if (req.session.email === undefined) {
      res.status(200).send({
        status: "ok",
        data: {
          result: null,
          message: "Please login first.",
        },
      });
      return;
    }

    let dataList = await selectDataFromEmail();
    if (dataList.length > 0) {
      res.status(200).send({
        status: "ok",
        data: {
          result: dataList,
          message: "User login success",
        },
      });
    }
    res.status(500).send({
      status: "error",
      data: {
        message: "GET ERROR: user (server/db error)",
      },
    });
  }

  getDataFromDB();
});

app.post("/api/user", function (req, res) {
  const postData = req.body.data;
  const name = postData["name"];
  const email = postData["email"];
  const password = postData["password"];

  async function selectDataFromEmail() {
    let sql = "SELECT * FROM users WHERE email = ?";
    let values = [email];
    let dataList = await query(sql, values);
    return dataList;
  }

  async function insertData() {
    //insert data
    let sql = "INSERT INTO users (name, email, password) VALUES ?";
    let values = [[name, email, password]];
    let dataList = await query(sql, [values]);
    return dataList;
  }

  async function postDataToDB() {
    let isRegisterFailed = false;
    let errorMsg = "";
    //check the data exist
    if (name === "" || email === "" || password === "") {
      isRegisterFailed = true;
      errorMsg += "Error! The column(s) is/are empty.";
    }
    //TODO: 正則表達確認email地址合法性
    // else if{
    //   regexEmail.search(email) == None:
    //   isRegisterFailed = True
    //   errorMsg += "Error! This email address is invalid."
    // }
    else if (name.length > 255 || password.length > 255) {
      isRegisterFailed = true;
      errorMsg += "Error! This name or password is too long.";
    }

    let dataList = await selectDataFromEmail();
    if (dataList.length > 0) {
      errorMsg += "The email already exists.";
      isRegisterFailed = true;
    }
    if (isRegisterFailed) {
      res.status(400).send({
        status: "error",
        data: {
          message: errorMsg,
        },
      });
      return;
    }
    dataList = await insertData();
    if (dataList.affectedRows > 0) {
      res.status(200).send({
        status: "ok",
        data: {
          message: "Register success",
        },
      });
    }

    res.status(500).send({
      status: "error",
      data: {
        message: "POST ERROR: user (server/db error)",
      },
    });
  }

  postDataToDB();
});

app.patch("/api/user", function (req, res) {
  //login user
  const patchData = req.body.data;
  const email = patchData["email"];
  const password = patchData["password"];

  async function selectDataFromEmailAndPassword() {
    //insert data
    let sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    let values = [email, password];
    let dataList = await query(sql, values);
    return dataList;
  }

  async function getDataFromDB() {
    let dataList = await selectDataFromEmailAndPassword();
    if (dataList.length === 1) {
      req.session.email = email; //use email as session content
      res.status(200).send({
        status: "ok",
        data: {
          message: "login success",
        },
      });
      return;
    }

    res.status(400).send({
      status: "error",
      data: {
        message: "Email or Password incorrect.",
      },
    });
  }

  getDataFromDB();
});

app.delete("/api/user", function (req, res) {
  //logout
  req.session.destroy();
  res.status(200).send({
    status: "ok",
    data: {
      message: "User logout success",
    },
  });
});

app.listen(3100, function () {
  console.log("Server Started");
});

/* example
//http:localhost:3100/?data=3
app.get('/', function (req, res) {
  req.session.myname = 'lyc';

  let num = req.query.data;
  // res.send('Hello, express' + num);
  res.send({
    data: num,
  });
});
//http:localhost:3100/name?data=3
app.get('/name', function (req, res) {
  console.log(req.session.myname);
  let num = req.query.data;
  res.send('Hello, express' + num + ',' + req.session.myname);
});

app.post('/', function (req, res) {
  res.send('Hello Post Methods');
});

app.get('/test', function (req, res) {
  res.send('Hello, test');
});
*/
