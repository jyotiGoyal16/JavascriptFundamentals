let name = {
    firstName: "Jyoti",
    lastName: "Goyal"
}

let printName = function (city, state, zip){
    console.log(this.firstName + " " + this.lastName + ", " + city + ", " + state);
    console.log(zip);
}

let printFn = printName.bind(name, "Nagpur", "MH");
printFn("123456");


//polyfill for bind- browser fallback function for bind
//NOTE: Use Function.prototype to create your own polyfill, so that all the objects have access to that function
Function.prototype.myBind = function(...args){
    let thisRef = this;
    let params = args.slice(1);
    return function(...args1){
        thisRef.apply(args[0], [...params, ...args1]);      //using apply method
        thisRef.call(args[0], ...params, ...args1);         //using call method
    }
}

let printFn1 = printName.myBind(name, "Nagpur", "MH");
printFn1("123456");