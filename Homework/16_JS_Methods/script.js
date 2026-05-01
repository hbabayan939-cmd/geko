let numbers = [12,5,8,21,3,17,9,30,2,14];

console.log(numbers);
for(let i = 0; i < numbers.length; i++)
    if(numbers[i] > 10)
    console.log("10ic mec tver:", numbers[i]); 
let s = 0;
for(let i = 0; i < numbers.length; i++)
    s += numbers[i];
console.log("Gumar:", s);

let min = numbers[0];
for(let i = 1; i < numbers.length; i++)
    if(numbers[i] < min)
        min = numbers[i];
console.log("Min tiv:", min);
let q = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        q++;
    }
}
console.log("Zuyg tveri qanak:",q);