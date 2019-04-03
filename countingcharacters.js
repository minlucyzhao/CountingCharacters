function countLetters(input) {
    var lettersCount = {};
    input = input.split(" ").join("");
    for (var i = 0; i < input.length; i++) {
        if (lettersCount[input[i]]) {
            lettersCount[input[i]] += 1;
        } else {
            lettersCount[input[i]] = 1;
        }
    }
    return lettersCount;
}

console.log (countLetters("lighthouse in the house"));