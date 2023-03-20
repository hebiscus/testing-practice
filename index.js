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
        finalCypher += shiftLetter(letterPlace);
    }
    
    function findInAlphabet(letter) {
        for (let i = 0; i < alphabetArray.length; i++) {
            if (letter == " ") {
                return letter;
            }
            if (letter == alphabetArray[i]) {
                return alphabetArray.indexOf(alphabet[i]);
            } 
        }
    }

    function shiftLetter(letterPlace) {
        if (typeof letterPlace != "number") {
            return letterPlace
        }
        if (letterPlace + key >= alphabetArray.length) {
            return alphabetArray[(letterPlace + key) % alphabetArray.length] 
        }
        return alphabetArray[letterPlace + key];
    }

    return finalCypher
}

function analyzeArray() {

}
 console.log(caesarCipher("a bcz y", 25))