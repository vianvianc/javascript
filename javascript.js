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

for (let hash = "#"; hash.length <= 7; hash += "#") {
    console.log(hash);
}



let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
// → 0
// → 2
// ...   etcetera
 //these two are identical



for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}
// → 0
// → 2
// ...   etcetera


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


//
// Looping a triangle
// You can start with a program that prints out the numbers 1 to 7, which you can derive by making a few modifications to the even number printing example given earlier in the chapter, where the for loop was introduced.
//     Now consider the equivalence between numbers and strings of hash char- acters. You can go from 1 to 2 by adding 1 (+= 1). You can go from "#" to "##" by adding a character (+= "#"). Thus, your solution can closely follow the number-printing program.
//     FizzBuzz
// Going over the numbers is clearly a looping job, and selecting what to print is a matter of conditional execution. Remember the trick of using the remainder (%) operator for checking whether a number is divisible by another number (has a remainder of zero).
// In the first version, there are three possible outcomes for every number, so you’ll have to create an if/else if/else chain.
//     The second version of the program has a straightforward solution and a clever one. The simple solution is to add another conditional “branch” to precisely test the given condition. For the clever solution, build up a string containing the word or words to output and print either this word or the number if there is no word, potentially by making good use of the || operator.
// 388
// Chessboard
// You can build the string by starting with an empty one ("") and repeatedly adding characters. A newline character is written "\n".
//     To work with two dimensions, you will need a loop inside of a loop. Put braces around the bodies of both loops to make it easy to see where they start and end. Try to properly indent these bodies. The order of the loops must follow the order in which we build up the string (line by line, left to right, top to bottom). So the outer loop handles the lines, and the inner loop handles the characters on a line.
//     You’ll need two bindings to track your progress. To know whether to put a space or a hash sign at a given position, you could test whether the sum of the two counters is even (% 2).
// Terminating a line by adding a newline character must happen after the line has been built up, so do this after the inner loop but inside the outer loop.
