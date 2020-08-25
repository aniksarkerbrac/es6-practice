//const
const wifeName = "Katrina";
console.log(wifeName);

const numbers = [12,45];
numbers[1]= 88;
numbers.push(12);
console.log(numbers);

const nayok = {name:"sakib khan",phone:538305803};

//let- it can't go outside the scope
let patientName = "Rahim chacha";
console.log(patientName);

let sum = 0;
for(let i =0; i<10; i++){
    sum= sum +1;
}
console.log(i); // here i will not print because we use let. If we use var then it will print the value of i outside the loop