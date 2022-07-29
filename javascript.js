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

//1. create a function that display
//2. loop through # symbols
//
//3. 7 times
//4. call function to console.log
for (let line = "#"; line.length < 8; line += "#") console.log(line);

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100,
//with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for
//numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that
//are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed out a significant
//percentage of programmer candidates. So if you solved it, your labor market value just went up.)
for (let number = 1; number.length < 100; number += 1) console.log(number);
