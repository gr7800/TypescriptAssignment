// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number

interface guddu {
    [index:number]:{title: string;
    status: boolean;
    id: number;}
}

interface obj1 {
    title: string;
    status: boolean;
    id: number;
}

type OBJ = obj1[];

function printobj(pt:obj1){
    console.log(pt);
}

printobj({title:"guddu",status:true,id:5 });

const A1: Array<{
    id: number;
    name: string;
    employed: boolean;
}> = [
        { id: 1, name: "Name1", employed: true },
        { id: 2, name: "Name2", employed: false },
        { id: 3, name: "Name3", employed: true },
    ];


    // create a function getName
    // it should accept an object firstname and lastname
    // it should return fullname
    // keep lastname optional.
    // if lastname does not exist then return only firstname
    // make a interface for it

interface obj2{
    firstname:string;
    lastname?:string;
}

function getName (pt:obj2){
    return(`${pt.firstname}+${pt.lastname}`);
}

getName({firstname:"guddu",lastname:"tiwari"})


// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types

interface Address {
    houseNumber:number;
    street:string;
    city: string;
    state: string;
    postalCode : number;
    country:string;
}


// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

interface PersonDetails{
    prefix ? : [];
    phone:number;
    addresses:[];
    email?:string;
    firstname:string;
    lastname:string;
    middlename?:string;
}


// create a function PhoneBook
// it should accept PersonDetails type argument
// create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
// Push the PersonDetails object in the array, from the function.

interface gtt{
    name:string;
    age:number
}

const arr: gtt[] = [];

const temp :gtt={
    name:"guddu",
    age:5
}

function PhoneBook({a1}){
  arr.push(a1);
}

