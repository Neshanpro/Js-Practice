let result = prompt("input number: ");
result = parseInt(result);
let grade;

if (result <= 100 && result >= 80){
    grade = "A+";
}
else if (result <= 79 && result >= 70){
    grade = "A";
}
else if (result <= 69 && result >= 60){
    grade = "A-";
}
else if (result <= 59 && result >= 50){
    grade = "B";
}
else if (result <= 49 && result >= 40){
    grade = "C";
}
else if (result <= 39 && result >= 33){
    grade = "D";
}
else if (result <= 32 && result >= 0){
    grade = "F";
}
else {
    grade="Invalid Input!";
}
console.log("Your Grade: " + grade);