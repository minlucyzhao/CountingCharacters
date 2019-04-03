var lettersCount = {};

function pushIndexToArray(a, data) {
  lettersCount[data[a]].push(a);
}

function countLetters(input) {
  input = input.split(" ").join("").toLowerCase();

  for (var i = 0; i < input.length; i++) {
    if (lettersCount[input[i]]) {
      pushIndexToArray(i, input);
    } else {
      lettersCount[input[i]] = [];
      pushIndexToArray(i, input);
    }
  }
  return lettersCount;
}


console.log(countLetters("Lighthouse in the house"));