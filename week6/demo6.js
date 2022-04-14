
function truncate(string, number)  {

    return string.substring(0, string.length - number);

}

console.log(truncate('hello world!', 1));
console.log(truncate('JavaScript', 6))
console.log(truncate('TPEO', 4))

function capitalizeFirstLetters(strings) {
    for (i = 0; i < strings.length; i++) {
        strings[i] = strings[i][0].toUpperCase() + strings[i].substring(1);
    }
    return strings;
}

console.log(capitalizeFirstLetters(['sarayu'], ['anjali']))

function swapcase(string) {
    var lowercase = string.toLowerCase();
    var uppercase = string.toUpperCase();

    var newString = '';

    for (var i = 0; i < string.length; i ++){
        
        if (string[i] == lowercase[i]) {
            newString += lowercase[i];
        } else {
            newString += uppercase[i];
        }


    }
    return newString;
}

console.log(swapcase('sArAyU'))