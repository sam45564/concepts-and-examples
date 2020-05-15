// Creating objects using 'Object Literals Syntax'
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log("Draw a circle");
    }
};
circle.draw();

// Creating object using 'Factory Function'
function createCircle(rad) {
    return {
        radius: rad,
        draw: function () {
            console.log(`Drawing a circle of radius ${this.radius}`);
        }
    };
}
const newCircle = createCircle(1);
newCircle.draw();

// Creating object using 'Construction Function'
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log(`Drawing another circle with radius ${this.radius}`);
    }
}
const anotherCircle = new Circle(2);
anotherCircle.draw();