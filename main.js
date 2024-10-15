/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';


// TASK PART 1

function to_fahrenheit(celsius) {
    
    let fahrenheit = Math.round((celsius * 9/5) + 32); // Fahrenheit = (Celsius * 9/5) + 32

    return fahrenheit;

}


// TASK PART 2

function to_celsius(fahrenheit) {
    
    let celsius = Math.round ((fahrenheit - 32) * 5/9); // Celsius = (Fahrenheit - 32) * 5/9

    return celsius;

}


// TASK PART 3 - SKIP

function roll_dice(qty, sides) {

    let sum = randInt(1, sides)

    return sum;

}

function randInt(min, max) {
    
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return rnd;

}


//TASK PART 4

function area_circle(radius) {

    let area = Math.PI * (radius**2);

    return area;

}


// TASK PART 5

function cylinder_volume(radius, height) {

    let volume = area_circle(radius) * height;

    return volume;

}


// TASK PART 6

function percent(score, total) {

    let percent_grade = (score / total) * 100

    return (`${percent_grade}%`)

}


