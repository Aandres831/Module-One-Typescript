//01. FizzBuzz
// function NumFizzBuzz(limite: number): void {
//     for (let i = 1; i <= limite; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//         console.log("Fizz");
//         } else if (i % 5 === 0) {
//         console.log("Buzz");
//         } else {
//         console.log(i);
//         }
//     }
// }
var students = [
    { name: "Ana", grade: 85 },
    { name: "Luis", grade: 45 },
    { name: "María", grade: 70 },
    { name: "Carlos", grade: 35 }
];
function studentsAprove(arrayStudents) {
    var studentsList = arrayStudents.filter(function (student) {
        if ("grade" in student) {
            if (student.grade >= 60) {
                return student;
            }
        }
    });
    return studentsList;
}
var functionResult = studentsAprove(students);
console.log(functionResult);
