function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  
}
Student.prototype.setSubject = function (subjectName) {
this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
if (this.marks === []) {
  this.marks = [mark];
}  else {
  this.marks.push(mark)
} 
}
  Student.prototype.addMarks = function (...marks) {
    if (this.marks === []) {
      this.marks = marks;
    } else {
       this.marks = this.marks.concat(marks);
    }
  }
  Student.prototype.getAverage = function (getAverage) {
    if (this.marks === []){
      return 0;
    } else {
      return this.marks.reduce( ( a, v ) => a + v, 0 ) / this.marks.length;
    }
  }
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
