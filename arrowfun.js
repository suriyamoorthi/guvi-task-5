
//Print odd numbers in an array
const oddnumber=(a)=>{
    for (let i=0;i<a.length;i++)
    {
    if(a[i]% 2!=0)
    {
        console.log(a[i]);
    }
}
}
 oddnumber([1,2,3,4])

//Convert all the strings to title caps in a string array
const titleCase=(str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
     console.log(titleCase("WELCOM TO VISUALSTUDIO"));
  

  //Sum of all numbers in an array
  const sumofall=(arr)=>{
  let sum = 0;
     for(let a of arr)
      sum +=a;
      return sum
  }
  console.log(sumofall([1,2,3,4]))

  //Return all the prime numbers in an array
  const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});

console.log(myPrimeArray);

//Return all the palindromes in an array
const getAllPalindromes = function (words) {
  return words.filter(function (word) {
     return word.split("").reverse().join("") === word;
   });
 };
 
 console.log(getAllPalindromes(["hello", "noon"]));