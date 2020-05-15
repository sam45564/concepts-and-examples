// In previous approach where we implemented interfaces (inline-annotation-and-interfaces.ts) 
// for reusability, the problem we had is that it looks clean but lacks the principle of 
// COHESION. Now, we've seen there that the methods who are implementing the interface
// are just polluting the global code space and hanging in the air. So, we can apply principle
// of COHESION and encapsulate them into a single unit which extends reusability and gives more
// meaning.
class Point {
    private x: number;
    private y: number;

    constructor(a?: number, b?: number) {
        this.x = a; this.y = b;
    }

    draw = () => {
        console.log(`(x, y) => (${this.x},${this.y})`);
    };
    getDistance = (another: Point) => {
        console.log(`Calculating distance from (x, y) => (${another.x},${another.y})`);
    }
}

let pointA = new Point(1, 2);
pointA.draw();

// NOTE: The '?' character on constructor params marks those attributes as optional. If we remove
//       that character, it'll become mandatory params.

// ALTERNATIVE FOR CONSTRUCTORS
// In TS, we have an option to shorthand the constructor and param declaration along with their 
// initialization. In TS, when constructor params have ACCESS MODIFIERS they create the variable,
// initialize them and it makes the code more clean.
class Circle {
    constructor(private radius: number) { }
}
let circle = new Circle(3);