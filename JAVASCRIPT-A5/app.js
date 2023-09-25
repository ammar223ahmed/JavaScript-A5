        // // Chapter No 21
// // // Q1
 var cityToCheck = prompt("Enter where do you live");
 cityToCheck = cityToCheck.toLowerCase();
 var cleanestCities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 console.log("matah");
 }
}
// Q2
var x = "Hello World";
x = x.toLowerCase();
console.log(x);
// Q3
var cityToCheck = prompt("Enter your name");
 cityToCheck = cityToCheck.toUpperCase();
 var cleanestCities = ["ARSALAN", "MUSTAFA", "FARAZ", "ALI MUGAL"];
 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 console.log("matah");
 }
}
// Q4
var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();
console.log ("originalString");
// Q5
var userinput = prompt("Enter where do you live");

var firstChar = userinput.slice(0, 1).toUpperCase();

var RemainChar = userinput.slice(1).toLowerCase();

var combineInput = firstChar + RemainChar;

var CityArr = ["Karachi", "Islamabad", "Lahore", "Peshawar"];

for (var i = 0; i < CityArr.length; i++) {
  if (combineInput === CityArr[i]) {
    console.log("match");
  }
}
// Q6
var myString = "Hello World";
alert(myString.toUpperCase());
// Q7
var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(capitalizedCityName);

// Chapter No 22 & 25
// Q1
var sameWords = "captain";
var slicedString = sameWords.slice(1, 3);
console.log(slicedString);
// Q2
var sameWords = "captain";
var characterCount = sameWords.length;
console.log(characterCount);
// Q3
var animal = "elephant";
var middleIndex = Math.floor(animal.length / 2); 
var seg = animal.slice(middleIndex - 2, middleIndex + 2); 
console.log(seg); 
// Q4
var myString = "Hello, World!";
var characterCount = myString.length;
console.log (characterCount);
// Q5

var myString = "Hello, World!";
var characterCount = myString.length; 

var slicedString = myString.slice(1, -3); 
console.log(characterCount);
console.log(slicedString); 
// Q6
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);
// Q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);
// Q8
var text = "Let's go to the movies and then go grab a bite to eat, shall we?";

var lastIndex = text.lastIndexOf("go");

var indx = lastIndex === -1 ? -1 : text.indexOf("go", lastIndex);

console.log(indx);

// // Q9
// if (indexNum >= 0 && indexNum < str.length) {
//     console.log(indexNum);
//   }
//   Q10
var str = "abcde";
var characterAtIndex2 = str.charAt(2);
console.log(characterAtIndex2); 
// Q11
var str = "abcde";
var characterAtIndex2 = str.charAt(2);
console.log(characterAtIndex2); 
// Q12
var str = "This is a test string";
var x = str.charAt(str.length - 1);
console.log(x);

// Q13
var input = "This is an example string";
var cha = input.charAt(4); 
console.log(cha);
// Q14
if (myString.length >= 3 && myString.charAt(2) === 'X') {

  }
// Q15
var reply = "no, that's not true. no way!";
var charArray = []; 

for (var i = 0; i < reply.length; i++) {
  charArray.push(reply.charAt(i));
}


for (var i = 0; i < charArray.length - 1; i++) {
  if (charArray[i] === 'n' && charArray[i + 1] === 'o') {
    charArray[i] = 'y';
    charArray[i + 1] = 'e';
    charArray.splice(i + 2, 1);
    break; 
  }
}

var revisedReply = charArray.join('');
console.log(revisedReply);

// Q16
var str = "1, 2, 3, 4, 1, 5, 6";
var newStr = str.replace("1", "one");
console.log(newStr);
// Q17
var x = "abcabcabc";
var y = x.replace(/a/g, "z");
console.log(y);

// Chapter No 26 (Rounding Numbers)
// Q1
var numberOfStars = Math.round("scoreAvg");
console.log(numberOfStars);
// Q2
var origNum = 7.3; 
var roundNum = Math.ceil(origNum);
console.log(roundNum);
// Q3
var origNum = 7.8; 
var roundNum = Math.floor(origNum);
// Q4
var originalNumber = 7.5; 
var roundedNumber = Math.round(originalNumber);

console.log(roundedNumber); 

// Q5
var originalNumber = 0.5;
var roundedNumber = Math.floor(originalNumber);

console.log(roundedNumber); 

// Chapter No 27 (Random Numbers):
// Q1
var randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);
// Q2
var randomVariable = Math.random();

console.log(randomVariable); 
// Q3
function rollDice() {
  
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}


var diceResult = rollDice();
console.log('You rolled a ' + diceResult);

// Q4

function coinToss() {
  
  var randomNumber = Math.random();

  
  if (randomNumber < 0.5) {
    return 'Heads';
  } else {
    return 'Tails';
  }
}
0
var tossResult = coinToss();
console.log('The coin landed on: ' + tossResult);

// Chapter No 28, 29 (Converting Strings):
// Q1
var str = "123"; 
var intValue = parseInt(str);

console.log(intValue); 
// Q2
function stringToInteger(str) {
  var intValue = parseInt(str, 10);
  return intValue;
}

var str = "123"; 
var result = stringToInteger(str);
console.log(result); 

// Q3
var str = "3.14"; 
var floatValue = parseFloat(str);

console.log(floatValue); 
// Q4
function isStringConvertibleToInteger(str) {
  var intValue = parseInt(str, 10); 
  return !isNaN(intValue); 
}

var str = "123"; 
if (isStringConvertibleToInteger(str)) {
  var integerValue = parseInt(str, 10); //
  console.log("Integer Value: " + integerValue);
} else {
  console.log("Cannot convert to an integer.");
}
function isStringConvertibleToDecimal(str) {
  var floatValue = parseFloat(str); 
  return !isNaN(floatValue); 
}

var str = "3.14";  
if (isStringConvertibleToDecimal(str)) {
  var decimalValue = parseFloat(str); 
  console.log("Decimal Value: " + decimalValue);
} else {
  console.log("Cannot convert to a decimal.");
}
// Q5
function isStringConvertibleToInteger(str) {
  var intValue = parseInt(str, 10); 
  return !isNaN(intValue); 
}

var str = "123"; 
if (isStringConvertibleToInteger(str)) {
  var integerValue = parseInt(str, 10); 
  console.log("Integer Value: " + integerValue);
} else {
  console.log("Cannot convert to an integer.");
}
// Q6
function numberToString() {
  var number = 42; 
  var str = number.toString();
  return str;
}

var result = numberToString();
console.log(result); 

// Q7
var decimalString = "3.14"; 
var integerValue = parseInt(decimalString);

console.log(integerValue); 
var decimalString = "3.14";
var floatValue = parseFloat(decimalString);

console.log(floatValue); 

// Chapter NO 30 (Controlling the length of


// Q1
var num = 3.141592653589793; 
var newNum = num.toFixed(4).toString();
// Q2
var num = 3.141592653589793; 
num = parseFloat(num.toFixed(2));
// Q3
if (num.toFixed(2).toString().length > 4) {
 
}
// Q4
var originalNumber = 123.456789; 
var roundedString = originalNumber.toFixed(2);

alert("Rounded to 2 decimal places: " + roundedString);

// THE END:












































































