// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// const someNum = // 0 // 1 // -3

// if (someNum > 0) {
//   console.log(true);
// } else if (someNum < 0) {
//   console.log(false);
// } else {
//   console.log("This is zero!");
// }

//----------------------------------------------//

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const value = "test" // "qwerty" // true

// if (value === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

//----------------------------------------------//

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const someNum = 10 // 13 // 10

// if (someNum > 10) {
//   console.log(someNum - 5);
// } else if (someNum < 10) {
//   console.log(someNum + 5)
// } else {
//   console.log("Please enter another number");
// }


//----------------------------------------------//

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const monthNum = prompt("Введіть число від 1 до 12")

// switch (monthNum) {
//   case "1":
//     console.log("Це Січень");
//     alert("Це Січень");
//     break;
//   case "2":
//     console.log("Це Лютий");
//     alert("Це Лютий");
//     break;
//   case "3":
//     console.log("Це Березень");
//     alert("Це Березень");
//     break;
//   case "4":
//     console.log("Це Квітень");
//     alert("Це Квітень");
//     break;
//   case "5":
//     console.log("Це Травень");
//     alert("Це Травень");
//     break;
//   case "6":
//     console.log("Це Червень");
//     alert("Це Червень");
//     break;
//   case "7":
//     console.log("Це Липень");
//     alert("Це Липень");
//     break;
//   case "8":
//     console.log("Це Серпень");
//     alert("Це Серпень");
//     break;
//   case "9":
//     console.log("Це Вересень");
//     alert("Це Вересень");
//     break;
//   case "10":
//     console.log("Це Жовтень");
//     alert("Це Жовтень");
//     break;
//   case "11":
//     console.log("Це Листопад");
//     alert("Це Листопад");
//     break;
//   case "12":
//     console.log("Це Грудень");
//     alert("Це Грудень");
//     break;

//   case null:
//     console.log("Ви відмінили операцію!");
//     alert("Ви відмінили операцію!");
//     break;
//   case "":
//     console.log("Ви не ввели число!");
//     alert("Ви не ввели число!");
//     break;

//   default:
//     console.log("Можна вводити лише числа, і лише від 1 до 12! 🙈");
//     alert("Можна вводити лише числа, і лише від 1 до 12! 🙈");
//     break;
// }


//----------------------------------------------//

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let dataInput = prompt("Введить тризначне число")
// let dataNum = Number(dataInput)

// if (isNaN(dataNum)) {
//   console.log("Ви ввели не число!");
//   alert("Ви ввели не число!")
// } else if (dataNum <= 0) {
//   console.log("Введіть число більше нуля!");
//   alert("Введіть число більше нуля!")
// } else if (dataNum < 100 || dataNum > 999) {
//   console.log("Введене число не є тризначним!");
//   alert("Введене число не є тризначним!")
// } else {
//   let sum = 0;
//   while (dataNum > 0) {
//     sum += dataNum % 10
//     dataNum = Math.floor(dataNum / 10)
//   }
//   console.log(sum)
//   alert(sum)
// }

//----------------------------------------------//