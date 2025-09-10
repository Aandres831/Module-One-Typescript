
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

// NumFizzBuzz(50);


//02. Usando forEach

// const names: string[] = ["Ana", "Luis", "Carlos", "María"];

// function saludoNombre (){
//     names.forEach(name => {
//         console.log("Hola",name,"bienvenido/a al sistema.");
//     });
// }

// saludoNombre();

//03. Filtrado en Typescript
interface Student {
    name: string;
    grade: number;
    }

const students: Student[] = [
    { name: "Ana", grade: 85 },
    { name: "Luis", grade: 45 },
    { name: "María", grade: 70 },
    { name: "Carlos", grade: 35 }
];

function studentsAprove(arrayStudents: Student[]): Student[] {
    const studentsList = arrayStudents.filter((student) => {
        if ("grade" in student) {
        if (student.grade >= 60) {
            return student;
        }
        }
    });

    return studentsList;
}

const functionResult = studentsAprove(students);
console.log(functionResult);
