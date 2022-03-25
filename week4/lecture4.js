// JavaScript runs synchronously
// introducing timers

// setTimeout will delay to CALL the function not delay to return or print
// out something

//  ex:

function sum(a, b) {
    console.log(a + b);
}

var timeoutId = setTimeout(sum, 5000, 3, 6)

// setInterval allows us to execute code repeatedly at
// specific intervals of time, i.e. function calls every 1 second

function showDate() {
    console.log(new Date().toLocaleString());

}

function clearDateInterval(intervalId){
    clearInterval(intervalId);
}

var intervalId = setInterval(showDate, 1000);
setTimeout(clearDateInterval, 110000, intervalId)
// or setTimeout(clearInterval, 110000, intervalId)


// variable Scope, where variables can be used

/* multi-line comments

blah blah blah

*/