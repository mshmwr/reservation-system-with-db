// get the client
const mysql = require("mysql2");
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "wingjan120",
  database: "reservation",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

//create database
// pool.query("CREATE DATABASE reservation", function (err, result) {
//   if (err) throw err;
//   console.log("Database created");
// });

// // Creating a Table
// pool.query(
//   "CREATE TABLE reserved_data (" +
//     "dataid INT AUTO_INCREMENT PRIMARY KEY NOT NULL, " +
//     "room VARCHAR(255) NOT NULL, " +
//     "duration FLOAT NOT NULL, " +
//     "start_time VARCHAR(255) NOT NULL, " +
//     "attendence VARCHAR(255) NOT NULL, " +
//     "date VARCHAR(255) NOT NULL, " +
//     "name VARCHAR(100) NOT NULL, " +
//     "phone VARCHAR(255) NOT NULL, " +
//     "email VARCHAR(255) NOT NULL, " +
//     "order_status VARCHAR(255) NOT NULL, " +
//     "order_id VARCHAR(255) NOT NULL " +
//     ")"
// );

// // Insert
// let sql =
//   "INSERT INTO reserved_data (room, duration, start_time, attendence, date, name, phone, email, order_status, order_id) VALUES ?";
// let values =
//   ("A", 3, "10:00", "6", "2021-07-24", "Amyyyyyyy", "0912345678", "test@gmail.com", "reserved", "0123456788")

// pool.query(sql, [values], function (err, result) {
//   if (err) throw err;
//   console.log("Number of records inserted: " + result.affectedRows);
// });

// // simple query
// pool.query("SELECT * FROM reserved_data", function (err, results, fields) {
//   // console.log(err); // results contains rows returned by server
//   // console.log(results); // results contains rows returned by server
//   // console.log(fields); // fields contains extra meta data about results, if available
//   results.forEach((data) => {
//     console.log(data.date);
//   });
// });

// // with placeholder
// pool.query(
//   "SELECT * FROM `reserved_data` WHERE `date` = ? AND `room` = ?",
//   ["2021-07-24", "A"],
//   function (err, results) {
//     console.log(results);
//   }
// );

// //update
// pool.query(
//   "UPDATE `reserved_data` SET order_status = ? WHERE `date` = ? AND `room` = ? AND `time` = ?",
//   ["delected", "2021-07-24", "A", "10:00"],
//   function (err, results) {
//     console.log(results);
//   }
// );

// //delete
// pool.query(
//   "DELETE FROM `reserved_data` WHERE `date` = ? AND `room` = ? AND `time` = ? AND `duration` = ? AND `name` = ? ",
//   ["2021-07-24", "A", "10:00", 3, "Amyyyyyyy"],
//   function (err, results) {
//     console.log(results);
//   }
// );

// // find data
// pool.query(
//   "SELECT * FROM `reserved_data` WHERE `date` = ? AND `room` = ? AND `time` = ? AND `duration` = ? AND `name` = ? ",
//   ["2021-07-24", "A", "10:00", 3, "Amyyyyyyy"],
//   function (err, results) {
//     console.log(results);
//     console.log(results.length);
//   }
// );
