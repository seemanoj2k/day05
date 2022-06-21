// 1. Print odd numbers in an array 

let array = [1,2,3,4,5,6,7,8,9,10];

let odd = array.filter((number) => number % 2 != 0);

console.log(odd);


// 2. Convert all the strings to title caps in a string array

 array = ["string","number","Integer","float","double"];

var  t = array.map((string) => string.charAt(0).toUpperCase() + string.substr(1).toLowerCase());

console.log(t);

// 3. Sum of all numbers in an array

array = [1,2,3,4,5,6,7,8,9,10];

var sum = array.reduce((total, number) => total += number , 0);

console.log(sum);


// 4. Return all the prime numbers in an array

array = [1,2,3,4,5,6,7,8,9,10];
var  prime = array.filter((num) => {
    if (num == 1) {
        return false;
    }else if (num == 2) {
        return true;
    }else{
        for (let i = 2;i < num; i++){
            if (num % i == 0){
                return false;
            }
        }
    }
    return true;
});

console.log(prime);


// 5. Return all the palindromes in an array

array = ["Malayalam","Hindi","Kannak","Eye"];

var palindrome = array.filter((str) => {
    let s = str.toLowerCase();
    let count;
    if (s.length % 2 == 0) {
        count = (s.length) / 2;
    }
    if (s.length == 1){
        return true;
    }else{
        count = (s.length -1) / 2;
    }
    for (let i = 0; i < count; i++) {
        if (s[i] != s[s.length - i -1]){
            return false;
        }
    }
    return true;
});

console.log(palindrome);