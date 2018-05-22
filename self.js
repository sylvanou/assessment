// Challenge 1
// Use an if statement to double the variable num if num is greater than 2.
let num = 4;
// let num = 0;
if (num > 2) console.log(num * 2);

// Challenge 2
// Use an if statement to double the variable newNum if newNum is less than 2.
let newNum = 1;
// let newNum = 2;
if (newNum < 2) console.log(newNum * 2);

// Challenge 3
// Use an if statement to determine if num from Challenge 1 is even.If it is, log true to the console.Otherwise, log false to the console.
(num % 2 === 0) ? console.log(true) : console.log(false);


//   Challenge 4
// You are given an array of elements called checkMe. Use an if statement to log true if the length of the array is greater than 5, and false if it is not.
let checkMe = [1, 2, 3];

(checkMe.length > 5) ? console.log(true) : console.log(false);

// Challenge 5
// You are given a variable called isDivisibleBy4.Use an if statement to determine if its value is divisible by 4.  Log true to the console if it is, and false to the console if it isn't.

let isDivisibleBy4 = 24;

(isDivisibleBy4 % 4 === 0) ? console.log(true) : console.log(false);

//   Loops and iteration

// Challenge 6
// Use a while loop to increment count by 2 and count2 by 3 on each repeat of the block of code.Run the code block of your while loop 4 times total.
let i = 0;
let count = 0;
let count2 = 0;
while (i < 4) {
  count += 2;
  count2 += 3;
  i++;
}
console.log('count', count, 'count2', count2);

//   Challenge 7
// Use a for loop to initialize a variable addThis to 0, increment addThis by 1 on each run of the code block, and then to repeat the code block as long as addThis is less than 10. In the code block, add the value of addThis to sum.The value of sum should be the sum of the numbers 0 through 9.
let sum = 0;
for (let addThis = 0; addThis < 10; i++) {
  sum += addThis;
}
console.log(sum);

// Challenge 8
// You are given a variable countDown that is initialized to 10.  Use a for loop to decrease it's value by 1 on every iteration of the loop until it's value is 0.
let countDown = 10;
for (i = countDown; i > 0; i--) {
  countDown--;
}
console.log(countDown);

// Challenge 9
// You are given an array of 5 numbers called increaseByTwo.Use a for loop to iterate through the array and increase each number by two.
let increaseByTwo = [1, 2, 3, 4, 5];
for (let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[i] * 2;
}
console.log(increaseByTwo);

// Challenge 10
// Using increaseByTwo from Challenge 9, iterate through the modified array and multiply a number by 10 if it is greater than or equal to 5.
for (let i = 0; i < increaseByTwo.length; i++) {
  if (increaseByTwo[i] >= 5) {
    increaseByTwo[i] * 10;
  }
}
console.log(increaseByTwo);

// Challenge 11
// You are given an empty array called fillMe.Using a for loop, fill the array with numbers from 0 to 10.
let fillMe = [];
for (let i = 0; i <= 10; i++) {
  fillMe.push(i);
}
console.log(fillMe);

// Challenge 12
// You are given a new empty array called modifiedFillMe.Using a for loop, loop backwards through the fillMe array from Challenge 11 and populate the new array with the numbers if they are even.
let modifiedFillMe = [];
for (let i = fillMe.length; i > 0; i--) {
  modifiedFillMe.push(fillMe[i]);
}
console.log(modifiedFillMe);

//   Challenge 13
// You are provided with an object called checkObj.Using a for... in loop, determine if the object contains the property foundNum.If it exists, log Found! to the console, otherwise log, Does not exist! to the console.

let checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

for (let i in checkObj) {
  if (i === "foundNum") {
    console.log("FOUND");
  } else {
    console.log("Does not exist");
  }
}

// Challenge 14
// You are provided with another empty array called objToArray.Using a for... in loop, fill the array with all of the numbers from the checkObj object from the previous challenge if they are greater than or equal to 2.
let objToArray = [];
for (let i in checkObj) {
  if (checkObj[i] >= 2) {
    objToArray.push(checkObj[i]);
  }
}
console.log(objToArray);

// Challenge 15
// Using a for loop, iterate through the objToArray to determine if any of the numbers are divisible by 6.  If there are any, log true to the console.If there aren't any, log false to the console.
objToArray.filter(
  num => (num % 6 === 0 ? console.log(true) : console.log(false))
);

// Challenge 16
// You are provided with an empty array called nestedArr.Using a for loop, add 5 sub - arrays to nestedArr, with each nested array containing the string 'loop' concatenated with the corresponding index in nestedArr as it's first element, and just the index as it's second element.Example of a subarray: ['loop3', 3]
let nestedArr = [];
for (let i = 0; i < 5; i++) {
  nestedArr[i] = ["loop" + i, i];
}
console.log(nestedArr);

// Challenge 17
// Create a variable called loopNumbers and initialize it to an empty object literal.Using a for loop, iterate through nestedArr from the previous challenge.For each iteration of your loop, assign a new property to loopNumbers where the property name is the first element in each nested array in nestedArr and the value is the second element.
let loopNumbers = {};
for (let i = 0; i < nestedArr.length; i++) {
  loopNumbers[nestedArr[i][0]] = nestedArr[i][1];
}
console.log(loopNumbers);

//   Challenge 18
// Using a for...in loop, iterate through loopNumbers from the previous challenge and determine how many properties are contained within the object.
let count = 0;
for (let i in loopNumbers) {
  count++;
}
console.log(count);

//   Challenge 19
// You are given an array of integers called possibleIterable.Using an if statement, loop through the array and log each element to the console only if the number of elements in the array is greater than 3.
let possibleIterable = [4, 3, 9, 6, 23];

if (possibleIterable.length > 3) {
  for (let i = 0; i < possibleIterable.length; i++) {
    console.log(possibleIterable[i]);
  }
}

// Challenge 20
// You are given a variable called sumMe that is initialized to an object literal containing several key / value pairs, and a variable called total that is initialized to 0.  Using a for... in loop, iterate through sumMe.If the value of the property that is being evaluated on the current iteration of the loop is a number, add it to total.

let sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
for (let i in sumMe) {
  if (Number.isInteger(sumMe[i])) {
    total += sumMe[i];
  }
}
console.log(total)
