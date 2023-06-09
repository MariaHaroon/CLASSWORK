// MATH EXPRESSIONS

// . Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.
document.write("<br>");

var num1 = 3;
var num2 = 5;
var result = num1 + num2
document.write("sum of 3 and 5 is " + result)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
document.write("<br>");

var num1 = 3;
var num2 = 5;
var result = num1 - num2
document.write("subtraction of 3 and 5 is " + result)
document.write("<br>");


var num1 = 3;
var num2 = 5;
var result = num1 * num2
document.write("multipication of 3 and 5 is " + result)
document.write("<br>");

var num1 = 3;
var num2 = 5;
var result = num1 / num2
document.write("division of 3 and 5 is " + result)
document.write("<br>");

var num1 = 3;
var num2 = 5;
var result = num1 % num2
document.write("modulus of 3 and 5 is " + result)


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
document.write("<br>");

var num;

document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num += 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.
document.write("<br>");

var movieticket = "600"
var tickets = 5
var result = movieticket * tickets
document.write("<br>" + "Total cost to buy 5 tickets to a movie is " + result + "PKR")


// 5. Write a script to display multiplication table of any 
// number in your browser.
for (var i=1; i<=10; i++){
    document.write("<br>" + "2 x " + i + " = " + 2*i)
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
document.write("<br>");

var celsius = 30;
var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");
let fahrenheit2 = 80;
let celsius2 = (fahrenheit2 - 32) * 5/9;
console.log(fahrenheit2 + "°F is " + celsius2 + "°C");


// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser
document.write("<br>");

var price1 = 650;
var price2 = 100;
var price1quantity = 3;
var price2quantity = 7;
var shippingcharges = 100;
total = price1*1+price2*6+shippingcharges*10;
document.write("<br>" + "price of item 1 is " + price1 + "<br>" + "Quantity of item 1 is " +  price1quantity + "<br>" + "price of item 2 is" + price2 + "<br>" + "Quantity of item 2 is" + price2quantity + "<br>" + "shipping charges" + shippingcharges + "<br>" + "Total cost of your order is" + total)


// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser
document.write("<br>");

var totalmarks = 980
var obtainedmarks = 804
var percentage = 804/980*100
document.write("<br>" + "Total Marks: " + totalmarks + "<br>" + "Obtained Marks: " + obtainedmarks + "<br>" + "Percentage: " + percentage + "%")

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<br>");

let usd = 10;
let sar = 25;
let exchangeRateUsdToPkr = 104.80;
let exchangeRateSarToPkr = 28;
let totalPkr = (usd * exchangeRateUsdToPkr) + (sar * exchangeRateSarToPkr);
console.log("Total currency in Pakistani Rupees: " + totalPkr);



// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
document.write("<br>");

var num = 3
var num2 = 3+5*10/2
console.log(num2)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
document.write("<br>");

var currentyear = 2023
var birthyear = 2002
var result = currentyear - birthyear
document.write("<br>" + "Current Year:" + currentyear)
document.write("<br>" + "Birth Year:" + birthyear)
document.write("<br>" + "Your age is:" + result)




// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<br>");

var radius = prompt("Enter the radius of the circle:");
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br>");




// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<br>");

var favsnack = choclatechip;
var currentage = 15;
var maxage = 65;
var amount = 3;
var result = maxage - currentage;
document.write(result)