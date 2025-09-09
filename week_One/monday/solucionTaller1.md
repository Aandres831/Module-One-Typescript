# Solución Taller Lunes 08/09/2025

# Parte 1: Tipos primitivos
## Ejercicio 1.1
Declarando variables de varios tipos

```ts
let username: string = "Íker";
let price: number = 2500;
let  boolean = "True";
let isNull: null = null;
let isUndefined: string | undefined;
```
## Ejercicio 1.2

```ts
let role: "admin" | "editor" | "viewer";
```

# Parte2: Objetos tipados con interfaces

## Ejercicio 2.1

```ts
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

```

## Ejercicio 2.2

### Interfaz con campo opcional

```ts
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

```

# Parte 3: Props opcionales y readonly


## Ejercicio 3.1

```ts
interface User {
    readonly id: number;
    name: string;
    lastName: string;
    email: string;
    cc: number;
    phone?: string;
}

const user: User = {
    id: 1,
    name: "Andrés",
    lastName: "Severino",
    email: "andres@example.com",
    cc: 1234567890,
    phone: "+57 3001234567"
};

console.log(user.id);

user.id = 2;

Cannot assign to 'id' because it is a read-only property.

```


## Ejercicio 3.2

```ts
interface User {
    readonly id: number;
    name: string;
    lastName: string;
    email: string;
    cc: number;
    phone?: string;
    nickname?: string;
}

condición ? valorSiTrue : valorSiFalse

function mostrarNickname(user: User): string {
  return user.nickname ? user.nickname : user.name;
}


const conNickname: User = {
    id: 1,
    name: "Andrés",
    lastName: "Severino",
    email: "andres@example.com",
    cc: 1234567890,
    nickname: "Andy"
};

const sinNickname: User = {
    id: 2,
    name: "Camila",
    lastName: "Ramírez",
    email: "camila@example.com",
    cc: 9876543210
};


console.log(showUser(conNickname));    //= "Andy"
console.log(showUser(SinNickname)); // = "Camila"

```

# Parte 4: Interfaces anidadas

## Ejercicio 4.1


```ts
interface Address {
    street: string;
    city: string;
    country: string;
}

//Revisar la interfaz

interface User {
    readonly id: number;
    name: string;
    lastName: string;
    email: string;
    cc: number;
    phone?: string;
    nickname?: string;
    address?: Address; 
}
```


## Ejercicio 4.2
```ts
//User10 con dirección completa

const user10: User = {
  id: 10,
  name: "Laura",
  lastName: "Gómez",
  email: "laura.gomez@example.com",
  cc: 1122334455,
  phone: "+57 3019876543",
  nickname: "Lau",
  address: {
    street: "Calle 45 #12-34",
    city: "Medellín",
    country: "Colombia"
  }
};

```

# Parte 5: Funciones tipadas

## Ejercicio 5.1

```ts
function showNameAndEmail(user: User): string {
    return `${user.name} ${user.lastName} - ${user.email}`;
}

const userExample: User = {
    id: 20,
    name: "Andrés",
    lastName: "Severino",
    email: "andres@example.com",
    cc: 1234567890
};

console.log(showNameAndEmail(userExample));

```
## Ejercicio 5.2


```ts
interface Scores {
    [subject: string]: number; 
}

interface User {
    readonly id: number;
    name: string;
    lastName: string;
    email: string;
    cc: number;
    phone?: string;
    nickname?: string;
    address?: Address;
    scores?: Scores; 
}

function addScore(user: User, subject: string, score: number): void {
    if (!user.scores) {
        user.scores = {}; 
    }
    user.scores[subject] = score;
}


const user10: User = {
    id: 10,
    name: "Laura",
    lastName: "Gómez",
    email: "laura.gomez@example.com",
    cc: 1122334455
};

addScore(user10, "Matemáticas", 95);
addScore(user10, "Historia", 88);

console.log(user10.scores);
// → { Matemáticas: 95, Historia: 88 }

```

# Parte 6: Interfaces para props de componentes

## Ejercicio 6.1


```ts
interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

function renderButton(props: ButtonProps): string {
    return props.disabled ? `[X] ${props.label}` : `[ ] ${props.label}`;
}

const btn1: ButtonProps = { label: "Enviar", disabled: true };
const btn2: ButtonProps = { label: "Cancelar" };

console.log(renderButton(btn1));
console.log(renderButton(btn2));

```


# Parte 7: Extender interfaces

## Ejercicio 7.1



```ts
interface Admin extends User {
    permissions: string[];
}


```

## Ejercicio 7.2

```ts

function isAdmin(user: User | Admin): user is Admin {
    return (user as Admin).permissions !== undefined;
}

const normalUser: User = {
    id: 1,
    name: "Andrés",
    lastName: "Severino",
    email: "andres@example.com",
    cc: 1234567890
};

const adminUser: Admin = {
    id: 2,
    name: "Camila",
    lastName: "Ramírez",
    email: "camila@example.com",
    cc: 9876543210,
    permissions: ["manage_users", "edit_content"]
};

console.log(isAdmin(normalUser)); 
console.log(isAdmin(adminUser)); 

```













