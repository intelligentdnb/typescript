// Type assertion of variable to string
let channel : any = "TypeScript";

let channelStr = <string>channel;    // with <>

let channelStr1 = channel as string; // with as 

// getting a Canvas element from HTML
const myCanvas = <HTMLCanvasElement>document.getElementById("graphic");

const myCanvas2 = document.getElementById("main") as HTMLCanvasElement;