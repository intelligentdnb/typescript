                   //functions

function greet (name: string) {
    if(typeof name !== "string") throw "Write a name";
    console.log(`Hello ${name.toUpperCase()} !!`);
};
function greet2 (name: string = "User"):void {
    if(typeof name !== "string") throw "Write a name";
    console.log(`Hello ${name.toUpperCase()} !!`);
};

greet("intelligent dnb");
// greet2();     // Saluda a User por defecto
// greet(3)     // error
// greet(true) // error

 function getNumber ():number {
    return Math.floor(Math.random() * 100);
 };

 function getNumber2 () {
    return Math.floor(Math.random() * 100);
 };

// console.log(getNumber());

function printPosition(position: {city: { name: string }, lat: number, long: number | string }):void {
    console.log(`Latitude and Longitude from ${position.city.name} are: LAT ${position.lat} LONG ${position.long}`);
};

const PSS = {
    city: {name: "Posadas",
           tracked: true
          },
    lat: 88.76,
    long: "22.37"
}

printPosition(PSS);










