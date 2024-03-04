// 15. write a function to capitalize the each words first letter to capital 
//     Ex : ['abc','def','ghi']
// 	output : ['Abc', 'Def','Ghi"]

let a=["abc","def","ghi"]
let y=a.map(el=>(el.charAt(0).toLocaleUpperCase()+el.slice(1).toLowerCase()))
console.log(y)