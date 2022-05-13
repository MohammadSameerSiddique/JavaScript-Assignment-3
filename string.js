            //Chapter-21 to 25

/*
1. Write a program that takes two user inputs for 
first and last name using prompt and merge them in a new 
variable titled fullName. Greet the user using his full name.

var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName + lastName; 
console.log(fullName);
*/


// 2. Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser.

// var mobileName = prompt("Enter Your Favorite Mobile Name");
// var mobileLength = mobileName.length;
// document.write("My favorite phone is :"+" "+mobileName+"</br>"+"Length of string :"+mobileLength);

// 3. Write a program to find the index of letter “n” in the 
// word “Pakistani” and display the result in your browser. 

// var a = "Pakistani";
// var b = a.indexOf("n");
// document.write("String :"+" "+a+"</br>"+"Index of 'n' :"+" "+b);

// 4. Write a program to find the last index of letter “l” in 
// the word “Hello World” and display the result in your browser.

// var c = "Hello World";
// var d = c.lastIndexOf("l")
// document.write("String :"+" "+c+"</br>"+"Last index of 'l':"+" "+d);

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var a = "Pakistani";
// var b = a.charAt(3);
// document.write("String :"+" "+a+"</br>"+"Character at 3 index :"+" "+b);

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(lastName);
// console.log(fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var hyder = "Hyderabad is the city of Pakistan";
// var replace = hyder.replace("Hyderabad","Islamabad");

// document.write("Message :"+" "+hyder+"</br>");
// document.write("After replacement :"+" "+replace);

// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. 
// They play cricket and football together.”

// var a = "Ali and Sami are best friends.They play cricket and football together.";
// var b = a.replace(/and/g, "&");
// document.write("Before replacement :"+" "+a+"</br>");
// document.write("After replacement :"+" "+b);

// 9. Write a program that converts a string “472” to 
// a number 472. Display the values & types in your browser.

// var str = "472";
// var str1 = Number(str);
// document.write("Value :"+" "+str+"</br>"+"Type :"+" "+(typeof str));
// document.write("</br></br>"+" "+"Value :"+str+"</br>"+"Type :"+" "+(typeof str1));

// 10. Write a program that takes user input. 
// Convert and show the input in capital letters.

// var input = prompt("Enter Your Name");
// var up = input.toUpperCase();
// document.write("Input :"+" "+input+"</br>");
// document.write("Upper case :"+" "+up);

// 11. Write a program that takes user input. 
// Convert and show the input in title case.

// 12. Write a program that converts the variable num to string. 
// var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser.

// var a = 35.36;
// var b = String(a).split(".");
// var c = b.join("");
// document.write("Number :"+" "+a+"</br>"+"Result :"+" "+c);

// 13. Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], 
// prompt the user to enter a valid username. For character codes of [@.

 
// 14. You have an array 
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. 
// Note: Perform case insensitive search. 
// Whether the user enters cookie, Cookie, COOKIE or coOkIE, 
// program should inform about its availability.


// var input = prompt ("Welcom to Our Bakery");
// var items =["cake","apple pie","cookie","chips","patties"];

// var a = false;

// for (var i = 0; i < items.length; i++) {
//   if (input === items[i]) {
//     document.write(input +" "+ "is available in our bakery");
//     a = true;
//     break;
//   }
// }
// if (a === false) {
//     document.write("We are sorry." + input +" "+ "is not available in our bakery");
// }