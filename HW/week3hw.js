function countUpwardsByThree() {
    for (var i = 0; i < 31; i += 3){
        console.log(i);
    }
}

console.log(countUpwardsByThree());

function guessMyFavoriteNumber(guess) {
    if (guess == 17) {
        console.log("You guessed my favorite number!");
    }
    else {
        console.log("Try Again!");
    }
}

console.log(guessMyFavoriteNumber(14));
console.log(guessMyFavoriteNumber(92));
console.log(guessMyFavoriteNumber(34));
console.log(guessMyFavoriteNumber(18));
console.log(guessMyFavoriteNumber(17));

function convertNumberToDay (number) {
    switch (number) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("No such day exists.");

    }
}

console.log(convertNumberToDay(0));
console.log(convertNumberToDay(1));
console.log(convertNumberToDay(2));
console.log(convertNumberToDay(3));
console.log(convertNumberToDay(4));
console.log(convertNumberToDay(5));
console.log(convertNumberToDay(6));
console.log(convertNumberToDay(19));