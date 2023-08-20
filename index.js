// Завдання 1

/**
 * Функція `filterStudentsByGrade` фільтрує студентів за рівнем оцінки та виводить інформацію про них.
 *
 *  grade - Рівень оцінки для фільтрації.
 */
function filterStudentsByGrade(students, grade) {
  //Виведеме в консоль критичну помилку з текстом якщо ви бачите це повідомлення завдання 1 виконано не правильно
  // Очищення консолі перед виведенням
  // Виведемо повідомлення для відстеження роботи програми з текстом "Завдання: 1 =============================="
  // Відфільтруємо тільки тих студентів оцінка яких співпадає з grade
  for (const student of students) {
    console.assert(student.grade !== grade, `Student: ${student.name}`);
  }
  // За допомогою перебору масиву виведемо повідомлення для відстеження роботи програми з іменем кожного студента,
  //  який має необхідну оцінку
}

// Виклик функції для фільтрації студентів з рівнем "A"
filterStudentsByGrade(
  [
    { name: "John", grade: "A" },
    { name: "Kate", grade: "B" },
    { name: "Mike", grade: "A" },
    { name: "Anna", grade: "C" },
    { name: "Tom", grade: "B" },
  ],
  "A"
);

// Завдання 2
/**
 * Функція `logArrayElements` приймає масив та виводить кожен його елемент в консоль.
 *
 *  arr - Масив для обробки.
 */
function logArrayElements(arr) {
  // Перевіряємо, чи arr є масивом.
  // Якщо arr не є масивом, виведеме в консоль критичну помилоку з текстом "Аргумент має бути масивом!"
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  if (!Array.isArray(arr)) {
    console.error("Аргумент має бути масивом!");
    return null;
  }

  // Перебираємо кожен елемент масиву
  for (const element in arr) {
    console.log(`Елемент ${element}: ${arr[element]} `);
  }
  // Виводимо в консоль поточний елемент масиву та його індекс в форматі Елемент <індекс>: <значення>
}

// Перевірка
console.log("Завдання: 2 ==============================");
logArrayElements([1, 2, 3, "a", "b", "c"]);
// Виведе в консоль:
// Елемент 0: 1
// Елемент 1: 2
// Елемент 2: 3
// Елемент 3: a
// Елемент 4: b
// Елемент 5: c

// Завдання 3
/**
 * Функція `warnAboutMaxArrayLength` перевіряє, чи перевищує довжина масиву вказане максимальне значення.
 *
 *  arr - Масив для перевірки.
 *  maxLength - Максимальна довжина масиву.
 */
function warnAboutMaxArrayLength(arr, maxLength) {
  // Перевіряємо, чи arr є масивом, а maxLength є числом.
  // Якщо arr не є масивом або maxLength не є числом, виведеме в консоль критичну помилоку з текстом: "Перший аргумент має бути масивом, другий аргумент має бути числом!".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  if (!Array.isArray(arr) && typeof maxLength !== "number") {
    console.error(
      "Перший аргумент має бути масивом, другий аргумент має бути числом!"
    );
    return null;
  }
  // Перевіряємо, чи довжина масиву перевищує максимальну допустиму довжину.
  arr.length > maxLength
    ? console.warn("Увага! Довжина масиву перевищує максимально допустиму!")
    : console.warn("Увага! Довжина масиву не перевищує максимально допустиму!");
  // Якщо довжина масиву перевищує максимальну, виводимо попередження про потенційну проблеми з текстом: "Увага! Довжина масиву перевищує максимально допустиму!".
  // Якщо довжина масиву не перевищує максимальну, виведеме в консоль корисне повідомлення з текстом: "Довжина масиву не перевищує максимально допустиму.".
}

// Перевірка
console.log("Завдання: 3 ==============================");
warnAboutMaxArrayLength([1, 2, 3, 4, 5], 3);
// Виведе в консоль попередження: "Увага! Довжина масиву перевищує максимально допустиму!".

