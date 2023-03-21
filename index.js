function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

const calculator = {
    add: function(n, m) {
        return n + m;
    }, 
    subtract: function(n, m) {
        return n - m;
    }, 
    divide: function(n, m) {
        return n / m;
    }, 
    multiply: function(n, m) {
        return n *m;
    }, 
}

function caesarCipher(string, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    const stringToArray = string.split("");
    let finalCypher = "";

    for (let i = 0; i < stringToArray.length; i++) {
        let letterPlace = findInAlphabet(stringToArray[i]);
        let letterCase = checkCase(stringToArray[i]);
        finalCypher += shiftLetter(letterPlace, letterCase);
    }
    
    function checkCase(letter) {
        return letter == letter.toUpperCase() ? "upper" : "lower";
    }

    function findInAlphabet(letter) {
        for (let i = 0; i < alphabetArray.length; i++) {
            if (letter == " " || !/^[a-zA-Z]+$/.test(letter)) {
                return letter;
            }
            if (letter == alphabetArray[i]) {
                return alphabetArray.indexOf(alphabet[i]);
            } else if (letter.toLowerCase() == alphabetArray[i]) {
                return alphabetArray.indexOf(alphabet[i]);
            }
        }
    }

    function shiftLetter(letterPlace, letterCase) {
        if (typeof letterPlace != "number") {
            return letterPlace;
        }
        if (letterPlace + key >= alphabetArray.length && letterCase == "upper") {
            return alphabetArray[(letterPlace + key) % alphabetArray.length].toUpperCase();
        } else if (letterPlace + key >= alphabetArray.length) {
            return alphabetArray[(letterPlace + key) % alphabetArray.length];
        } else if (letterCase == "upper") {
            return alphabetArray[letterPlace + key].toUpperCase();
        }
        return alphabetArray[letterPlace + key];
    }

    return finalCypher;
}

function analyzeArray(array) {
    let resultObject = {
        average: function average(array) {
            let sumValues = array.reduce((total, item) => total + item);
            return sumValues / resultObject.length(array);
        },

        min: function min(array) {
            return Math.min(...array);
        },
        max: function max(array) {
            return Math.max(...array);
        },
        length: function length(array) {
            return array.length;
        }
    };

    return resultObject.average(array);
}

 console.log(caesarCipher("A#AA6 A", 15))

// console.log(analyzeArray([1,2,3]))