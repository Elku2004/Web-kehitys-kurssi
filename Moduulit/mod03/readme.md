## Moduuli 03 tehtävät

# Tehtävä 1
const numerot = [];
const numerot2 = [];
let i = 1;
do {
    let num = prompt(`Anna numero ${i} :`);
    numerot.push(num)
    i++
} while (i < 6);

console.log(numerot);
console.log(numerot.length);

let j = 1;
do {
    numerot2.push(numerot[numerot.length - 1]);
    numerot.pop();
    j++;
} while (j < 6)

console.log(numerot2);