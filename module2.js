var http = require("http");
const { Student } = require("./module1.js");

var Hostel = {
  student_count: 500,
  no_of_rooms: 250,
  hostel_fees: 12000,
};

var Hostel_Allocation = {
  room_no: 151,
  student_name: Student.name,
  student_age: Student.age,
  student_dept: Student.dept,
  total_fees: 12000,
};

var str = "Room No: " + Hostel_Allocation.room_no + "\nStudent Name: " + Hostel_Allocation.student_name + "\nTotal Fees: " + Hostel_Allocation.total_fees;

http
  .createServer(function (req, res) {
    res.write(str);
    res.end();
  })
  .listen(8080);
