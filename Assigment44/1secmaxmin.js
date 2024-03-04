//1. Find a 2nd maximum and Minimum number in an array
//second maximum number
//    let  a=[ 10,30,25,5,]
//     let max1=a[0]
//     let max2=a[1]
//     for(i=0;i<a.length;i++){
//         if(a[i]>max1){
//             max2=max1
//             max1=a[i]
//         }
//         else if(a[i]<max1 && a[i]>max2){
//             max2=a[i]
//         }
        
//     }
//     console.log(max2)

//second minimum number

    let  a=[ 10,30,25,5,]
    let min1=a[0]
    let min2=a[1]
    for(i=0;i<a.length;i++){
        if(a[i]<min1){
            min2=min1
            min1=a[i]
        }
        else if(a[i]>min1 && a[i]<min2){
            min2=a[i]
        }
        
    }
    console.log(min2)

