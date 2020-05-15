// In some functions we want to pass multiple params to perform it's desired functionality.
// Although as per good programming principles, that is a bad practice. The following is an 
// example of function with long list of params which is principally incorrect.
function myfunc(a, b, c, d, ) { }

// Instead of this, the ideal thing is to pass an object encapsulating all those members.
function draw(point) { }
draw({ x: 1, y: 2 });

// But, again there is a good chance that the functionality inside the function depends on a
// specific type of data and we are going to violate that. For example:
function drawCircle(point) { }
draw({ name: 'Sam' });

// So, we can use INLINE ANNOTATIONS here to define the type of data we are using here.
function drawMyCircle(point: { x: number, y: number }) { }
draw({ x: 1, y: 1 });

// The above approach is correct but it's little verbose and offers less reusability.
// So, in this case we can bring in INTERFACES to make it reusable and more clean.
interface Point {
    x: number,
    y: number
};

function drawRect(point: Point) { }
