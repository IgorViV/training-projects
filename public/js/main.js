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

getRandomNumberForRange(1, 20); // Для исключения ошибки линтера

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

isStringShort('good', 100); // Для исключения ошибки линтера

// Генерация моковских данных
const MIN_NUMBER_PHOTO = 1;
const MAX_NUMBER_PHOTO = 25;
const MIN_COUNT_LIKES = 15;
const MAX_COUNT_LIKES = 200;
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const MIN_NUMBER_NAME = 0;
const MIN_COUNT_COMMENTS = 1;
const MAX_COUNT_COMMENTS = 6;
const MOCK_MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const MOCK_DESCRIPTIONS = [
    'Мое фото',
    'Я в отпуске',
    'Мы в Москве',
    'Моя девчонка',
    'Наша радость',
    'Гордость семьи',
    'Пекник на природе',
];
const MOCK_NAMES = ['Игорь', 'Иван', 'Марина', 'Андрей', 'Маргарита', 'Антон'];
let mockUsersPhotos = [];

const getCommentMessages = () => {
    let commentMessages = [];
    let countMessage = getRandomNumberForRange(1, 2);

    for (let j = 1; j <= countMessage; j++) {
        let message =
            MOCK_MESSAGES[getRandomNumberForRange(0, MOCK_MESSAGES.length - 1)];

        if (commentMessages.includes(message)) {
            continue;
        }

        commentMessages.push(message);
    }

    return commentMessages;
};

const getArrayOfComments = () => {
    let comments = [];
    let numberOfComments = getRandomNumberForRange(
        MIN_COUNT_COMMENTS,
        MAX_COUNT_COMMENTS
    );

    for (let i = MIN_COUNT_COMMENTS; i <= numberOfComments; i++) {
        comments.push({
            id: i,
            avatar: `img/avatars/avatar-${getRandomNumberForRange(
                MIN_NUMBER_AVATAR,
                MAX_NUMBER_AVATAR
            )}.svg`,
            message: getCommentMessages(),
            name: MOCK_NAMES[
                getRandomNumberForRange(MIN_NUMBER_NAME, MOCK_NAMES.length - 1)
            ],
        });
    }

    return comments;
};

const getMockDescription = () => {
    return MOCK_DESCRIPTIONS[
        getRandomNumberForRange(0, MOCK_DESCRIPTIONS.length - 1)
    ];
};

const getMockUsersPhotos = () => {
    let userPhoto;

    for (let i = MIN_NUMBER_PHOTO; i <= MAX_NUMBER_PHOTO; i++) {
        userPhoto = {
            id: i,
            url: `photos/${i}.jpg`,
            description: getMockDescription(),
            likes: getRandomNumberForRange(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
            comments: getArrayOfComments(),
        };
        mockUsersPhotos.push(userPhoto);
    }
};

getMockUsersPhotos();
