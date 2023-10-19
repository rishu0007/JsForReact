let nums = [1,2,3,4,5,6,7,8,9,10];

let newNums = nums.map((i) => i * 10);
console.log(newNums);

let filtNums = nums.filter((i) => i > 5);
console.log(filtNums);

let redNums = nums.reduce((acc,i) => acc + i,0);
console.log(redNums);