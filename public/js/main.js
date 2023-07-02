import { getRandomNumberForRange, isStringShort } from './util.js';
import { getMockUsersPhotos } from './data.js';

getRandomNumberForRange(1, 20); // Для исключения ошибки линтера

isStringShort('good', 100); // Для исключения ошибки линтера

console.log('Mock data: ', getMockUsersPhotos());
