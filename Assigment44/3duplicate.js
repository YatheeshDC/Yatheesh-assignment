//3. write a function to remove the duplicate element from an array
function remdup(){
    let res=[]
    for(i=0;i<a.length;i++){
        if(res.indexOf(a[i])==-1){
            res.push(a[i])
        }
    }
    return res
 }
 console.log(remdup(a=[1,2,3,1,2,4,3,5,4,5]))