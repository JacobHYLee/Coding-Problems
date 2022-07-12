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
