# JavascriptFundamentals

Javascript fundamentals includes some of the main concepts of javascript that are very important.

call() - This method is used to call a function with a given "this" context and arguments that are passed individually(comma separated values).

apply() - This method is similar to the call() method but instaed of passing the arguments individually, it passes the argument as an array.

bind() - This is also similar to call() method but instaed of executing the function immediately, it return us a copy of the function that we can call later in the code as per our requirement.

These above three methods help us in achieving the concept of function borrowing in javascript.

Function borrowing - In JavaScript, sometimes it’s desirable to reuse a function or method on a different object other than the object or prototype it was defined on. By using call(), apply() and bind(), we can easily borrow methods from different objects without having to inherit from them.

![asyncDeferScript](asyncDeferScript.png)
