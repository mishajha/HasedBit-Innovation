function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}

// Example usage:
let sentence = "I love JavaScript. JavaScript is great!";
let correctedSentence = correctfn(sentence, "JavaScript", "Python");

console.log(correctedSentence); // Output: "I love Python. Python is great!"
