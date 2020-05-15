// JS supports two value types: by value and by reference
// By value consists of primitive data types like string, boolean, number, symbol, null, undefined
// By reference consists of derived data types like Object, Function and Array

// Here, y is independent of x and thus the value is intialized. 
// So, when x is changed y will retain it's original value. This is PASS BY VALUE
let x = 10;
let y = x;
x = 20;
console.log(x, y);

// Next, x is a dervied data type; here object in this case. So, x actually stores the address
// to that object and thus, when y initializes with x it basically refers to the same memory address
// as x does.
let a = { value: 10 };
let b = a;
a.value = 20;
console.log(a, b);

// In next example, when we pass a value as an argument having a primitive data type, it is passed as
// by value. So, when number is passed to the function 'increment', even though the argument names are same
// in reality the value is passed irrespective of what the name is. So, we are passing the value to the 
// function increment but after incrementing the value it losses it's scope once the function scope ends.
let number = 10;
function increment(number) {
    number++;
}
increment();
console.log(number);

// Similarly, when we pass an object to the function, we are actually passing the reference of the memory location
// and it thus operates on the values of the memory location. So, even if the scope changes the operation values
// remain there. It doesn't matter what names we are using in the arguments. Behind the scene, it works on 
// the memory location.
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);
