// 12. Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let physics=70;
let chemistry=80;
let biology=33;
let mathematics=50;
let computer=99;
let percentage;
let total;
total=physics+chemistry+biology+mathematics+computer;
percentage=total/5.0;
// console.log(` ${avg} `);
if (percentage>=90) {
    console.log(`Grade A`);
    
}
if (percentage>=80) {
    console.log(`Grade B`);
    
}
if (percentage>=70) {
    console.log(`Grade C`);
    
}
if (percentage>=60) {
    console.log(`Grade D`);
    
}
if (percentage>=40) {
    console.log(`Grade E`);
    
}
if (percentage<40) {
    console.log(`Grade F`);
    
}

