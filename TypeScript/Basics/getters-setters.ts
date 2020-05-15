// In OOPs principle, the private members are not allowed to be modified from
// outside and if we do not provide a way to fetch the value, it can't be read from
// outside. But, we can use GETTER/SETTERS to achieve this. Although, setter is totally
// situation dependent, but we can implement it.
// In order to achieve this, we need to follow the convention of declaring private members
// starting with an underscore which makes the reader of the code understand that it's a 
// private member. 
class Point {
    constructor(private _x: number, private _y: number) { }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0.");
        }
        this._x = value;
    }
}

let point = new Point(1, 2);
point.x = 3;
console.log(point.x);