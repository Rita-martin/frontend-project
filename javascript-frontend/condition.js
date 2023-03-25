// let x= 30;
// let y= 29.5;
// if (!(x>=y)){
//     console.log("first block");
// } else{
//     console.log("failed");
// }

// let hour =15;
// let greeting;

// if(hour<18){
//     greeting="goodday";
// } else if(hour>15){
//     greeting="good afternoon"
// } else{
//     greeting="good night"
// }
// console.log(greeting);

// grading system
let grade = 30;
let score;
if(grade>=70 && grade <=100){
    // console.log(score);
    score="A";
} else if(grade>=60 && grade<=69.9){
    score="B";
}else if (grade <=59.9 && grade >=50){
    score="c";
} else if (grade <= 49.9 && grade >=45){
    score ="D";
}else {
    score ="F";
}
console.log(score);

// let text = "we are the so-called \"vikings\" from the north";
// console.log(text);
// let stfNamer = "Apple, banana, kiwi";
// let part = str.toUpperCase;
// console.log(part);
// let fName = "Rita";
// let sName = "Martin";
// console.log(fName +" "+ sName);
// let text= fName.concat +sName.concat

let fName ="Sophia Gold";
let grades =4;

if(grades>=4.5 && grades <= 5.0){
    console.log(fName+" "+"graduated with first class");
// }else if(grade<0 || grade >5){
    // console.log("invalid grade")
} else if(grades<=4.4 && grades >=4.0){    
    console.log(fName+" "+"graduated with second class upper");
} else if(grades<=3.9 && grades >=3.0){    
    console.log(fName+" "+"graduated with second class lower");
} else if(grades<=3.8 && grades >=1.0){    
    console.log(fName+" "+"graduated with third class");
} else {
    console.log(fName +" extension");
}