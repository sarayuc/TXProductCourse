/*
Write a function, reverse, that accepts one parameter: string. In the function, 
return the string but reversed. Call this function three times each with different 
inputs and print the results to the terminal.
*/

function reverse (string) {
    reversedString = "";
    for (var i = string.length; i > 0; i--) {
        reversedString += string[i - 1];
    }
    return reversedString;
}

console.log(reverse("hey"));
console.log(reverse("racecar"))
console.log(reverse("yesssirrr"))

/*
Write a function, numVowels, that accepts one parameter: string. In the function, 
return the number of vowels string has. Call this function three times each with 
different inputs and print the results to the terminal.
*/

function numVowels (string) {
    count = 0;
    for (var i = 0; i < string.length; i++) {
        string.toLowerCase()
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' 
        || string[i] == 'o' || string[i] == 'u') {
            count += 1;
            }

    }
    return count;
}

console.log(numVowels('aeiou'));
console.log(numVowels('adieu'));
console.log(numVowels('stray'));

/*
Write a function, numStringsShorterThanLength that accepts two parameters: strings 
(an array of strings) and length (a number). In the function, return the number of 
strings in strings that have a length less than length. Call this function three 
times each with different inputs and print the results to the terminal.
*/

function numStringsShorterThanLength (strings, length) {
    count = 0
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            count += 1;
        }
    }

    return count
}

strings = ["hello", "world", "JavaScript", "gelatin", "lollipop"];
console.log(numStringsShorterThanLength(strings, 6));

strings.unshift("peonies")
console.log(numStringsShorterThanLength(strings, 8));

strings.pop()
strings.push("handbag")
console.log(numStringsShorterThanLength(strings, 7));