var Name = "guddu";
var age = 20;
var married = false;
var A = [1, 2, 3, 4];
var B = ["guddu", "suddu", "shaurbha"];
var c1 = [
    ['a', true],
    ['b', false],
    ['c', true]
];
// create a tuple , which keeps a string as the first value, and boolean as the second
var d1 = ["guddu", 5];
var d2 = [
    ["jay", true],
    ["vijay", false],
    // [true,'jay']
];
// create an enum
// it should have User, SuperUser, Admin, SuperAdmin
var E;
(function (E) {
    E[E["user"] = 0] = "user";
    E[E["superuser"] = 1] = "superuser";
    E[E["admin"] = 2] = "admin";
    E[E["superadmin"] = 3] = "superadmin";
})(E || (E = {}));
var F = {
    kind: E.user,
    username: "guddu"
};
var G = {
    kind: E.superuser,
    username: "guddu"
};
var H = {
    kind: E.admin,
    username: "guddu"
};
var I = {
    kind: E.superadmin,
    username: "guddu"
};
// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
var J = function (x, y) { return x * y; };
var product = function (a, b) {
    console.log(a * b);
};
product(5, 7);
// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
var K = function (x, y) { return x / y; };
var divide = function (a, b) {
    return (a / b);
};
divide(2, 5);
// create a function that takes a name and prints it without returning anything
var L = function (name) {
    console.log(name);
};
L("guddu");
