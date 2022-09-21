// Fisher–Yates shuffle algorithm
export const getMixedArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let t = array[i]
        array[i] = array[j]
        array[j] = t
    }
    return array;
}

export const getDeclension = (number) => {
    number = Math.abs(number) % 100
    const number1 = number % 10

    if (number > 10 && number < 20) {
        return 'ходов'
    }
    if (number1 > 1 && number1 < 5) {
        return 'хода'
    }
    if (number1 === 1) {
        return 'ход'
    }
    return 'ходов'
}

export const getTranslatedLevel = {
    light: 'лёгком',
    medium: 'среднем',
    hard: 'тяжёлом'
}



