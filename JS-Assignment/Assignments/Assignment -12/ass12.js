// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var number = +prompt('Enter a positive integar: ');
// if( number > 0){
//         document.write("Number: "+ number +"<br>");
//         document.write("Round of value: "+ Math.round(number)  +"<br>");
//         document.write("Floor value: "+ Math.floor(number) +"<br>");
//         document.write("Ceil value: "+ Math.ceil(number) +"<br>" + "<br>");
//}

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var number1 = +prompt('Enter a negative integar: ');
// if( number1 < 0){
//         document.write("Number: "+ number1 +"<br>");
//         document.write("Round of value: "+ Math.round(number1)  +"<br>");
//         document.write("Floor value: "+ Math.floor(number1) +"<br>");
//         document.write("Ceil value: "+ Math.ceil(number1) +"<br>" + "<br>");
//}

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var absoluteValue = +prompt('Enter a number:');
// document.write('The absolute value of ' + absoluteValue + ' is ' + Math.abs(absoluteValue) + '<br>' + '<br>' );


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
var diceNum = Math.random() *6 ;
document.write("The value of dice is: " + Math.ceil(diceNum) + '<br>' + '<br>');


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
coinToss = Math.random() * 2 ;
coinTossFloor = Math.floor(coinToss)
document.write(coinTossFloor + '<br>');
if(coinTossFloor == '2'){
    document.write('Random coin value:  HEADS' + '<br>' + '<br>'  );}
else if(coinTossFloor == '1'){
    document.write('Random coin value:  TAILS' + '<br>' + '<br>'  );}

    // 6. Write a program that shows a random number between 1
// and 100 in your browser.
var randomNum = Math.random()*100;
document.write("Random number between 1 and 100: " + Math.ceil(randomNum) + '<br>' + '<br>');


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms



// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
var SecretNumber = 4
var UserInput1 = +prompt ( 'Guess the sercret number between 1 to 10')
if (UserInput1 == SecretNumber) {
   alert ( 'Congratulations! you got it')
}
 else if ( UserInput1 < SecretNumber) { 
   alert ( 'Sorry try again! your guess is too low')
 } 
 else if ( UserInput1 > SecretNumber) { 
   alert ( 'Sorry try again! your guess is too high')
 } 