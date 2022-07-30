//function to reverse an array

const test = [1, 2, 3, 4, 5];

// but this works too
// you can also use array.unshift() and just iterate from front to back
// since you'll be adding a value to the head of the array each time
// by the end of loop it will return you a reversed array

function reversearray(input) {
  const ret = []; // This is the best conventional way for 2 reasons:
  for (let i = input.length - 1; i >= 0; i--) {
    input.splice(input[i]);
  }

  return input;
}

reversearray(test);
console.log(reversearray(test));

const reverseSameArray = (arr) => {
  // Go through only half of the array, and swap current index with the mirroring index from the end
  for (let i = 0; i < arr.length / 2; i++) {
    // [a,b] = [b,a] lets you swap in js.
    // there's a more standard way using a temp variable, but this is simpler
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];

    /// long way:
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
};
const SampleArr = [1, 2, 3, 4];
console.log(SampleArr); // [1,2,3,4];
reverseSameArray(SampleArr);
console.log(SampleArr); // [4,3,2,1];
reverseSameArray(SampleArr);
console.log(SampleArr); // [1,2,3,4];

//print all even numbers from 1 - 10
//did it first try lessgooo

for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//create a length conversion function, km to miles
//did it first try lessgooo
function convert(km) {
  let miles = km * 0.621;
  return `${km} kilometers is equal to ${miles} miles!`;
}

console.log(convert(15));

//calculate the sum of numbers within an array

const example = [1, 2, 3, 4, 5, 6, 7, -1, -3, -5];

function sumOfArrays(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
}

console.log(sumOfArrays(example));

//sort an array from lowest to highest

const testArray = [5, 8, 2, 1, 6, 3, 9];

function sortArray(input) {
  return input.sort();
}

console.log(sortArray(testArray));

//eliminate negative numbers in an array

const negativeArray = [-1, 3, 2, 5, -5, -3, 4, -2, 9];

function filterArray(input) {
  const filteredArray = [];
  for (let i = 0; i < input.length; i++)
    if (input[i] >= 0) {
      filteredArray.push(input[i]);
    }
  return filteredArray;
}

console.log(filterArray(negativeArray));

//count the number of vowels in a string

const str = "I really need a dev job quick!";

function countVowels(str) {
  const vowels = [];
  const lowerCase = str.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {
    if (
      lowerCase[i] === "a" ||
      lowerCase[i] === "e" ||
      lowerCase[i] === "i" ||
      lowerCase[i] === "o" ||
      lowerCase[i] === "u"
    ) {
      vowels.push(lowerCase[i]);
    }
  }

  return vowels.length;
}

console.log(countVowels(str));

// two sum. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Leetcode easy problem

const integers = [3, 2, 4];
const target = 6;

function returnIndicies(integers, target) {
  const indices = [];
  for (let i = 0; i < integers.length; i++) {
    for (let j = 0; j < integers.length; j++) {
      if (integers[i] + integers[j] === target && i != j) {
        indices.push(i);
      }
    }
  }
  return indices;
}

console.log(returnIndicies(integers, target));

//given an integer x, return true if x is a paindrome integer. Leetcode easy problem

// your logic here aite let's start
const palindromeIntCheck = (num) => {
  const str = num.toString(); // convert to string first
  const midpoint = str.length / 2; // for cleanliness
  const half1 = str.slice(0, midpoint); // this will give first half '1234' -> '12, '12345' -> 12 as well here
  // if odd, then check from midpoint + 1. else, check from midpoint '1234' -> '34' '12345' -> 45
  // when odd, str.length % 2 will be 1 -> true. when even, 0 => false
  const half2 = str.slice(str.length % 2 ? midpoint + 1 : midpoint);

  // split makes a string into an array. '1234' -> [1,2,3,4]
  // reverse .. reverses the array
  // join combines it back to a string
  return half1 === reverseString(half2);
};
// me back wb frend ok maybe lololololololol

// let's try it here
/**
 * 1. convert num to a string
 * 2. Loop through string, checking each end at a time if they're the same
 * 2-1. if at any point they are not equal, terminate and return false
 * 3. If loop is complete, return true. Means we're good.
 */
// 1,2,3,2,1
const betterPalindromeCheck = (num) => {
  const str = num.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};
// if return false; hasn't been hit, that means this is indeed
// a palindrome. Therefore we want to return true as an output.

console.log("CHECKING BETTERPALINDROME");
console.log(betterPalindromeCheck(12321)); // true
console.log(betterPalindromeCheck(1234521)); // false

const testing = "Hello";
console.log(testing.length);

const palinCheckPop = (num) => {
  const nums = num.toString().split(""); // [1,2,3,4]...

  while (nums.length > 1) {
    if (nums.pop() !== nums.shift()) return false;
  }

  return true;
};

console.log("POPOPOPOPOPCHECK");
console.log(palinCheckPop(12321));
console.log(palinCheckPop(12341242));

// ------------FizzBuzz, leetcode easy problem

var fizzBuzz = function (n) {
  const strArr = [];
  for (let i = 1; i < n + 1; i++)
    if (i % 5 === 0 && i % 3 === 0) {
      strArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      strArr.push("Buzz");
    } else if (i % 3 === 0) {
      strArr.push("Fizz");
    } else {
      strArr.push(i.toString());
    }
  return strArr;
};

console.log(fizzBuzz(30));

// -----------Return the length of the last word in a string

const lolw = function (s) {
  const words = s.trim();
  const arrWords = words.split(" ");
  const lastWord = arrWords[arrWords.length - 1];

  return lastWord.length;
};

console.log(lolw("Nice computer you got there "));

// Plus one - You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

const testDigits = [1, 5, 2, 9, 9];

function plusOne(digits) {
  let index = digits.length - 1;

  while (digits[index] === 9 && digits.length > 1) {
    (digits[index] = 0), index--;
  }

  if (digits[0] === 0 && digits.length > 1) {
    digits.unshift(1);
  } else if (digits[0] === 0) {
    digits[index] += 1;
  } else if (digits[0] === 0 && digits.length > 0) {
    digits[index] += 1;
  } else if (digits[index] === 9) {
    digits = [1, 0];
  } else digits[index] += 1;

  return digits;
}

console.log(plusOne([5]));

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

function findSingle(nums) {
  let arr1 = [];
  let arr2 = [];
  let sum1 = 0;
  let sum2 = 0;
  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      if (arr1.includes(nums[i]) === false) {
        arr1.push(nums[i]);
      } else {
        arr2.push(nums[i]);
      }
    }
    for (let i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
      sum2 += arr2[i];
    }

    return sum1 - sum2;
  } else {
    return nums;
  }
}
console.log(findSingle([1, 1, 2]));
