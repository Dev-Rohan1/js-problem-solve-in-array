// probelm 1..
function getRandomNumber(min, max) {
    return Math.floor(Math.random () * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 6));

// problem 2..

let students = ["Rohan", "Alpona", "Symon", "Masuk"];

console.log(students);

console.log(students.sort());

// problem 3..

const rollNumbers = [1, 4, 10, 3, 5, 2, 7, 6, 8, 9];

let result = rollNumbers.sort(function(a, b) {
    return a -b;
});

console.log(result);

//problem 4..

function isLeapYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)) {
        console.log(`year is a leap ${year}`);
    } else {
        console.log(`year is not a leap ${year}`);
    }
}

isLeapYear(2024);

// problem solve 5..

const vowles = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentance) {
    let counter = 0;
    const letters = Array.from(sentance);
    letters.forEach(function(value, index, array) {
        if(vowles.includes(value)) {
            counter ++;
        }
    });

    return counter;
}

console.log(countVowels("Hi everyone. my name is rohan. iam a student as well as fonrtend developer"));

// problem solve 5...

const numbers = [1, 2, 4, 3, 5, 4, 6, 2, 3, 6, 7, 8, 7];

let duplicate = numbers.filter(function(value, index, array) {
    return array.indexOf(value) !== index;
});

console.log(duplicate);
