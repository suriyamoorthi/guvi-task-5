// Print odd numbers in an array

(()=>{
    let a=[1,2,3,4];
    for (let i=0;i<a.length;i++)
    {
    if(a[i]% 2!=0)
    {
        console.log(a[i]);
    }
}
})();

// strings to title caps in a string array

(()=>{
    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
      }
      console.log(titleCase("WELCOM TO VISUALSTUDIO"));
})();

// Sum of all numbers in an array
(()=>{
    const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
})();
 
// Return all the prime numbers in an array
(()=>{
    var numArray = [2, 3, 4, 5, 6, 7, 8,]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

})();

//  palindromes  
 (() =>{       
let str = "civic";
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
  return(str);
}
console.log(str)
 })();

 // Return median of two sorted arrays of the same size
 (()=>{
 function median(arr) {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
 };
console.log(median([5, 6, 50, 1, -5]));
console.log(median([1, 2, 3, 4, 5]));
})()

//Remove duplicates from an array

let remove=(a)=>{
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
      if (newArr.indexOf(a[i]) == -1) {
          newArr.push(a[i]);
      }
  }
return newArr;
}
var colors = ["red","red","green","green","green"];
var colorsUnique=remove(colors);
console.log(colorsUnique)

//Rotate an array by k times

const rotateByOne = (arr) => {
  let arr1 = arr.pop();
  arr.unshift(arr1);
  return arr;
};
console.log(rotateByOne([1, 2, 3, 4, 5]));
console.log(rotateByOne([6, 5, 8, 9, 7]));
console.log(rotateByOne([1, 2, 3], [4, 5, 6]));