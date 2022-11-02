"use strict";
//functions
function greet(name) {
    if (typeof name !== "string")
        throw "Write a name";
    console.log(`Hello ${name.toUpperCase()} !!`);
}
;
function greet2(name) {
    if (typeof name !== "string")
        throw "Write a name";
    console.log(`Hello ${name.toUpperCase()} !!`);
}
;
greet("intelligent dnb");
// greet(3) / / error
// greet(true) // error
function getNumber() {
    return Math.floor(Math.random() * 100);
}
;
function getNumber2() {
    return Math.floor(Math.random() * 100);
}
;
// console.log(getNumber());
function printPosition(position) {
    console.log(`Latitude and Longitude from ${position.city.name} are: LAT ${position.lat} LONG ${position.long}`);
}
;
const PSS = {
    city: { name: "Posadas" },
    lat: 88.76,
    long: "22.37"
};
printPosition(PSS);
