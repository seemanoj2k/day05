// 1. Print odd numbers in an array 

let array = [1,2,3,4,5,6,7,8,9,10];
let odd= function (array) {

    return (array.filter((item) => {

        return item % 2 !== 0 } )); 
}
  console.log(odd(array));


// 2. Convert all the strings to title caps in a string array

 array = ["string","number","Integer","float","double"];
var t= function (arr) {
   var array = arr.map(
     (string) => string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
   );
   return array;
 }
 console.log(t(array));

// 3. Sum of all numbers in an array

 array = [1,2,3,4,5,6,7,8,9,10];
var sum = function (arr) {
    var array = arr.reduce((total, number) => (total += number));
    return array;
  } 
console.log(sum(array));


// 4. Return all the prime numbers in an array

 array = [1,2,3,4,5,6,7,8,9,10];
 var prime = function (arr) {
    var array = arr.filter((number) => {
      if (number == 1) {
        return false;
      } else if (number == 2) {
        return true;
      } else {
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            return false;
          }
        }
      }
      return true;
    });
    return array;
  } 
  console.log(prime(array));


// 5. Return all the palindromes in an array

 array = ["Malayalam","Hindi","Kannak","Eye"];
 var palindrome = function (arr) {
    var  array = arr.filter((string) => {
      let s = string.toLowerCase();
      let count;
      if (s.length % 2 == 0) {
        count = s.length / 2;
      }
      if (s.length == 1) {
        return true;
      } else {
        count = (s.length - 1) / 2;
      }
      for (let i = 0; i < count; i++) {
        if (s[i] != s[s.length - i - 1]) {
          return false;
        }
      }
      return true;
    });
    return array;
  } 
  console.log(palindrome(array));

// 6. Return median of two sorted arrays of same size 
var arr1 = [6,9,3,4,5,10,7,2,8,1];   
var arr2 = [12,20,13,17,15,19,14,18,16,11]   
var median = function () {
  var array = arr1.concat(arr2);
  array = array.sort(function (a, b) { return a - b; });
  var med = (array[arr1.length] + array[arr1.length - 1]) / 2;
  return med;
}

console.log(median());


// 7. Remove duplicates from an array
array = [6,9,2,4,5,1,3,2,9,1];
  
  let dup = function(arr){
      array = arr.filter((a, b) => arr.indexOf(a) === b)
      return array;
  }
  console.log(dup(array));

// 8. Rotate an array by k times 

 array = [1,2,3,4,5,6,7,8,9,10];
var k = 5;
let rotate =  function (array, k) {
  for (let i = 0; i < k; i++) {
    let lastItem = array[array.length - 1];
    for (let j = array.length - 2; j >= 0; j--) {
      array[j + 1] = array[j];
    }
    array[0] = lastItem;
  }
  return array;
}

console.log(rotate(array, k));