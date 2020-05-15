
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: any[] = [1, true, 'a'];

enum Color { Red = 1, Blue = 2, Green = 3, Purple = 4 };
let g: Color = Color.Blue;
console.log(Color);

// In JS, enum is not there so we have to create constants for that which is verbose
const ColorRed = 1;
const ColorBlue = 2;
const ColorGreen = 3;
const ColorPurple = 4;