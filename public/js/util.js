/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно.
 *
 * @param {Number} min Первое число диапазона
 * @param {Number} max Второе число диапазона
 * @return {Number} Случайное целое число
 */
function getRandomNumberForRange(min, max) {
    min = Math.ceil(Math.abs(min));
    max = Math.floor(Math.abs(max));

    if (min === max) {
        return min;
    }

    if (min > max) {
        return Math.floor(Math.random() * (min - max + 1)) + max;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Функция для проверки максимальной длины строки.
 *
 * @param {String} string Проверяемая строка
 * @param {Number} maxLength Допустимая максимальная длина строки
 * @return {boolean}
 */
function isStringShort(string, maxLength) {
    const symbols = [...string];
    maxLength = Math.ceil(Math.abs(maxLength));

    if (symbols.length > maxLength) {
        return false;
    }
    return true;
}

export { getRandomNumberForRange, isStringShort };
