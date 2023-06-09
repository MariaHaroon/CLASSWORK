// Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById("main-content");


// // Display all child elements of “main-content” element.
console.log(mainContent.children);
var mainContentChildren = mainContent.children;
for (var i = 0; i < mainContentChildren.length; i++) {
  console.log(mainContentChildren[i]);
}

// // Get all elements of class “render” and show their innerHTML 
// // in browser.
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

// // Fill input value whose element id first-name using javascript.
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "bano";


// // Repeat part iv for id ”last-name” and “email”.
var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "qabil";

var emailInput = document.getElementById("email");
emailInput.value = "banoqabil@gmail.com";




// Use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
var formContent = document.getElementById("form-content");
console.log("Node type of 'form-content':", formContent.nodeType);


// ii. Show node type of element having id “lastName” and its child node.
var lastNameElement = document.getElementById("lastName");
console.log("Node type of 'lastName' element:", lastNameElement.nodeType);
console.log("Child node of 'lastName' element:", lastNameElement.firstChild);


// iii. Update child node of element having id “lastName”.
lastNameElement.childNodes[0].nodeValue = "New Last Name: leonardo";


// iv. Get First and last child of id “main-content”.
var mainContentElement = document.getElementById("main-content");
var firstChild = mainContentElement.firstElementChild;
var lastChild = mainContentElement.lastElementChild;

console.log("First Child of main-content:", firstChild);
console.log("Last Child of main-content:", lastChild);

// v. Get next and previous siblings of id “lastName”.
var lastNameElement = document.getElementById("lastName");
var nextSibling = lastNameElement.nextElementSibling;
var previousSibling = lastNameElement.previousElementSibling;

console.log("Next Sibling of lastName:", nextSibling);
console.log("Previous Sibling of lastName:", previousSibling);


// vi. Get parent node and node type of element having id “email”
var emailElement = document.getElementById("email");
var parentNode = emailElement.parentNode;
var nodeType = emailElement.nodeType;

console.log("Parent Node of email:", parentNode);
console.log("Node Type of email:", nodeType);


