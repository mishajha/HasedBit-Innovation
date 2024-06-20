let text = "This is a sample string for counting vowels and consonants.";
let vowelsCount = 0;
let consonantsCount = 0;
for (let char of text.toLowerCase()) {
    if (/[aeiou]/.test(char)) {
        vowelsCount++;
    } else if (/[bcdfghjklmnpqrstvwxyz]/.test(char)) {
        consonantsCount++;
    }
}
console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`);
