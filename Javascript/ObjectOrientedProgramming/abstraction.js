// Abstraction is basically 'hiding the complexity, showing the essential'
// For example, consider a DVD player. A DVD player hides the circuit complexity
// by showing only essentials functions in form of external buttons on the device.
// Similary, in true OOPs concept, we should only expose those properties or methods
// to others which are absolutely essential and hide all the other properties and methods
// from public interface.

// So, in JS it is simple to hide the properties and methods from external access, or in 
// other words make them 'private'; is by not assigning them with 'this' keyword.
// Thus, in simple terms, declare properties and methods that are private as normal variables
// or functions instead of assigning them with 'this' keyword.
function Circle(radius) {
    this.radius = radius;
    let location = { x: 1, y: 1 };
    let computeOptimumLocation = function (factor) {
        // do something here
    }
    this.draw = function () {
        location = { x: 4, y: 5 };
        computeOptimumLocation(2);
        console.log(`Drawing another circle with radius ${this.radius}`);
    }
}

// NOTE:
// In above example draw has 'closure'.
// The main difference between a 'scope' and 'closure' is that, in closure the variables and functions
// maintain their state in the memory even after the execution is over; whereas the scope looses it state
// once the execuction is over.