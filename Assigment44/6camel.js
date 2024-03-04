//6. write a function to conver snake_case to camelCase

function tocmlspace(input){
    let res=''
    let cptl=false
    for(i=0;i<input.length;i++){
        let curr=input[i]
        if(curr == '_'){
            cptl=true
        }
        else if(cptl){
            res+=curr.toUpperCase()
            cptl=false
        }
        else{
            res+=curr
        }
    }
    return res
}

console.log(tocmlspace("it_is_camel_case"))
