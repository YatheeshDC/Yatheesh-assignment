//13. Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original.

let originalObject = { a: 1, b:5,c:{e:6},g:{h:8}};  
let deepCopy = JSON.parse(JSON.stringify(originalObject)); 

// deepCopy.a = 3;  

deepCopy.g.h = 4;    
console.log("oobj",originalObject)
console.log("deepcopy",deepCopy)