/*Debouncing in JavaScript is a practice used to improve browser performance. 
There might be some functionality in a web page which requires time-consuming computations. 
If such a method is invoked frequently, it might greatly affect the performance of the browser. 
Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, 
that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked. */

let counter = 0;
let fetchData = function () {
  //To fetch data from API- this indicates a time consuming task
  console.log("Fetching search results...", counter++);
};

let debounce = function (func, delay) {
  let timer;
  return function () {
    //store this context
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

let handleOnKeyUpEvent = debounce(fetchData, 300);
