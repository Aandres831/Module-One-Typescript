let username: string = "Carlos";
let price: number = 2500;
let  boolean = "True";
let isNull: null = null;
let isUndefined: string | undefined;

//

let role: "admin" | "editor" | "viewer";


//interfaz

interface User {
    id: number;
    name: string;
    email: string;
    cc: number;
    lastName: string
}

//Object1
const user1: User = {
    id: 1,
    name: "Andrés",
    lastName: "Severino",
    email: "andres@example.com",
    cc: 1234567890
};

//object2
const user2: User = {
    id: 2,
    name: "Camila",
    lastName: "Ramírez",
    email: "camila@example.com",
    cc: 9876543210    
};


//object3
const user3: User = {
    id: 3,
    name: "Juan",
    lastName: "Pérez",
    email: "juan@example.com",
    cc: 4567891230
};


// 2.1

interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    cc: number;
    phone?: string; //opcional
}


//Con tel
const userWithPhone: User = {
    id: 1,
    name: "Andrés",
    lastName: "Severino",
    email: "andres@example.com",
    cc: 1234567890,
    phone: "+57 3001234567"
};

//Sin tel
const userWithoutPhone: User = {
    id: 2,
    name: "Camila",
    lastName: "Ramírez",
    email: "camila@example.com",
    cc: 9876543210
};

//Martes

let numeros:number[] = [0,1,2,3,4,5,6,7,8,9]

console.log(numeros[1]);
console.log(numeros[1]);

