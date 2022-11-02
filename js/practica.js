"use strict"; 


// const testNames = ['Mia', 'Kira', 'Poli', 'Sarah', 'Stam', 'John'];
// // console.table(testNames);
// // console.log(testNames.length - 1);
// // console.log(testNames[5]);


// const lastIndex = testNames.length - 1;
// console.log(lastIndex);


// for (let i = 0; i <= lastIndex; i += 1) {
//     // // console.log(testNames[i]);
//     // console.log(testNames[i] += '--7');
// }

// // for (const testName of testNames) {
// //     console.log(testName);
// // }

// const purchases = [10, 20, 1250];
// let total = 0;

// // for (let i = 0; i < purchases.length; i += 1) {
// //     console.log(purchases[i]);
// //     total += purchases[i];
// // }


// for (const value of purchases) {
//      total += value;
// }
// console.log('Общая сумма по корзине: ', total);





// const logins = ['mango', 'car', 'domdd', 'apple', 'shshsh'];
// const loginToFind = 'apple';
// let message='';

// for (let i= 0; i < logins.length ; i += 1) {
//     const login = logins[i];
//     // console.log(login);
    
//     if (login === loginToFind) {
//         message = `Пароль ${loginToFind} найден`;
//         break;
//     }
//     message = `Пароль не найден`;

// }

// console.log(message);



// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
  

//     message=message.split(" ");
  
// return  (message)  * pricePerWord;
//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10)



//Перевірити чи юзер ввів емейл.
// в propmt() юзер вводить емейл якщо ця стрінга містить '@' та '.'ми виводимо меседж що перевірка успішна, якщо ні то виведимо що перевірка не успішна


// function emailCheck() {
//    const email = prompt("enter email");
//    console.log(email);
//    if (email.includes('@') && email.includes('.')) {
//       console.log(`Succes`);
//       return;
//    }
//   console.log(`Not correct`);
   
// }
// emailCheck();




//Створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів. (users)
//2 параметр це масив з чоловічими іменами. (mens)
// Функція повина повертати масив з жіночими іменами.

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function sortUsres(users, men) {

// }


// function sortUsers( users, mens) {
//    const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
//    const men = ['Artem', 'Maksim', 'David', 'Roman'];
//    let womens = [];
//    for (const user of users) {
//    if(user.includes(men))



//       return womens;
//    }


// }
// sortUsers(users, mens);




//Замінити всі розширення файлів з .css на .js
//const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];



// const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];
// for (let i = 0; i < files.length; i += 1) {
//     files[i] = files[i].replace(".css", ".js");
// }
// console.log(files);


// another var

// const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];

// let newArr = files.join(", ").replaceAll(".css", ".js").split(", ");
// console.log(newArr);



//Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)

//Функція повертає кількість днів

// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// використовувати цикл while()

// function calcDays(depth) {

// }
// calcDays(42)//виповзе за 8 днів
// calcDays(17)//виповзе за 3 дні
// calcDays(18)//виповзе за 4 дні


// function calcDays(depth) {
//    let day = 0;
//    let total = 0;
// // скыльки пройшов

//    const daySpeed = 7;
//    const nightSpeed = 2;

//    while (total < depth) {
//       total += daySpeed;
//       day += 1;
//       if (total < depth) {
//          total -= nightSpeed;
//       }
//    }
//    console.log(day);
// }



// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
// const names = ['Anna', 3, 'Roma', 17, 'Kate', 14, 15, 'Oleg'];


// function mutArray() {
//    const newArray = [];
//    for (let i = 0; i < names.length; i += 1) {
//       if (typeof (names[i]) !== "string") {
//          names.splice(i, 1);
//          i -= 1;
//       }
//    }   console.log(names);
      

// }

// mutArray();




// Cтворити функцію яка буде приймати 1 параметр та знаходити в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// 1 масив чисел (arr)

const numbers = [1, 2, 3, 1, 2, 17, 19]

// function getCommonElements(arr) {

// };
// console.log(getCommonElements(numbers));


// function getCommonElements(arr) {
//    const newArray = [];
//    for (let i = 0; i < arr.length; i += 1) {
//       if (arr.includes(arr[i], i + 1)){
// newArray.push(arr[i])
//       }
//    }
//    return newArray;


// }
// console.log(getCommonElements(numbers));


// Потрібно створити світлофор за допомогою switch()
// Користувач вводить в prompt() колір який він бачить
// В результаті отримує меседж з дією яку повинен виконати
// Світлофор може мати 4 стани green (GO), yellow (READY),red (STOP), будь що інше означає що сфітлофор не працює (BE CAREFUL)

// const massage = prompt();

// console.log(massage);
// switch (massage) {
//    case "green":
//       console.log('GO');
//       break;
   
//       case "yellow":
//       console.log('READY');
//       break;
   
//    case "red":
//       console.log('STOP');
//       break;
   
   
//    default: console.log('BE CAREFUL');
// }
   


// // Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив всіх значень
// властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// /**
//  *
//  * @param {*} propName
//  * @returns
//  */
// function getAllPropValues(propName) {
//    // Change code below this line
//    let propValue = [];
//    for (const product of products) {
//       if (product[propName]) {
//          propValue.push(product[propName])
 
//       }
    

//    } return propValue
// }
// console.log(getAllPropValues("name"));



// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

