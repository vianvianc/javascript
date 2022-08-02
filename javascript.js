// Loop Triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.
// let abc = "abc"; console.log(abc.length); // → 3

// for (let current = 20; ; current = current + 1) {
//     if (current % 7 == 0) {
//         console.log(current);
//         break; }
// }
// // → 21
// for (let number = 0; number <= 12; number += 2) {
//     console.log(number);
// }
//1. create a variable called hash
//2. assign hash to "#"
//3. loop over  variable 7 times adding 1 each time and console log each result.
//
// for (let hash = "#"; ; hash = hash + 1)
// {
//     if (hash.length < 8 ) {
//         console.log(hash);
//         break
//     }
// }

// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//     result = result * 2;
// }
// console.log(result); // → 1024
//
// let hash = "#";
// for (let hash = 0; hash < 10; hash = hash + 1) {
//     result = result * 2;
// }
// console.log(result); // → 1024

for (let hash = "#"; hash.length <= 7; hash += hash) {
    console.log(hash);
}

























//
// for (let line = "#"; line.length < 8; line += "#") console.log(line);
//
// // FizzBuzz
// // Write a program that uses console.log to print all the numbers from 1 to 100,
// //with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for
// //numbers divisible by 5 (and not 3), print "Buzz" instead.
// // When you have that working, modify your program to print "FizzBuzz" for numbers that
// //are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// // (This is actually an interview question that has been claimed to weed out a significant
// //percentage of programmer candidates. So if you solved it, your labor market value just went up.)
// for (let number = 1; number.length < 100; number += 1) console.log(number);
