// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
function power(a, b) {
    return Math.pow(a, b);
}
console.log(power(2, 4));

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(leapYear(2023));

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
function triangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
console.log(triangleArea(3, 4, 5));

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.
function calculateAverage(subject1, subject2, subject3) {
    var average = (subject1 + subject2 + subject3) / 3;
    return average;
}
function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = 300;
    var obtainedMarks = subject1 + subject2 + subject3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    return percentage;
}

function mainFunction(subject1, subject2, subject3) {
  var average = calculateAverage(subject1, subject2, subject3);
  var percentage = calculatePercentage(subject1, subject2, subject3);

  console.log("Average marks: " + average.toFixed(1));
  console.log("Percentage: " + percentage.toFixed(1) + "%");
}
mainFunction(80, 75, 90);

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
function indexOf(string, searchChar) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === searchChar) {
      return i;
    }
  }
  return -1;
    }
  
console.log(indexOf("word", "o"));


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
function delVowels(sen) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var result = "";

  for (var i = 0; i < sen.length; i++) {
    var char = sen[i];
    if (!vowels.includes(char)) {
      result += char;
    }
  }

  return result;
}

console.log(delVowels("Hi I am maria"));

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
function countVowels(text) {
  var vowels = "aeiouAEIOU";
  var count = 0;

  for (var i = 0; i < text.length - 1; i++) {
    var char = text[i];
    var nextChar = text[i + 1];

    if (vowels.includes(char) && vowels.includes(nextChar)) {
      switch (char + nextChar) {
        case "ea":
        case "EA":
        case "ei":
        case "EI":
        case "eu":
        case "EU":
        case "io":
        case "IO":
        case "ia":
        case "IA":
        case "ou":
        case "OU":
          count++;
          break;
        default:
          break;
      }
    }
  }

  return count;
}
console.log(countVowels("Hi maria"));

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.
function convertMeters(distanceKm) {
      return distanceKm * 1000;
    }
    
    function convertFeet(distanceKm) {
      return distanceKm * 3280.84;
    }
    
    function convertInches(distanceKm) {
      return distanceKm * 39370.1;
    }
    
    function convertCentimeters(distanceKm) {
      return distanceKm * 100000;
    }
    
    function distanceConversions(distanceKm) {
      var distanceMeters = convertMeters(distanceKm);
      var distanceFeet = convertFeet(distanceKm);
      var distanceInches = convertInches(distanceKm);
    
      console.log("Distance in Meters: " + distanceMeters);
      console.log("Distance in Feet: " + distanceFeet);
      console.log("Distance in Inches: " + distanceInches);
      console.log("Distance in Centimeters: " + distanceCentimeters);
    }
    
    var distance = 100;
    console.log(distanceConversions(distance));


// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.
function overtimePay(hoursWorked) {
      var regularHours = 40;
      var overtimeRate = 12.0;
    
      if (hoursWorked <= regularHours) {
        return 0;
      } else {
        var overtimeHours = hoursWorked - regularHours;
        var overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
      }
    }
    var hours = 45;
    var overtimePay = overtimePay(hours);
    console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));


// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.
function calculateCurrencyNotes(amount) {
      var denomination100 = Math.floor(amount);
      var denomination50 = 0;
      var denomination10 = 0;
    
      if (amount % 1 !== 0) {
        return "Invalid input. Amount should be in whole hundreds.";
      }
    
      if (denomination100 >= 5) {
        denomination50 = Math.floor(denomination100 / 2);
        denomination100 = denomination100 % 2;
      }
    
      if (denomination50 >= 2) {
        denomination10 = Math.floor(denomination50 / 5);
        denomination50 = denomination50 % 5;
      }
    
      return {
        100: denomination100,
        50: denomination50,
        10: denomination10,
      };
    }
    
    var amount = prompt("Enter the  amount to withdraw!!");
    var parsedAmount = parseInt(amount);
    
    if (!isNaN(parsedAmount)) {
      var currencyNotes = calculateCurrencyNotes(parsedAmount);
      var result = "Currency Notes:\n\n";
      result += "100: " + currencyNotes[100] + " notes\n";
      result += "50: " + currencyNotes[50] + " notes\n";
      result += "10: " + currencyNotes[10] + " notes\n";
    
      document.write(result);
    } else {
      alert("Invalid input. Please enter a valid number.");
    }