//Reverse an array

const test = [1, 2, 3, 4, 5];

function reversearray(input) {
  let ret = new Array();
  for (let i = input.length - 1; i > -1; i--) {
    ret.push(input[i]);
  }

  return ret;
}

reversearray(test);
console.log(reversearray(test));
