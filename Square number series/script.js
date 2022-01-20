let n = parseInt(prompt("Enter Number: "));
let total = 0;
let series = "";

for (var x = 1; x <= n; x++) {
    total += x * x;
    series += (x ** 2).toString();
    if (x == n) {
        continue;
    }
    series += "+";
}

console.log(`${series}=${total}`);