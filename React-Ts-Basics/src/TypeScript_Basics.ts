let userName: string;
userName = 'Max';


let userAge : number = 34;

let isValid = false;
isValid = true;

//type StringOrNum = string | number; this can also be used with userId Type

let userId: string | number = 'abc1';
userId = 123;

//let user: object;

let user: {
    name: string,
    age: number,
    isAdmin : boolean,
    id: string | number
}


user = {
    name: 'Mali',
    age: 15,
    isAdmin : true,
    id: 124
}

type User = {
    name: string,
    age: number,
    isAdmin : boolean,
    id: string | number
}


let user2 : User = {
    name: 'Mali',
    age: 15,
    isAdmin : true,
    id: 124
}

//let hobbies: string[] is same thing
let hobbies: Array<string>;
hobbies = ["Sports", "Cooking", "Reading"]

function add(a:number, b:{number : number}) : void //undefined can also be used
{
    const result = a + b.number;
}

function add2(a:number, b:number) : number //undefined can also be used
{
    const result = a + b;
    return result;
}

type AddFn =  (a: number, b : number) => number;

//function calculate (a: number, b: number, calcFn: (a: number, b : number) => number ){ also can be used
function calculate (a: number, b: number, calcFn: AddFn){

    calcFn(a,b);
}

calculate(2,5,add2);


interface Credentials { //only can be use to create object types comparing "type" keywprd
    password: string;
    email: string;
}

//interface Credentials{ like we can add extra parameter into previously created interface without not need to adding the original one
//    mode: string
//}

let creds: Credentials;

creds = {
    password:'abc',
    email:'abc@gmail.com'
}

class AuthCredentials implements Credentials{
    email: string;
    password: string;
    userName: string;
}

function login(credentials: Credentials){

}

login(new AuthCredentials())

type Admin = {
    permissions:string[]
};

type AppUser = {
    userName: string;
}

type AppAdmin = {
    permissions: string[];
    username: string;
}

type AppAdmin2 = Admin & AppUser;//combination of 2 types, same with upper one

let admin : AppAdmin2;

admin={
    permissions: ['login'],
    userName: 'Fatih'
}

interface Admin3{
    permissions: string[];
}

interface AppUser2{
    userName:string;
}

interface AppAdmin3 extends Admin3, AppUser2{}

let admin2 : AppAdmin3;

admin2={
    permissions: ['login2'],
    userName: 'Fatih2'
}

type Role = 'admin' | 'user'  | 'editor';

//let role: 'admin' | 'user'  | 'editor';

let role : Role;

role = 'admin';
role = 'user';
role = 'editor';

function performAction(action:string | number, role: Role){
    if (role === 'admin' && typeof action === 'string'){
    }
}

   
  function login2(u: User | Admin) {
    //if (typeof u === typeof User) { It doesnt work because User is type not a value
    if ('permissions' in u) {
      // do something
    }
  }

 let roles: Array<Role>;
 roles=['admin','editor']

 type DataStorage<T> = {
    storage: T[];
    add: (data:T) => void;
 }

 const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data)
    }
 }

 const userStorage: DataStorage<User> = {
    storage: [],
    add(user) {
        this.storage.push(user)
    }
 }

 function merge<T, U>(a: T, b: U){

    return {
        ...a,
        ...b
    }
 }

 const user3 = merge<{name:string},{age:number}>({name:'Fatih'},{age:35});

 const user4 = merge({name:'Fatih'},{age:35}); //same thing with upper one

