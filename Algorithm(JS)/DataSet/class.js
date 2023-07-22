// 1. 선언
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
  // Method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
}

let emil = new Student("Emil", "Katz", 3);

console.log(emil.firstName);
console.log(emil.fullName());
