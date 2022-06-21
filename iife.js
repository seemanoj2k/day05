// 1. Print odd numbers in an array

let odd = (function (arr) {
    let array = arr.filter((number) => number % 2 != 0);
    return array;
  })([1,2,3,4,5,6,7,8,9,10]);
  
  console.log(odd); 
  
  
  // 2. Convert all the strings to title caps in a string array
  
  var t= (function (arr) {
    var array = arr.map(
      (string) => string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
    );
    return array;
  })(["string", "number", "Integer", "float", "double"]); 
  console.log(t);
  
  
  // 3. Sum of all numbers in an array
  
  var sum = (function (arr) {
    var array = arr.reduce((total, number) => (total += number));
    return array;
  })([1,2,3,4,5,6,7,8,9,10]);
  
  console.log(sum);
  
  
  // 4. Return all the prime numbers in an array
  
  var prime = (function (arr) {
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
  })([1,2,3,4,5,6,7,8,9,10]);
  
  console.log(prime); 
  
  
  // 5. Return all the palindromes in an array
  
  var palindrome = (function (arr) {
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
  })(["Malayalam","Hindi","Kannak","Eye"]);
  
  console.log(palindrome); 
  
  // 6. Return median of two sorted arrays of same size
  
  var array1 = [6, 9, 3, 4, 5, 10, 7, 2, 8, 1];   
  var array2 = [12, 20, 13, 17, 15, 19, 14, 18, 16, 11]   
  var median = ((arr1, arr2) => {
    var array = arr1.concat(arr2);
    array = array.sort(function(a, b) {return a-b});
    var med = (array[arr1.length] + array[arr1.length - 1]) / 2;
    return med;
   })(array1, array2);

   console.log(median); 
  
  
  // 7. Remove duplicates from an array
  
  var array = [6,9,2,4,5,1,3,2,9,1];
  
  let dup = (function(arr){
      array = arr.filter((a, b) => arr.indexOf(a) === b)
      return array;
  })(array);
  
  console.log(dup);
  
  
  // 8. Rotate an array by k times 
  
  var array = [1,2,3,4,5,6,7,8,9,10];
  let rotate =  ((array, k) => {
      for (let i = 0; i < k; i++){
          let lastItem = array[array.length - 1];
          for (let j = array.length - 2; j >= 0; j--) {
              array[j + 1] = array[j];
          }
          array[0] = lastItem;
      }
      return array;
  })(array, 5);
  
  console.log(rotate);