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
  req.session.myname = "lyc";
  let date = req.query.data.date;
  let order_id = req.query.data.order_id;
  let sqlStr = "";
  let values = [];
  let varName = "";
  if (date !== undefined) {
    varName = "date";
    sqlStr += sqlStr === "" ? ` ${varName} = ?` : ` AND ${varName} = ?`;
    values.push(date);
  }
  if (order_id !== undefined) {
    varName = "order_id";
    sqlStr += sqlStr === "" ? ` ${varName} = ?` : ` AND ${varName} = ?`;
    values.push(order_id);
  }
  if (sqlStr === "" || values.length === 0) {
    res.status(500).send({
      data: {
        status: "ERROR",
        postData: {
          status: "error",
          message: "GET ERROR: the query is null!",
        },
      },
    });
    return;
  }
  try {
    pool.getConnection(function (err, connection) {
      if (err) {
        connection.release();
        res.status(510).send({
          data: {
            status: "ERROR",
            postData: {
              status: "error",
              message: "GET ERROR: not connected!",
            },
          },
        });
        // throw err;
        console.log(err);
        return;
      }
      // let sql = 'SELECT * FROM reserved_data WHERE date = ? AND room = ?';
      // let values = [date, room];

      // let sql = "SELECT * FROM reserved_data WHERE date = ?";
      // let values = [];
      // values.push(date);

      let sql = "SELECT * FROM reserved_data WHERE" + sqlStr;

      connection.query(sql, values, function (err, result) {
        if (err) {
          connection.release();
          res.status(510).send({
            data: {
              status: "ERROR",
              postData: {
                status: "error",
                message: "GET ERROR: sql query failed",
              },
            },
          });
          // throw err;
          console.log(err);
          return;
        }
        connection.release();
        res.status(200).send({
          status: "ok",
          data: {
            result: result,
            message: "Applied success",
          },
        });
      });
    });
  } catch (err) {
    connection.release();
    res.status(500).send({
      data: {
        status: "ERROR",
        postData: {
          status: "error",
          message: "GET ERROR: reseverd data (unknown error)",
        },
      },
    });
  }
});
app.post("/reservation_data", function (req, res) {
  const postData = req.body.data;
  try {
    pool.getConnection(function (err, connection) {
      if (err) {
        connection.release();
        res.status(510).send({
          data: {
            status: "ERROR",
            postData: {
              status: "error",
              message: "POST ERROR: not connected!",
            },
          },
        });
        // throw err;
        console.log(err);
        return;
      }
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
      connection.query(sql, values, function (err, result) {
        if (err) {
          connection.release();
          res.status(510).send({
            data: {
              status: "ERROR",
              postData: {
                status: "error",
                message: "POST ERROR: sql query failed (check same data)",
              },
            },
          });
          // throw err;
          console.log(err);
          return;
        }
        if (result.length === 1) {
          isExist = true;
        }
        connection.release();
      });
      if (isExist) {
        return;
      }
      //Insert
      const order_id =
        postData["room"] +
        postData["start_time"].replace(/:/g, "") +
        postData["attendence"] +
        postData["date"].replace(/-/g, "") +
        postData["phone"]; //room, start_time, attendence, date, phone

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
      connection.query(sql, [values], function (err, result) {
        if (err) {
          connection.release();
          res.status(510).send({
            data: {
              status: "ERROR",
              postData: {
                status: "error",
                message: "POST ERROR: sql query failed (modified the data)",
              },
            },
          });
          // throw err;
          console.log(err);
          return;
        }
        connection.release();
        res.status(200).send({
          status: "ok",
          data: {
            order_id: order_id,
            message: "Applied success",
          },
        });
      });
    });
  } catch (err) {
    connection.release();
    res.status(500).send({
      data: {
        status: "ERROR",
        postData: {
          status: "error",
          message: "POST ERROR: reseverd data (unknown error)",
        },
      },
    });
  }
});

//[PATCH]
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
  try {
    pool.getConnection(function (err, connection) {
      if (err) {
        connection.release();
        res.status(510).send({
          data: {
            status: "ERROR",
            postData: {
              status: "error",
              message: "PATCH ERROR: not connected!",
            },
          },
        });
        // throw err;
        console.log(err);
        return;
      }
      // let sql =
      //   "UPDATE `reserved_data` SET order_status = ? WHERE `date` = ? AND `room` = ? AND `time` = ?";
      // // let values = ["tested", "2021.07.24", "A", "10:00"];
      // let values = [patchData["edit_target"], patchData["date"], patchData["room"], patchData["time"]];
      // let sql =
      //   "UPDATE `reserved_data` SET order_status = ? WHERE `order_id` = ? ";
      let sql =
        "UPDATE `reserved_data` SET " +
        target_column +
        "= ? WHERE `order_id` = ? ";
      let values = [target_value, order_id];
      connection.query(sql, values, function (err, result) {
        if (err) {
          connection.release();
          res.status(510).send({
            data: {
              status: "ERROR",
              postData: {
                status: "error",
                message: "PATCH ERROR: sql query failed",
              },
            },
          });
          // throw err;
          console.log(err);
          return;
        }
        connection.release();
        res.status(200).send({
          status: "ok",
          data: {
            order_id: order_id,
            message: `${target_column} changed success, value = ${target_value}`,
          },
        });
      });
    });
  } catch (err) {
    connection.release();
    res.status(500).send({
      data: {
        status: "ERROR",
        postData: {
          status: "error",
          message: "PATCH ERROR: reseverd data (unknown error)",
        },
      },
    });
  }
});

//[DELETE]
app.delete("/reservation_data", function (req, res) {
  let room = req.query.data;
  try {
    pool.getConnection(function (err, connection) {
      if (err) {
        connection.release();
        res.status(510).send({
          data: {
            status: "ERROR",
            postData: {
              status: "error",
              message: "DELETE ERROR: not connected!",
            },
          },
        });
        // throw err;
        console.log(err);
        return;
      }

      let sql =
        "DELETE FROM `reserved_data` WHERE `date` = ? AND `room` = ? AND `time` = ? AND `duration` = ? AND `name` = ?";
      let values = ["2021.07.24", "A", "10:00", 3, "Amyyyyyyy"];

      connection.query(sql, values, function (err, result) {
        if (err) {
          connection.release();
          res.status(510).send({
            data: {
              status: "ERROR",
              postData: {
                status: "error",
                message: "DELETE ERROR: sql query failed",
              },
            },
          });
          // throw err;
          console.log(err);
          return;
        }
        connection.release();
      });
    });
    res.status(200).send("Hello, express" + room + "," + req.session.myname);
  } catch (err) {
    connection.release();
    res.status(500).send({
      data: {
        status: "ERROR",
        postData: {
          status: "error",
          message: "DELETE ERROR: reseverd data (unknown error)",
        },
      },
    });
  }
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
