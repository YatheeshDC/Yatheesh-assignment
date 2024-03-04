//16. write a function to calculate the sum of total marks in an array of objects 
//ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]

let total=[{
    sub:"maths",
    marks:60
},
{
    sub:"science",
    marks:70
},
{
    sub:"social",
    marks:80
},{
    sub:"kannada",
    marks:90
}]
let out=total.reduce((acc,curr)=>acc+curr.marks,0)
console.log(out)