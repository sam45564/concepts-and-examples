// In TS, if there is a variable starts with type 'any' but down the line if we
// initialize it with some specific primitve data type, then there is chance that
// TSC won't be able to throw the intellisense based on the data type initialized 
// to that variable. So, here we use type assertions to achieve this and the following
// two appraoches exhibits how to achieve that.
// NOTE: This assertions doesn't change the way they behave in memory but it's an 
//       information to TSC and telling it how to deal with it at compile time and run time.
let message;
message = "abc";

// Approach 1
let endsWithC = (<string>message).endsWith('c');

// Approach 2
let altWay = (message as string).endsWith('c');
