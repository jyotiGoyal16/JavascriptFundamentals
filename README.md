# JavascriptFundamentals

Javascript fundamentals includes some of the main concepts of javascript that are very important.

call() - This method is used to call a function with a given "this" context and arguments that are passed individually(comma separated values).

apply() - This method is similar to the call() method but instaed of passing the arguments individually, it passes the argument as an array.

bind() - This is also similar to call() method but instaed of executing the function immediately, it return us a copy of the function that we can call later in the code as per our requirement.

These above three methods help us in achieving the concept of function borrowing in javascript.

Function borrowing - In JavaScript, sometimes it’s desirable to reuse a function or method on a different object other than the object or prototype it was defined on. By using call(), apply() and bind(), we can easily borrow methods from different objects without having to inherit from them.

polyfill for bind()- In javascript it may happen that some browser do not have their own implememntation of the bind method. So the polyfill for bind is our own implementation of bind() method.

Function currying- It is the concept of trasforming the function with multiple arguments into the same function with less arguments. To achieve this we bind some argumentss to the first function invocation so that those values are fixed for the next invocation. And then we can pass different agrumentss to the next invocation to get the desired output.

We are achieveing this function currying by two methods- bind and closure.

Debounce - Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, 
that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

Async/Defer script- 

![asyncDeferScript](asyncDeferScript.png)
