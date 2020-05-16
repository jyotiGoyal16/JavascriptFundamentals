/*Function currying is the concept of trasforming the function with multiple args into the same function with
with less args. To achieve this we bind some args to the first function invocation so that those values are fixed for the next invocation.
And then we can pass different agrs to the next invocation to get the desired output.

In this code we are doing function currying by two methods- using bind and closure.
*/
let multiply = function(x, y){
    console.log(x*y);
}

//Using bind method
let multiplyByTwo = multiply.bind(this, 2); //first invocation we fix the args 2
multiplyByTwo(5);                           //Second invocation, we can pass any value we want and we will get the multiplication by two
multiplyByTwo(9);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

//Using closure- closure is when a function return a function and the inner function is still having the access to its parent scope even if it is running outside the scope
let multiply1 = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyTwo = multiply1(2);
multiplyTwo(3);
multiplyTwo(6);