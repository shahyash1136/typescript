"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    //return 'hello'
}
function getUpper(val) {
    return val.toLowerCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper('yash');
signUpUser("yash", 'yash@test.com', false);
loginUser('h', 'h@h.com');
/* function getValue(myValue: number): boolean {
    if (myValue > 5) {
        return true
    }
    return "200 ok"
} */
var getHello = function (s) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
//const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function cosoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
