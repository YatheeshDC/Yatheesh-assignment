 //2. Sort an array without using built in methods

let a=[8,6,9,4,5,2,3,7,0]
let temp=[]
for(i=0;i<a.length;i++){
    for(j=i;j<a.length;j++){
        if(a[i]>a[j]){
            temp=a[i]
            a[i]=a[j]
            a[j]=temp

        }
    }
}
console.log(a)