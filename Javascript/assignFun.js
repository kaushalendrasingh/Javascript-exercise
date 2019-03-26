let assignFun = function( currentMarks , totalMarks ){

let percentage = (currentMarks / totalMarks) *100;
let grade;
if(percentage >= 90)
{
 grade='A';
}
else if(percentage >= 80)
{
    grade='B';
}


console.log(`percentage is ${percentage} and grade is ${grade}`);
}

assignFun(90,100);