/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно.
 *
 * Учтите, что диапазон может быть только положительный, включая ноль.
 * А также придумайте, как функция должна вести себя, если передать значение «до» меньшее,
 * чем значение «от», или равное ему.
 */
function getRandomNumberForRange(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

getRandomNumberForRange(1, 20);

/**
 * Функция для проверки максимальной длины строки.
 */
function isStringShort(string, maxLength) {
    const symbols = [...string];
    if (symbols.length > maxLength) {
        return false;
    }
    return true;
}

isStringShort('good', 100);
