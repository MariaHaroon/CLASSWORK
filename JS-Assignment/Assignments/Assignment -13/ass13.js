// 1. Write a program that displays current date and time in
// your browser.
var date = new Date();
document.write(date + '<br>' + '<br>');

// 2. Write a program that alerts the current month in words.
// For example December.
 let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
 let month = new Date().getMonth();
 document.write("<br>Current month is: "+months[month]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
document.write('<br>');
var day = new Date();
var day1 = day.toString();
var day2 = day1.slice(0,3) ;
document.write('Today is '+ day2+ '<br>' + '<br>');

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
var today = new Date();
var day = today.getDay();

if (day === 0 || day === 6) {
  document.write("It's Fun day");
} else {
  document.write("It's not Fun day");
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
document.write('<br>');
var firstfdays = new Date();
var dayOfMonth = firstfdays.getDate();
// document.write(d)

if ( dayOfMonth < 16){
    document.write('First Fifteen Days of the month'+ '<br>' + '<br>');    
}
else{
    document.write('Last days of the month'+ '<br>' + '<br>');
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
document.write('<br>');
var x = new Date();
document.write('Current Date: '+ x + '<br>');
var millsSince = x.getTime();
document.write('elapsed millisecods since January 1 , 1970: '+ millsSince + '<br>');
var min = millsSince / 1000 * 60 ;
document.write('elapsed minutes since January 1 , 1970: '+ millsSince + '<br>' + '<br>');

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
document.write('<br>');
var z = new Date();
var currentHrs = z.getHours();
if ( currentHrs > 12 ){
document.write('It\'s PM' + '<br>' + '<br>');
}
else{
document.write('It\'s AM' + '<br>' + '<br>');
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// let laterDate = new Date('Dec 31 2020');
// document.write("<br>Later date: "+laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var ramadanDate = new Date("Jun 18,2015");
var ramadanA = ramadanDate.getTime();
var ramadanB = new Date();
var ramadanC = ramadanB.getTime();
var ramadanD = ramadanC - b$$;
var ramadanE = Math.floor(ramadanD/(1000*60*60*24));
document.write(ramadanE + " days have passed since 1st Ramadan , 2015" + "<br>" + "<br>");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var reference = new Date(prompt("Enter the refrence date? "));
var referenceA = reference.getTime();
var referenceB = new Date("Jan 1,2015");
var referenceC = referenceB.getTime();
var referenceD = referenceA - referenceC ;
var referenceE = Math.floor(referenceD/(1000*60));
document.write("On refrence Date " + reference +" now " + referenceE + " seconds had passed since begining of 2015 " + "<br>" + "<br>");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
let currentDate = new Date();
document.write("Current date is: "+currentDate);
currentDate.setHours(currentDate.getHours()-1);
document.write("<br>1 hours ago: "+currentDate);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var dateObject = new Date();
var datmonth = dateObject.getFullYear();
var datunitss = datmonth-100;
var datcharges = new Date();
var date4 = date3.setFullYear(datunitss);

document.write("Current Date : "+dateObject+"<br>"+"<br>");
alert("100 years back,it was : " + date3);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
let age = +prompt("Enter your age please? ");
let currentYear = new Date().getFullYear();
let dobYear = currentYear - age;
document.write("Your age is: "+age);
document.write("<br>Your birth year is: "+dobYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge.
var customerName = new Date();
var currentmonth = customerName.toString();
var unitss = currentmonth.slice(4,8);
var charges = prompt("Enter your name?");
var E4 = +prompt("Enter number of units?");
var E5 = E4*16;

document.write("<p style='font-size: 24px;'> K - ELECTRIC BILL</p>");
document.write("Customer Name: "+charges+"<br>");
document.write("Current Month: "+unitss+"<br>");
document.write("Number of units charge : "+E4+"<br>");
document.write("Charge per unit: 16"+"<br>"+"<br>");
document.write("Net Amount Payable (with due date) : "+E5+"<br>");
document.write("Last Payable surcharge : 350"+"<br>");
document.write("Gross Amount Payable(After due date) : ", + (E5+350) + "<br>");

