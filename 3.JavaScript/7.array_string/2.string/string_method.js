//문자열 리터럴
const stringPrimitive = 'A new String';
console.log(stringPrimitive);
//생성자를 통한 생성
const stringObject = new String('A new String');
console.log(stringObject);

console.log(`${typeof stringPrimitive}, ${typeof stringObject}`);

const aString = 'How are you?';
console.log(aString.charAt(4));

/*
// string을 생성하는 법
const stringPrimitive = 'A new string';
const stringObject = new String('A new string');

console.log(`${typeof stringPrimitive}, ${typeof stringObject}`);


// Accessing Characters, Finding the length of a string
aString = 'How are you?';
console.log(aString);
console.log('01234567891011');
console.log(aString[4]);
console.log(aString.charAt(5));

console.log(aString.indexOf('o'));
console.log(aString.lastIndexOf('o'));

console.log(aString.slice(8, 11));
console.log(aString.length);

// Splitting strings
const originalString = "How are you?";

// Split string by whitespace character
const splitString = originalString.split(" ");

console.log(splitString, Array.isArray(splitString)); 
console.log(splitString[1]);

// Trimming Whitespace
const tooMuchWhitespace = "     How are you?     ";

const trimmed = tooMuchWhitespace.trim();

console.log(trimmed);

// Finding and Replacing String values

// Replace the first instance of "How" with "Where"
const newString = originalString.replace("How", "Where");

console.log(newString);
*/