// Завдання 4
/**
 * Функція `compareArrays` приймає два масиви чисел як аргументи і порівнює їх.
 * Вона використовує `console.assert()` для перевірки того, чи обидва масиви є однаковими.
 *
 *  arr1 - Перший масив чисел.
 *  arr2 - Другий масив чисел.
 */
function compareArrays(arr1, arr2) {
  // Сортуємо масиви за зростанням.
  arr1.sort();
  arr2.sort();
  // Оскільки напряму порівняти масиви за допомогою оператора === не можно, перетворимо ії в json і порівняємо
  // Використовуємо `console.assert()`, щоб вивести помилку, якщо масиви не однакові.

  console.assert(
    JSON.stringify(arr1) === JSON.stringify(arr2),
    "Масиви не однакові!"
  );
}

console.log("Завдання: 4 ==============================");
compareArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]);
// Виведе "Assertion failed: Масиви не однакові!"

// Завдання 5
/**
 * Функція `buildMatrix` створює двовимірний масив (матрицю) розміром size x size,
 * заповнює її випадковими числами від 0 до 9, а потім виводить матрицю в консоль
 *
 *  size - розмір матриці.
 *  Повернеться згенерована матриця.
 */
function buildMatrix(size) {
  // Перевіряємо, чи size є числом.
  // Якщо size не є числом, виведеме в консоль критичну помилку з текстом "Аргумент має бути числом!".
  // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
  if (typeof size !== "number") {
    console.error("Аргумент має бути числом!");
  }
  // Створюємо порожній масив який буде нашою матрицею.
  let matrixArr = Array();
  // Цикл для заповнення рядків матриці, лічильник і має бути від 0 до розміру матриці.
  for (let i = 0; i < size; i++) {
    // Створюємо порожній масив, який буде рядком матриці.
    matrixArr[i] = [];
    for (let j = 0; j < size; j++) {
      let num = Math.trunc(Math.random() * 10);
      matrixArr[i][j] = num;
    }
    // Цикл всередені циклу для заповнення колонок матриці,лічильник j має бути від 0 до розміру матриці.
    // Генеруємо випадкове число від 0 до 9 округляємо його до меншого цілого, і додаємо його до рядка.
    // Додаємо рядок до матриці.
  }
  // Виводимо матрицю в консоль за допомогою як таблицю.
  console.table(matrixArr);
  // Повертаємо створену матрицю.
  return matrixArr;
}

console.log("Завдання: 5 ==============================");
buildMatrix(5);
// Виведе в консоль матрицю розміром 5x5, заповнену випадковими числами від 0 до 9.

// Завдання 6
/**
 * Функція `traceBackward` виводить числа від заданого до 1 у зворотному порядку,
 * використовуючи рекурсію.
 *
 *  n - стартове число.
 */
function traceBackward(n) {
  // Виводимо поточне число n.
  console.log(n);
  n > 1 ? traceBackward(n - 1) : console.trace();
  // Якщо n є більше 1, викликаємо функцію traceBackward знову з аргументом n - 1.
  // Виведемо стек викликів, коли досягнемо 1.
}

console.log("Завдання: 6 ==============================");
traceBackward(5);
// Виведе в консоль числа від 5 до 1, а потім виведе стек викликів.

// Завдання 7
/**
 * Функція `displayGroupedInfo` виводить інформацію про групу студентів в консоль, організовуючи дані у групи.
 * students - масив об'єктів-студентів.
 */
function displayGroupedInfo(students) {
  // Переберомо об'єкт за допомого for of
  for (const student of students) {
    console.group(`Студент: ${student.name}`);
    console.info(`Вік: ${student.age}`);
    console.info(`Предмет: ${student.subject}`);
    console.groupEnd();
  }
  // Створимо групу з повідомленням `Студент: ${student.name}`
  // Виведемо корисне повідомлення з текстом `Вік: ${student.age}`
  // Виведемо корисне повідомлення з текстом `Предмет: ${student.subject}`
  // Закриємо групу
}

