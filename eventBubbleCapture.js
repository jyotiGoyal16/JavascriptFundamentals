//event Bubbling - Event Bubbling is the event starts from the deepest element or target element to its parents, 
//then all its ancestors which are on the way to bottom to top. 
//At present, all the modern browsers have event bubbling as the default way of event flow.

//event capturing - Event Capturing is the event starts from top element to target element. 
//Modern browser doesn’t support event capturing by default but we can achieve that by code in JavaScript using useCapture.

//When we add event listener to some element, we pass arguments as addEventListener(eventType, callback function, useCapture)
//the third argument useCapture(boolean) is the argument that helps us to achieve event propogation - event bubbling and event capturing.

//stop propogation - The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grandparent clicked!");
  }         //event bubbling(default)
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
    e.stopPropagation();
  },
  true      //event capturing
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
    e.stopPropagation();
  },
  false     //event bubbling
);
