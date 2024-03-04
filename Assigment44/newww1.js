let x=["abc","efg","hij"]
let y=x.map(el=>el.slice(0,2).toLowerCase()+el.charAt(2).toUpperCase())
// let res=arr.map(el=>(el.charAt(0,2).toUppercase()+el.charAt(2).toUppercase()))
console.log(y)
