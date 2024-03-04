
// 20. Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]

function dupl(arr1, arr2) {
    const cmbarr = arr1.concat(arr2);
    const newnum = new Set(cmbarr);
    const newarr = Array.from(newnum);
    return newarr;
}

const a = [1, 2, 3, 4, 5];
const b = [5, 3, 7, 8, 9];

const nonRepeated = dupl(a, b);
console.log(nonRepeated);
