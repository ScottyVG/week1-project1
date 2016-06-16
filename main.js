/*
=======================================================

** Week 1 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

EXAMPLE:
// 1. Log your 'hello world' to the console.
console.log("Question 1")
console.log("hello world")

BASIC TRACK: 1-7
ADVANCED TRACK: 8-11
=======================================================
*/



// 1. Log your name to the console (as a string).
console.log("Question 1");
console.log("Scotty VG");



// 2. Declare a new variable called 'name',
//    and then log it to the console.
var name = "name";
console.log(name);



// 3. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
var number1, number2;

number1 = 8;
number2 = 3;
console.log(number1%number2);




// 4. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places a space between the strings.

var a = "Cheers";
var b = "Mate";
var greeting = a +" "+ b;
console.log(greeting);



// 5. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the console.

var one = "5";
var two = "3";
console.log(typeof one+two);
console.log(typeof one-two);
console.log(typeof one/two);
console.log(typeof 5+two);
console.log(typeof NaN);
console.log((5 + 3 + Number(one)));
console.log("When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it wants, using a set of rules that often aren’t what you want or expect. This is called type coercion.");



// 6. Create an alert.

alert("Tobias: Oh my god! We're having a fire! Sale!");



// 7. Create a prompt that asks a user to pick a number.
//    Then double the answer.

var promptData = prompt("Pick a number");
console.log(promptData*2);


// ADVANCED TRACK

// 8. Ask for a user's name, age and city.
//    In a single command display/log the sentence:
//    "My name is...I'm....years old, and I live in....."


var name = prompt("What is your name?");
var age = prompt("How old are you?");
var city = prompt("Where do you live?");


console.log("My name is ", name, " I'm ", age, " years old, and I live in ", city);


// 9. Create an alert that uses the response from a prompt.

var fav = prompt("What's your favorite ice cream?");
alert("User's favorite ice cream is " + fav + ".");



// 10. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches

var height = prompt("What is the height of your rectangle?");
var length = prompt("What is the length of your rectangle?");
var area = height * length;

alert("The area of the rectangle is " + area + ".");


// 11. Prompt a user for their name. Find the length (number of characters).

var name = prompt("What is your name?");

alert("Your name consists of " + name.length + "digits.");
