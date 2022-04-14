// sumOfSquares function, which returns the sum of two squares' areas.

function sumOfSquares (a, b) {
    return (a ** 2) + (b ** 2);
}

console.log(sumOfSquares(3, 4));
console.log(sumOfSquares(7, 24));
console.log(sumOfSquares(8, 15));


// gradeCalculator returns the overall grade in a class

function gradeCalculator (homeworkAvg, quizAvg, examAvg) {
    return (homeworkAvg * 0.1 + quizAvg * 0.15 + examAvg * 0.75);
}

console.log(gradeCalculator(100, 97, 92));
console.log(gradeCalculator(60, 83, 87));
console.log(gradeCalculator(41, 78, 99));

