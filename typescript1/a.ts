const Name: string = "guddu";


const age: number = 20;
const married : boolean = false;
const A:Array<number>= [1,2,3,4];
const B:Array<string>=["guddu","suddu","shaurbha"];

// tupple
type c = [string,boolean];

let c1:c[]=[
    ['a',true],
    ['b',false],
    ['c',true]
]

// create a tuple , which keeps a string as the first value, and boolean as the second

const d1:[string,number]=["guddu",5];
const d2:Array<[string,boolean]>=[
    ["jay",true],
    ["vijay",false],
    // [true,'jay']
];


// create an enum
// it should have User, SuperUser, Admin, SuperAdmin

enum E {
    user,
    superuser,
    admin,
    superadmin,
}
interface user{
    kind: E.user;
    username:string;
}
interface superuser{
    kind: E.superuser;
    username:string;
}
interface admin{
    kind: E.admin;
    username:string;
}
interface superadmin{
    kind: E.superadmin;
    username:string;
}

const F:user={
    kind:E.user,
    username:"guddu",
}

const G:superuser={
    kind:E.superuser,
    username:"guddu",
}

const H:admin={
    kind:E.admin,
    username:"guddu",
}

const I:superadmin={
    kind:E.superadmin,
    username:"guddu",
}

// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers

const J = (x: number, y: number): number => x * y;

const product =(a:number, b:number):void=>{
    console.log(a*b);
}

product(5,7);

// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )

const K = (x: number, y: number): number => x / y;
const divide =(a:number, b:number):number=>{
    return(a/b);
}

divide(2,5);

// create a function that takes a name and prints it without returning anything

const L =(name:string):void=>{
    console.log(name);
}

L("guddu");