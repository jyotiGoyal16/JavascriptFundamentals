
//category list handling- clicking on a list item should take us to that category link.
//This is done using the concept of event delegation.

/*
Let's suppose if category list has more than 1000 categories and still growing then it wouldn't be feasible to add an event listener to all of the list items (i.e 1000 items).
So what we will do here is, instead of adding event listeners to each child in the list, we will add a common listener on the parent which will get triggered due to the event bubbling.
we are using event object to access the target child element. This is event delegation.
*/
document.querySelector("#category").addEventListener('click', (e) => {
    console.log(e.target.id);
    if(e.target.tagName == 'LI'){
        window.location.href = "/" + e.target.id;
    }
});

//
document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})