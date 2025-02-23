//weired Coercion

console.log(null + 5); // 5 (null → 0)
console.log(undefined + 5); // NaN (undefined → NaN)
console.log(null == 0); // false
console.log(null >= 0); // true
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0
console.log([] + []); // ""
console.log([] - 1); // -1 ([] → 0)


//edge cased in Coercion

console.log("5" + true); // "5true" (string + boolean → concatenation)
console.log("10" + "5"); // "105" (Concatenation because both are strings)

//String Coercion
console.log("5" + 2); // "52"
console.log(2 + "5"); // "25"
console.log("5" + 2 + 3); // "523"
console.log(2 + 3 + "5"); // "55"


// {} + []	{} is a block, +[] becomes 0	0
// [] + []	"" + "" (empty strings)	""
// [] - 1	0 - 1	-1
