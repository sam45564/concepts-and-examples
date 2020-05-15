// Objects can be enumerated in several ways
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log(`Drawing another circle with radius ${this.radius}`);
    }
}
const circle1 = new Circle(2);
// Use for-in loop to iterate over all the key-value pairs of object items
for (let key in circle1) {
    console.log(key, circle1[key]);
}

// Use typeof method to travers only specific type of items; either properties or methods.
for (key in circle1) {
    if (typeof key !== 'function') {
        console.log(key, circle1[key]);
    }
}

// Use in-built Object to fetch the keys
const keys = Object.keys(circle1);
console.log(keys);

// Use 'in' operator to check if an object has a particular key in them
if ('radius' in circle1) {
    console.log('Radius is present as a prop in the object');
}
if ('location' in circle1) {
    console.log('Location is present as a prop in the object');
}