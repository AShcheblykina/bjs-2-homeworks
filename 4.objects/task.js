function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  
}
Student.prototype.setSubject = function (subjectName) {
this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
if (this.marks === undefined) {
  this.marks = [mark];
}  else {
  this.marks.push(mark)
} 
}
  Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
      this.marks = marks;
    } else {
       this.marks = this.marks.concat(marks);
    }
  }
  Student.prototype.getAverage = function (getAverage) {
    if (this.marks === undefined){
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
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
