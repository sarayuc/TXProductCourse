var currentSecond = 1;

function printNumber() {

    console.log(currentSecond);
    currentSecond++;

}

var intervalId = setInterval(printNumber, 1000, currentSecond);
setTimeout(clearInterval, 16000, intervalId);