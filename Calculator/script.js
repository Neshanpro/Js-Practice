console.log("Select an Option:\n1. Add \n2. Sub \n3. multi \n4. divide");

let num1 = prompt("Enter 1st number: ");
let num2 = prompt("Enter 2nd number: ");
let option = prompt("Choose option: ");
let result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

let num1Con = isNaN(num1);
let num2Con = isNaN(num2);
let optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Ïnvalid Input!");
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) {
        console.log("No result!");
    }
    else {
        console.log("Result: " + result);
    }
}