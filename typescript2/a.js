// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number
function printobj(pt) {
    console.log(pt);
}
printobj({ title: "guddu", status: true, id: 5 });
var A1 = [
    { id: 1, name: "Name1", employed: true },
    { id: 2, name: "Name2", employed: false },
    { id: 3, name: "Name3", employed: true },
];
function getName(pt) {
    return ("".concat(pt.firstname, "+").concat(pt.lastname));
}
getName({ firstname: "guddu", lastname: "tiwari" });
var arr = [];
var temp = {
    name: "guddu",
    age: 5
};
function PhoneBook(_a) {
    var a1 = _a.a1;
    arr.push(a1);
}
