//Triangle classifier program
//Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral , isosceles , or scalene. Use an if-else statement.

let side1=5;
let side2=4;
let side3=7;
if(side1===side2 && side2===side3){
    console.log("The triangle is equilateral");
} else if(side1===side2 || side2===side3 || side1===side3){
    console.log("The triangle is isosceles");
} else {
    console.log("The triangle is scalene");
}   