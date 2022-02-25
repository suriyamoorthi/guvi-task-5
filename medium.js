//Given a number, “addFive” returns 5 added to that number.
var num = 5;
function addFive(num) {

    let total  = num + 5;
    return total;
};
var result = addFive(num)
console.log(result);

//Given a number, return its opposite

var num = 5;
function getOpposite(num) {
if(Number.isInteger(num)){return num*(-1);}
else()=>{return -1}
}
var result = getOpposite(num);
console.log(result);

//number minutes and converts it to seconds.

var min = 3;
function toSeconds(min) {return min*60;}
var secs = toSeconds(min);
console.log(secs);

//string and returns it as an integer.

var mystr = "6";
function toInteger(mystr) {return parseInt(mystr);}
var myint = toInteger(mystr);
console.log(myint);

//ncrements the number by +1 and returns the result.

var myint = 1;
function nextNumber(myint){
let total=myint+1;
return total;
}
var num = nextNumber(myint);
console.log(num);

// function that takes an array and returns the first element.

var arr = [1, 2, 3];
function getFirstElement(arr)
 {
     return arr[1];
    }
var fnum = getFirstElement(arr);
console.log(fnum);

//Convert Hours into Seconds

var arr = [1, 2, 3]
function hourToSeconds(arr)
 {
    for(i=0;i<arr.length;i++)
    {
    arr[i] = 3600*arr[i];
    }
    return arr;
    }
    var sec= hourToSeconds(arr);
console.log(sec);

//Find the Perimeter of a Rectangle

function findPerimeter(num1,num2)
{
  let tol= (num1 + num2) * 2
  return tol;
}
var peri = findPerimeter(6,7);
console.log(peri);

//sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1,num2) {
    if(num1+num2 < 100)
    {
    return true;
}
    else{
    return false;
    }
    }
    var value = lessThan100(280,15);
    console.log(value);

 //  get reminter value

 function remainder(num1,num2) {
     let tol=num1%num2;
     return tol;
}
var res = remainder(-9,45);
console.log(res);

// total number of legs of all the animals.

function CountAnimals(tur,horse,pigs) {
    var a = 2*tur;
    var b = 4*(horse+pigs);
    return a+b;
    }
    var legs = CountAnimals(2,3,5);
    console.log(legs);
 
    // Integer is Divisible By Five

    function divisibleByFive(num1) {
        if(num1%5===0){return true}
        else{return false}
        }
        var divisible = divisibleByFive(5)
        console.log(divisible);
 
  // function called “isEven”.

  function isEven(num){
    if(parseInt(num)==num){
    if(num%2===0){return true}
    else{return false}
    }
    else{return -1} 
    }
    var even = isEven(5);
    console.log(even);

 //Given 2 numbers, “areBothOdd”

 function areBothOdd(num1, num2){
    if((num1%2!=0)&&(num2%2!=0)){return true}
    else{return false}
   }
   var con=areBothOdd(1,3)
   console.log(con);

 // given first and last names separated by a single space.
 
 function getFullName(firstName, lastName){
    if((firstName!='')&&(lastName!='')){return firstName + ' ' + lastName}
    else{return firstName + lastName}
   }
   var nam=getFullName("suriya","moorthi");
   console.log(nam);

 // integer, “getNthElement
 
 function getNthElement(array,n)
 {return array[n-1]}
 var num=getNthElement([1, 3, 5],1);
 console.log(num);

 //

 function getLastElement(array)
 {return array[array.length-1]}
 var num=getLastElement[1,2,3,4];
 console.log(num);
 (()=>{
 const nums1 = [1, 2]
 const nums2 = [3, 4]
 
 let nums3 = [...nums1, ...nums2]
 sortedNumbers = nums3.sort((a, b) => a - b)
 
 medianOddArr = (arr) => {
   let i = Math.floor(arr.length / 2)
   return arr[i]
 } 
 
 medianEvenArr = (arr) => {
   let i = arr.length / 2
   return (arr[i] + arr[i - 1]) / 2
 }
 
 console.log(medianEvenArr(sortedNumbers));
})
 
    