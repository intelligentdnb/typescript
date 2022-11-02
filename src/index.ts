//Basic Types
let myTypeString: string = "Hello world"
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = true;


//Array
let arrNumber: number[] = [1, 2, 3];
let arrNumber2: Array<number> =[1, 2, 3];

let arrStrings: string[] = ["Uno", "Dos", "Tres"];

let arrAny: any[] = [true, "dos", 3];


//Tuple
let tuplePlayers: [string, number, boolean] = ["Ortega", 2, true];


//Tuple Array
let players: [number, string][];

players = [
    [1, "Cavenaghi"],
    [2, "Dominguez"],
    [3, "Trezeguet"],
];

//variables

let myVariable;

let myVariable1: string;

let myVariable2 = "Hola mundo!";

let myVariable3: number = 33;

let myVariable4 = true;

// Unions types

let unionVariable: string | number | null;
// unionVariable = true     DA ERROR;
unionVariable = null;

// 

