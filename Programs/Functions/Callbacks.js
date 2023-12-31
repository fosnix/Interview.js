// Javascript is Synchronous and 'Single Threaded Programming Language'

setTimeout(function () {              // Asynchronous code does not blocks the 'main thread'
    console.log("I am called after 5 seconds")
}, 5000)

function x(n) { return n }           // A Normal Function

console.log(x(function y() { }))    // 'y' is a Callback Function : A callback is a function which is passed to an another function(generally a async function) which can be called back when the function it is passed to is called!

// Event Listeners : Event Listeners takes a callback as a handler and handles it over a event for example say a 'click'. Event Listeners have a memory allocated to it in the WEB_API Registor which is not freed implicitly by GC. 

function EventListeners() {
    let count = 0
    document.getElementById("clickme").addEventListener("click", function handleMe() {  // A Event Listener with a Handler function 'HandleMe'
        console.log("The Button is Clicked!")
        console.log(++count)
    })
}

EventListeners()

// Problems with Callbacks:
   //  - CallBack Hell
   //  - Inversion of Control