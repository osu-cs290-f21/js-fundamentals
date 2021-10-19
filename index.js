console.log("Hello, world!")

console.log("====================")
console.log("== Variables")
console.log("====================")

var theVariable = 4
console.log("== theVariable:", theVariable, "typeof(theVariable):", typeof(theVariable))

theVariable = "string"
console.log("== theVariable:", theVariable, "typeof(theVariable):", typeof(theVariable))

theVariable = 3.1415
console.log("== theVariable:", theVariable, "typeof(theVariable):", typeof(theVariable))

console.log("====================")
console.log("== Numbers")
console.log("====================")

var n = 9
var m = 5

console.log("== n / m:", n / m)

console.log("====================")
console.log("== Comparisons")
console.log("====================")

console.log("== 2 == 2:", 2 == 2)
console.log("== 2 == 3:", 2 == 3)
console.log("== 2 == '2':", 2 == '2')
console.log("== 2 === '2':", 2 === '2')
console.log("== 2 !== '2':", 2 !== '2')

console.log("====================")
console.log("== Strings")
console.log("====================")

var str1 = "This is a \"string\""
var str2 = 'This is also a "string"'
var concatenation = str1 + str2
console.log("== concatenation:", concatenation)
console.log("== str1 + 16:", str1 + 16)
console.log("== 16 + str1:", 16 + str1)

str1[3] = 'x'
console.log("== str1[3]:", str1[3])
console.log("== str1.replace('s', 'x'):", str1.replace('s', 'x'))
console.log("== 'decathlon'.indexOf('cat'):", 'decathlon'.indexOf('cat'))
console.log("== 'team'.indexOf('i'):", 'team'.indexOf('i'))
