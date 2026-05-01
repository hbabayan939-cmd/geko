//arajadranq 1
let numbers = [12, 5, 8, 21, 3, 17, 9, 30, 2, 14];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//arajadranq 2
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }
}

//arajadranq 3
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}
console.log(total);

//arajadranq 4
let poqr = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < poqr) {
        poqr = numbers[i];
    }
}
console.log(poqr);

//arajadranq 5
let zuyg = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        zuyg = zuyg + 1;
    }
}
console.log(zuyg);
