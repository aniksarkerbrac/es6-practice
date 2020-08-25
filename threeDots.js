// Adding two or more array together.
const ages =[12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 46, 24, 29];
//const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2,5, ...ages3];
console.log(allAges2);

const a = 454;
const b = 2432;
const c = 243;
//const maximum = Math.max(a,b,c);
const takapoisha = [454, 2432, 3643];
//const takapoisha1 =[43,3437,44];
const maximum = Math.max(...takapoisha); // find the maximum value from the array
console.log(maximum);