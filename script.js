// get the element we want, attach listener
let clickable = document.querySelector("img#clickable");
clickable.addEventListener("click", clickCounter);

// declare the counter variable
let counter = 0;
console.log("counter: ", counter);

// click handler function 
function clickCounter() {
	// track total clicks - increment the counter variable
	counter ++;

	// output click count to container in DOM 
    if (counter > 0 && counter <= 10){
	 console.log("counter: ", counter);
    } else if (counter > 10 && counter < 20){
      document.getElementById("clickable").src = "../dancing-squirrel.jpg";
      console.log("counter: ", counter);
    } else {
      document.getElementById("clickable").src = "../cute-bunny.jpg";
      console.log("counter: ", counter);
    }
	
	// get the container, update its contents	
	let container = document.querySelector("p#clickcount");
	container.innerHTML = "Counter: " + counter;
}
