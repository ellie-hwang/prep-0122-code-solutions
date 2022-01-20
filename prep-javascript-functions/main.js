function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('Ellie');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}

var addAndMultiply = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 ' + addAndMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivide = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 ' + multiplyAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers ' + difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Ellie', 'Hwang');
console.log(fullName);

function cube(number) {
  return number ** 3;
}

var cube5 = cube(5);
console.log(cube5);
