function powersOfThree () {
    for (var i = 0; i < 10; i++) {
        console.log(3 ** i)
        if (i == 3) {
            console.log("This is my favorite power of three!");
        }
    }
}

// starts printing after three seconds
setTimeout(powersOfThree, 3000);

///////////////////////////////////////////////////////////////

// this function prints "Hello World!"
function everyTenSeconds() {
    console.log("Hello World!");
}

// this variable sets the interval id to print every 10 seconds
var intervalTenSeconds = setInterval(everyTenSeconds, 10000);
/// this stops the interval after two minutes
setTimeout(clearInterval, 120000, intervalTenSeconds);

/////////////////////////////////////////////////////////////////