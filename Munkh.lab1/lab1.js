const numbers = [0, 2, 4, 6, 8, 10];

// Фильтрация четных чисел
const filterEven = arr => arr.filter(n => n % 2 === 0);

// Возведение в квадрат
const squareArray = arr => arr.map(n => n * n);

// Фильтрация объектов по наличию и значению свойства
const filterByProperty = (arr, key, value) => arr.filter(obj => obj[key] === value);

// Подсчет суммы элементов массива
const sumArray = arr => arr.reduce((sum, n) => sum + n, 0);

// Функция высшего порядка
const applyToEach = (fn, arr) => arr.map(fn);

// Тестирование функций
console.log("Task 1.");
console.log("Evens:", filterEven(numbers));
console.log("Squares:", squareArray(numbers));
console.log("Sum:", sumArray(numbers));

// Пример фильтрации по свойству
const objects = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];
console.log("Only fruits:", filterByProperty(objects, 'type', 'fruit'));

// функция высшего порядка
console.log("Task 2.");
const tripled = applyToEach(n => n * 3, numbers);
console.log("Tripled:", tripled);

// сумма квадратов чётных чисел
console.log("Task 3.");
const evenNumbers = filterEven(numbers);
const squaredEvens = squareArray(evenNumbers);
const sumOfSquaredEvens = sumArray(squaredEvens);
console.log("Sum of squares of even numbers:", sumOfSquaredEvens);

// Доп. задача: среднее значение всех значений > threshold

// Вычисление среднего
const average = arr => arr.length === 0 ? null : sumArray(arr) / arr.length;

// Данные
const data = [
    { id: 1, value: 10 },
    { id: 2, value: 25 },
    { id: 3, value: 7 },
    { id: 4, value: 31 },
    { id: 5, value: 15 }
];

const threshold = 12;
const valuesAboveThreshold = data
    .filter(obj => obj.value > threshold)
    .map(obj => obj.value);

const avg = average(valuesAboveThreshold);
console.log(`Average of values > ${threshold}:`, avg);