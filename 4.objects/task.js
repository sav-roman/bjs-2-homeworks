function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const studentAlex = new Student('Alex', 'male', 23);
const studentAnna = new Student('Anna', 'female', 20);
//console.log(studentAlex, ' ', studentAnna);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if ( !(this.hasOwnProperty('marks')) ) {
    console.log('Студент отчислен.');
    return 0;
  }
  this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function () {
  if ( !(this.hasOwnProperty('marks')) || (this.marks.length === 0) || (this.marks === undefined)) {
    return 0;
 }
  return (this.marks.reduce( (pValue, cValue) => pValue + cValue )) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
