let name = {
  firstName: "Jyoti",
  lastName: "Goyal",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.printFullName();

let name1 = {
  firstName: "abc",
  lastName: "xyz",
};

//function borrowing- take function from one object and use in other object
name.printFullName.call(name1);

//Another way of doing above thing is call, apply and bind method

//in the call method the first argument will always be the "this" reference
//and the next arguments can be the arguments that we need to pass to the calling function

let name2 = {
  firstName: "Jyoti",
  lastName: "Goyal",
};

let printFullName = function (location, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + location + " in " + state
  );
};

printFullName.call(name2, "Bengaluru", "Karnataka");

let name3 = {
  firstName: "abc",
  lastName: "xyz",
};

printFullName.call(name3, "Nagpur", "Maharashtra");

//The apply function takes the first argument as the "this" reference
//the next argumnet it takes is the array of arguments to pass to the calling functon

//The difference between call and apply is that the call method takes comma separated value and the apply method takes an array of values.

printFullName.apply(name3, ["Nagpur", "Maharashtra"]);

//The bind method binds a copy of that function to that object reference instead of calling that function directly.
//the bind method invocation is similar to call method but it creates a copy of that function
//The bind method can be used in the case where we need to call the function later in the code.
let printName = printFullName.bind(name2, "Benagaluru", "Karnataka");
printName();
