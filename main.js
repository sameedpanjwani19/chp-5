
var firstNum = +prompt("Enter first number");
var secondNum = +prompt("Enter second number");
var add = firstNum + secondNum;
document.write("Sum of " + firstNum + " and " + secondNum + " is " + add + "<br>");

var sub = firstNum - secondNum;
document.write("Subtraction of " + firstNum + " and " + secondNum + " is " + sub + "<br>");
var mul = firstNum * secondNum;
document.write("Multiplication of " + firstNum + " and " + secondNum + " is " + mul + "<br>");
var div = firstNum / secondNum;
document.write("Division of " + firstNum + " and " + secondNum + " is " + div + "<br>");
var mod = firstNum % secondNum;
document.write("Modulus of " + firstNum + " and " + secondNum + " is " + mod + "<br>");

var number;
document.write("Value after variable declaration is: " + number + "<br>");
number = 5;
document.write("Initial value: " + number + "<br>");
number++;
document.write("Value after increment is: " + number + "<br>");
number += 7;
document.write("Value after addition is: " + number + "<br>");
number--;
document.write("Value after decrement is: " + number + "<br>");
number = number % 3;
document.write("The remainder is: " + number + "<br>");

var ticketPrice = 600;
var total = ticketPrice * 5;
document.write("The total cost to buy 5 tickets to a movie is " + total + "PKR" + "<br>");

var tableNumber = 5;
var i = 0;
document.write("Table of " + tableNumber + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");
document.write(tableNumber + " X " + ++i + " = " + tableNumber*i + "<br>");

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
fahrenheit = 77;
celsius = (fahrenheit - 32) * 5 / 9;
document.write(celsius + "C is " + fahrenheit + "F" + "<br/>"); 
document.write(fahrenheit + "F is " + celsius + "C" + "<br/>");

var itemprice1 = 150;
var itemprice2 = 350;
var quantityItem1 = 2; 
var quantityItem2 = 4;
var shippingCharges = 100;

var total = (itemprice1 * quantityItem1) + (itemprice2 * quantityItem2) + shippingCharges;
document.write("Price of Item 1 is " + itemprice1 + "<br/>");
document.write("Quantity of Item 1 is " + quantityItem1 + "<br/>");
document.write("Price of Item 2 is " + itemprice2 + "<br/>");
document.write("Quantity of Item 2 is " + quantityItem2 + "<br/>");
document.write("Shipping Charges " + shippingCharges + "<br/>");
document.write("<br/>");
document.write("Total cost of your order is " + total);

var totalMarks = 1100;
var marksObtained = 910;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h3>" + "Marks Sheet" + "</h3>");
document.write("Total Marks: " + totalMarks + "<br/>");
document.write("Marks Obtained: " + marksObtained + "<br/>");
document.write("Percentage: " + percentage);

var pkr = (10 * 104.80) + (25 * 28);
document.write("<h3>" + "Currency Conversion in PKR" + "</h3>");
document.write("Total Currency in PKR: " + pkr);

var num = 5;
num = (((num + 5) * 10) / 2);
document.write("<h3>" + "Arithmetic Operation in single statement" + "</h3>");
document.write("Output: " + num);

var year = 2020;
var birthYear = 1996;
var age = year - birthYear;
document.write("<h3>" + "Age Calculator" + "</h3>"); 
document.write("Current Year: " + year + "<br/>");
document.write("Birth Year: " + birthYear + "<br/>");
document.write("Your age is: " + age);

document.write("<h3>" + "The Geometrizer" + "</h3>");
var radius = 7;
document.write("Radius of a Circle: " + radius + "<br/>");

var  circumference = 2 * 3.142 * radius;  
document.write("The circumference is: " + circumference + "<br/>");
var area = 3.142 * radius * radius;
document.write("The area is: " + area);

document.write("<h3>" + "The Lifetime Supply Calculator" + "</h3>");
var snack = "Chocalate Chip";

var age = 23;
var maxAge = 50;
var amount = 3;
var eat = (60 - 23) * (365 * 3);
document.write("Favorite Snack: " + snack + "<br/>");
document.write("Current Age: " + age + "<br/>");
document.write("Estimated Maximum Age: " + maxAge + "<br/>");
document.write("Amount of snacks per day: " + amount + "<br/>");
document.write("You will need " + eat + " to last you until the ripe old age of " + maxAge);
