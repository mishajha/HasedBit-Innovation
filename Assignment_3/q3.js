let string = 'INDIA';
let arr = string.split('');
arr.splice(2, 0, 'O', 'N', 'E', 'S', 'I', 'A');
let newString = arr.join('');
console.log(newString); // Output: 'INDONESIA'
