"use strict"; 
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
           
//             return  onSuccess(`${pizzaName}`);
//         }

//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
// };


// В ЧОМУ ТУТ ПОМИЛКА НЕ РОЗУМ


// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         if (pizzaPalace.pizzas === pizzaName) {
//             return onSuccess(pizzaName)
//         }

//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     }
// };






// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));





// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray=[];
  
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }

// numbers.forEach((number, index) => {
//   if (number % 2 === 0) {
// newArray.push(number + value);
//     }else (newArray.push(number))
//   });
//    return newArray;
  
//   // Change code above this line
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))

// Change code below this line
// const getInactiveUsers = (users) => {
//     const inActiveUsers=users.filter((user, index,array)=>!user.isActive);
//    return  inActiveUsers;
// };
// Change code above this line


// // Task-1: Порахувати вік всіх юзерів у яких є ключ age.
// // Task-2: Порахувати кількість книжок користувачів, у яких є книга "Harry Potter"



// const friends = [{
//         name: "Anna",
//         books: ["Bible", "Harry Potter"],
//         age: 21
//     },
//     {
//         name: "Bob",
//         books: ["War and peace", "Romeo and Juliet"],
//         age: 26
//     },
//     {
//         name: "Alice",
//         books: ["War and peace", "Romeo and Juliet"]
//     },
//     {
//         name: "Oleksii",
//         books: ["Harry Potter", "Bible", "War and peace", "Romeo and Juliet"],
//         age: 26
//     },
// ]

// const useraAge = friends.reduce((acc, friend) => {
//     if (friend.hasOwnProperty("age")) {
//       return  acc + friend.age;
//     } return acc;
// }, 0);

// const useraAge = friends.reduce((acc, friend) => acc += friend.hasOwnProperty("age") ?  friend.age : 0, 0);


// console.log(useraAge);

// const totalBook = friends.reduce((acc, friend) => {
//     if (friend.books.includes("Harry Potter")) {
//         return acc + friend.books.length;
//     }return acc;
// }, 0);
 
    
    
   
// console.log(totalBook);

// const totalBook = friends.reduce((acc, friend) => acc += friend.books.includes("Harry Potter") ? friend.books.length : 0, 0);
// console.log(totalBook);




//створити функцію яка буде здатна прийняти різну к-ть параметрів перевірити чи вони являються числовим значеннями
//і ті які являються числовими значеннями просумувати між собою.Функція повинна поернути сумму всіх чисел

// addOverNum(15, 32, 6, 13, 19, 8)
// addOverNum(20, 74, Nan, 62, 46, 12, 36)
// addOverNum(15, 'boo', 6, true, 19, 8)

// function addOverNum(...args) {
//     return args.reduce((acc, el) => acc += typeof el === "number" && !Number.isNaN(el) ? el : 0, 0);
// }


// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, NaN, 62, 46, 12, 36));
// console.log(addOverNum(15, 'boo', 6, true, 19, 8));






// // // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// // // Not found
// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: ['Alex']
//     },
// ]

// //Not found
// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// // jhon
// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];


// function findNantsis(arr) {
//     const result = arr.filter(el => !el.know.length);
//     console.log('result :>> ', result);

//     if (result.length !== 1) {
//         console.log('not found');
//         return;
//     }
//     const name = result[0].name;
//     const isNartsis = arr.every(
//         el => el.know.includes(name) || el.name === name,
//     );
//     if (isNartsis) {
//         console.log(name);
//     } else console.log('not found');
// }

// findNantsis(people3);







// // Повернути обєкт де ключ це літера а значення скільки раз вона зустрічається в рядку
// const str = 'fsdfwefwcsdqwwfwffsdfdrgerfsf'
// // {
// //     f: 9,
// //     s: 4,
// //     d: 3,
// //     ...
// // }





// PRACICS

// / Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).
// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// student.getFullName(); //поверне 'Петрик Пяточкин'
// student.getCourse();   //поверне 3 (третій курс)


// class User {

//   #name;
//   #surname;
//   constructor(name, surname, year) {
//     this.#name = name;
//     this.#surname = this.#surname;
//   }
//   getFullName() {
//     return this.#name+this.#surname;
//   }

// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname)
//     this.year = year;
    
//   }
//   getCourse(

//   )
// }



// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}


// function fn(buyers, cases) {
//     }
//     return obj
// }
// console.log(fn([12,3,5,6,2,15,7],2))


// for (let i = 0; i < 2;i += 1, obj[i] = 0) {};
// for(let i = 1; i <=2; i+=1){
//     obj[i] = 0
// }






// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати даний масив, створювати новий не потрібно)
// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]
// const products = [{
//     id: 'sku1',
//     qty: 15,
// }, {
//     id: 'sku2',
//     qty: 21,
// }, {
//     id: 'sku3',
//     qty: 3,
// },  {
//     id: 'sku4',
//     qty: 1,
// }]




// const hogvarts = {
//     griffindor: [{
//             name: "Harry",
//             points: 15
//         },
//         {
//             name: "Hermiona",
//             points: 16
//         },
//         {
//             name: "Ron",
//             points: 14
//         },
//     ],
//     sliserin: [{
//             name: "Draco",
//             points: 25
//         },
//         {
//             name: "Goyl",
//             points: 40
//         },
//         {
//             name: "Crabbe",
//             points: 5
//         },
//     ],
// }



// const value = Number(prompt('Enter number'));

// if (value > 0) {
//   console.log(`Positive number`);
// } else if (value ===0) {
// console.log(`null`);
// }else {
//   console.log(`negative number`);
// }

// console.log(value);
// // console.log(typeof value);
// =================================30.10.2022===================================================================

const cars = [{
        model: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        model: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    },
{
        model: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
        model: 'Honda',
        type: 'Accord',
        price: 20000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        model: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }
]


const formEl = document.querySelector(".form")
formEl.addEventListener('submit', onSubmitClick);

function onSubmitClick(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const { keys, query } = evt.currentTarget.elements;
  // console.dir(keys);
  // console.dir(query);


  let optionValue = keys.value;
  let queryValue = query.value;
   console.log(keys.value);
  console.log(query.value);
}



function markup(arr) { 
return``
}