//11. Reverse a string a without using built in method 

function revstr(str){
    let res=''
    for(i=str.length-1;i>=0;i--)
{
    res=res+str[i]
}
    return res
}
let strn="Bangalore"
console.log(revstr(strn))