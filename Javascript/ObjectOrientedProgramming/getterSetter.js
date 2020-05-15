// There are two ways to use getter and setter for private properties in an object.

// Approach 1: Use custom methods to achieve this.
function Circle(radius) {
    this.radius = radius;
    let location = { x: 1, y: 1 };          // This is the private member

    this.getLocation = function () {
        return location;
    }
    this.setLocation = function (a, b) {
        location = { x: a, y: b };
    }

    this.draw = function () {
        location = { x: 4, y: 5 };
        computeOptimumLocation(2);
        console.log(`Drawing another circle with radius ${this.radius}`);
    }
}

const circleObj = new Circle(10);
circleObj.setLocation(3, 4);
const loc = circleObj.getLocation();
console.log(loc);

// The above approach is correct but it's not clean enough and too verbose.
// Approach 2: Use in-built JS functionality 'defineProperty' to achieve this. This is recommended one.
function MyCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        location = { x: 4, y: 5 };
        computeOptimumLocation(2);
        console.log(`Drawing another circle with radius ${this.radius}`);
    }
    let location = { x: 1, y: 1 };          // This is the private member
    Object.defineProperty(this, 'defaultLoc', {
        get: function () {
            return location;
        },
        set: function (value) {
            // Validation is recommended as we are updating the private member.
            if (!value.x || !value.y) {
                throw new Error("Invalid values for location.");
            }
            location = value;
        }
    });
}

const circleObj1 = new MyCircle(10);
circleObj1.defaultLoc = { x: 20, y: 50 };
const newLoc = circleObj1.defaultLoc;
console.log(newLoc);