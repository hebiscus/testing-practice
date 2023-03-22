export function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}

export const calculator = {
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

export function caesarCipher(string, key) {
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

export function analyzeArray(array) {

    function average(array) {
        let sumValues = array.reduce((total, item) => total + item);
        return sumValues;
    }

    let resultObject = {
        length: array.length,
        average: average(array) / array.length,
        min: Math.min(...array),
        max: Math.max(...array)
    };

    return resultObject;
}
