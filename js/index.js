// // Масив унікальних відвідуваних предметів, відсортований за алфавітом.
// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
// // ===================================================================================================

// // Метод filter() для фільтрації унікальних елементів.
// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const uniqueSortedCourses = students.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// // ==================================================================================================
// // Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в
// //  алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((name) => name.author)
//   .sort((a, b) => a.localeCompare(b));
// console.log(names);
// // =================================================================================================
// // Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і
// // повертала загальну кількість друзів(властивість friends) усіх користувачів з масиву users.
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalFriendCount = (users) =>
//   users.reduce((totalFriends, friend) => {
//     totalFriends += friend.friends.length;
//     return totalFriends;
//   }, 0);
// console.log(getTotalFriendCount(users));
// // ============================================================================================================
// // Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
// //   щоб вона повертала загальний баланс користувачів(властивість balance),
// //     стать яких(властивість gender) збігається зі значенням параметра gender.
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((user) => user.gender === gender)
//     .reduce((totalBalance, friend) => {
//       totalBalance += friend.balance;
//       return totalBalance;
//     }, 0);

// // Change code above this line
// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));
// ==============================================================================================================const listWithId = document.querySelector('#menu');
const listWithId = document.querySelector("#menu");
listWithId.style.textTransform = "uppercase";
listWithId.style.fontSize = "24px";
console.log(listWithId);

const listWithClass = document.querySelector(".menu");
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = "tomato";
console.log(firstMenuItem);

