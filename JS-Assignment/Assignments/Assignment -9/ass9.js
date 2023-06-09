// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentanames = []

// 2. Declare an empty array using JS object notation to store
// student names in future.
var students = {
    snames: []
};


// 3. Declare and initialize a strings array.
let subjects = ["english", "urdu", "Math's"];

// 4. Declare and initialize a numbers array.
let numbers = ["1", "2", "3"]

// 5. Declare and initialize a boolean array.
let boolean = [true, false]

// 6. Declare and initialize a mixed array.
let mixedarr = ["english", "1", true]


// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:
var arr =["SC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
document.write(arr)

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:
var studentname = ["sarah", "yumna", "irda"]
var score = ["70", "80", "90"]

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var colors = ["Red", "Green", "Blue"];

document.write("Initial Array: " + colors + "<br><br>");

var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);

var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);

colors.unshift("Yellow", "Orange");

colors.shift();

colors.pop();

var indexToAdd = prompt("Enter the index to add a color:");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);

var indexToDelete = prompt("Enter the index to delete color(s):");
var numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colors.splice(indexToDelete, numberOfColorsToDelete);

document.write("Updated Array: " + colors + "<br><br>");

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
var studentscore = ["70", "85", "90"]
studentscore.sort()


// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.



var cities = ["Karachi", "Lahore", "Sukkar", "New York", "Paris"];
var selectedCities = [];

selectedCities = cities.slice(1, 4);

document.write("Cities Array: " + cities + "<br><br>");
document.write("Selected Cities Array: " + selectedCities + "<br><br>");



// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This", "is", "my", "cat"];
var arr2 = arr.join(" ");
console.log(arr2);


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
var myarr1 = [];
myarr1.push("keyboard");
myarr1.push("mouse");
myarr1.push("printer");
myarr1.push("monitor");

for (let i = 0; i < myarr1.length; i++) {
  console.log(myarr1[i]);
}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last Index First Out
var myarr2 = [];
myarr2.push("keyboard");
myarr2.push("mouse");
myarr2.push("printer");
myarr2.push("monitor");
myarr2.reverse();
console.log(myarr2);

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method:
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write('<option>' + phoneManufacturers[i] + '</option>');
}
document.write('</select>');
