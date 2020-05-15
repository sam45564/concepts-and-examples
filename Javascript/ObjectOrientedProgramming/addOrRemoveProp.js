function Circle() {
    this.draw = function () {
        console.log(`Drawing a circle`);
    }
}

let circle2 = new Circle();

// Initialize circle either with a '.' operator or '[prop]' operator.
circle2.radius = 1;
circle2['location'] = { x: 1, y: 1 };

console.log(circle2);

delete circle2.radius;
delete circle2['location'];

console.log(circle2);