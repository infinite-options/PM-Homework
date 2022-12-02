function f() {
  var name = Student.name;
  var age = Student.age;
  var dept = Student.dept;
  var score = Student.score;

  var str = "Name:" + name + "\nAge: " + age + "\nDepartment:" + dept + "\nScore: " + score;

  document.getElementById("text").innerHTML = str;
}