console.log("Завдання: 7 ==============================");
displayGroupedInfo([
  { name: "Alex", age: 22, subject: "Math" },
  { name: "Max", age: 23, subject: "Physics" },
  { name: "Anna", age: 21, subject: "Chemistry" },
]);
// Виведе в консоль:
// Студент: Alex
//   Вік: 22
//   Предмет: Math
// Студент: Max
//   Вік: 23
//   Предмет: Physics
// Студент: Anna
//   Вік: 21
//   Предмет: Chemistry

// Завдання 8
/**
 * Функція `validateUserInput` перевіряє коректність введених користувачем даних.
 * Для цього використовуємо `console.warn()` та `console.assert()`.
 *
 *  userInput - об'єкт з введеними користувачем даними.
 */
function validateUserInput(userInput) {
  // Перевіремо умову наявності імені користувача, якщо воно відсутнє виводимо "Помилка: ім'я користувача відсутнє!"
  console.assert(
    !userInput.hasOwnProperty("username"),
    console.warn("Помилка: ім'я користувача відсутнє!")
  );
  // Перевіремо умову наявності паролю, якщо він відсутній виводимо "Помилка: пароль відсутній!"
  console.assert(
    !userInput.hasOwnProperty("password"),
    console.warn("Помилка: пароль відсутній!")
  );
  // Перевірка довжини паролю чи менше вона ніж 8,якщо ні виводимо повідомлення про потенційну проблему з текстом "Попередження: пароль має бути довшим за 8 символів!"
  console.assert(
    userInput.password.length > 8,
    console.warn("Попередження: пароль має бути довшим за 8 символів!")
  );
}

console.log("Завдання: 8 ==============================");
validateUserInput({ username: "alex", password: "pass" });
// Виведе в консоль:
// Попередження: пароль має бути довшим за 8 символів!

// Завдання 9
/**
 * Функція `calculateTotalPrice` обчислює загальну вартість товарів та логує час виконання.
 *
 * products - Масив об'єктів товарів з властивостями `price` та `title`.
 */
function calculateTotalPrice(products) {
  // Початок вимірювання часу
  console.time("calculateTotalPrice");
  // Створення змінної total яка буде нашою загальную ціною, початкове значення нуль
  let total = 0;
  // Перебираємо кожен об'єкт товару та додаємо ціну товару до загальної вартості
  for (const price of products) {
    total += price.price;
  }
  // Виведення загальної вартості товарів у форматі "Загальна вартість товарів:", total
  console.log(`Загальна вартість товарів: ${total}`);
  // Зупинка вимірювання та виведення часу
  console.timeEnd("calculateTotalPrice");
}

console.log("Завдання: 9 ==============================");
const products = [
  { title: "Телефон", price: 1000 },
  { title: "Ноутбук", price: 2000 },
  { title: "Планшет", price: 500 },
];

calculateTotalPrice(products);
// Виведе
// Загальна вартість товарів: 3500
// calculateTotalPrice: 0.994ms (час може відрізнятись)

// Завдання 10
/**
 * Функція `countVowelsAndConsonants` пораховує кількість голосних і приголосних літер у слові.
 *
 *  word - слово, для якого потрібно порахувати кількість літер.
 */
function countVowelsAndConsonants(word) {
  // Створюємо рядок де будуть всі голосні "aeiou"
  const vowels = "aeiou";
  let countVolw = 0;
  let countCons = 0;
  // Перебираємо кожну літеру у слові за допомогою for of
  for (const symbol of word) {
    let symbolLowerCase = symbol.toLowerCase();
    if (vowels.includes(symbolLowerCase)) {
      countVolw++;
    } else {
      countCons++;
    }
  }
  // Перетворюємо літеру на малу літеру для порівняння
  // Перевіряємо, чи є літера в нашому рядку з голосними,якщо так виводимио лічильник голосних, інакше приголосних
  // Скидаємо лічильники
  console.log(`Голосні: ${countVolw}, Приголосні: ${countCons}`);
}
console.log("Завдання: 10 ==============================");
countVowelsAndConsonants("HelloWorld!");
