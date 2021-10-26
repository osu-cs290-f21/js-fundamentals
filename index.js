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

console.log("====================")
console.log("== Functions")
console.log("====================")

function addStuff(a, b, c) {
  // console.log("== In addStuff, arguments:", arguments)
  // if (arguments.length !== 3) {
  //
  // }
  // if (!c) {
  //   console.log("== c is falsy")
  // }
  return a + b + c
}

console.log("== addStuff(1, 2, 3):", addStuff(1, 2, 3))
console.log("== addStuff('1', '2', '3'):", addStuff('1', '2', '3'))
console.log("== addStuff(1, 2, '3'):", addStuff(1, 2, '3'))
console.log("== typeof(addStuff):", typeof(addStuff))
console.log("== typeof(undefined):", typeof(undefined))
console.log("== addStuff(1, 2):", addStuff(1, 2))
console.log("== addStuff(1, 2, 3, 4, 5, 6, 7):", addStuff(1, 2, 3, 4, 5, 6, 7))

var foo = addStuff;
console.log("== foo(1, 2, 3):", foo(1, 2, 3))

var bar = function () {
  console.log("== Inside our anonymous function")
}
bar()

console.log("====================")
console.log("== Arrays")
console.log("====================")

var array = [ 1, '2', foo, [ 'a', 'b', 'c' ] ]
console.log("== array:", array)
console.log("== typeof(array):", typeof(array))
console.log("== array.length:", array.length)
console.log("== array.indexOf('2'):", array.indexOf('2'))
console.log("== array.indexOf(3):", array.indexOf(3))

for (var i = 0; i < array.length; i++) {
  console.log("== array[" + i + "]:", array[i])
}

function printArrayElement(elem) {
  console.log("== In printArrayElement(), elem:", elem, ", arguments[1]:", arguments[1])
}

array.forEach(printArrayElement)

array.forEach(function (blah, anotherArg) {
  console.log("== In forEach(), blah:", blah, "anotherArg:", anotherArg)
})

console.log("====================")
console.log("== Objects")
console.log("====================")

var mapping = {
  'cat': 'cute',
  'dog': 'loyal',
  'fish': 'boring'
}
console.log("== mapping:", mapping)
console.log("== mapping['cat']:", mapping['cat'])

var student = {
  name: 'Luke Skywalker',
  firstName: 'Luke',
  lastName: 'Skywalker',
  gpa: 3.75,
  email: 'TheLastJedi@hotmail.com',
  getFullName: function () {
    return this.firstName + " " + this.lastName
  }
}
console.log("== student:", student)
console.log("== student['name']:", student['name'])
console.log("== student.name:", student.name)

var field = 'gpa'
console.log("== student[field]:", student[field])
console.log("== student.getFullName():", student.getFullName())

console.log("====================")
console.log("== Classes")
console.log("====================")

function Student(firstName, lastName, gpa) {
  this.firstName = firstName
  this.lastName = lastName
  this.gpa = gpa
}

Student.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName
}

var s = new Student("Leia", "Organa", 4.0)
console.log("== s:", s)
console.log("== s.getFullName():", s.getFullName())

var s2 = new Student("Han", "Solo", 2.5)
console.log("== s2:", s2)
console.log("== s2.getFullName():", s2.getFullName())
