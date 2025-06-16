const numbers = [0, 2, 4, 6, 8, 10];

// ���������� ������ �����
const filterEven = arr => arr.filter(n => n % 2 === 0);

// ���������� � �������
const squareArray = arr => arr.map(n => n * n);

// ���������� �������� �� ������� � �������� ��������
const filterByProperty = (arr, key, value) => arr.filter(obj => obj[key] === value);

// ������� ����� ��������� �������
const sumArray = arr => arr.reduce((sum, n) => sum + n, 0);

// ������� ������� �������
const applyToEach = (fn, arr) => arr.map(fn);

// ������������ �������
console.log("Task 1.");
console.log("Evens:", filterEven(numbers));
console.log("Squares:", squareArray(numbers));
console.log("Sum:", sumArray(numbers));

// ������ ���������� �� ��������
const objects = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];
console.log("Only fruits:", filterByProperty(objects, 'type', 'fruit'));

// ������� ������� �������
console.log("Task 2.");
const tripled = applyToEach(n => n * 3, numbers);
console.log("Tripled:", tripled);

// ����� ��������� ������ �����
console.log("Task 3.");
const evenNumbers = filterEven(numbers);
const squaredEvens = squareArray(evenNumbers);
const sumOfSquaredEvens = sumArray(squaredEvens);
console.log("Sum of squares of even numbers:", sumOfSquaredEvens);

// ���. ������: ������� �������� ���� �������� > threshold

// ���������� ��������
const average = arr => arr.length === 0 ? null : sumArray(arr) / arr.length;

// ������
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