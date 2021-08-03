'use strict';

document.querySelector('button').addEventListener('click', () => {
    let day = document.querySelector('#dd').value;
    let month = document.querySelector('#mm').value;
    let year = document.querySelector('#yyyy').value;
    let result = learnTheZodiac(day, month);
    let div = document.querySelector('.result');
    div.innerHTML = result;
    document.querySelector('#dd').value = '';
    document.querySelector('#mm').value = '';
    document.querySelector('#yyyy').value = '';
});

function learnTheZodiac(day, month) {

    let zodiac;

    /* Водолей  */
    if (day >= 21 && day <= 31 && month == 1) {
        zodiac = 'Ваш зодиак Водолей';
    } else if (day >= 1 && day <= 19 && month == 2) {
        zodiac = 'Ваш зодиак Водолей';

    }

    /* Рыбы  */
    else if (day >= 20 && day <= 29 && month == 2) {
        zodiac = 'Ваш зодиак Рыбы';
    } else if (day >= 1 && day <= 20 && month == 3) {
        zodiac = 'Ваш зодиак Рыбы';

    }

    /* Овен  */
    else if (day >= 21 && day <= 31 && month == 3) {
        zodiac = 'Ваш зодиак Овен';
    } else if (day >= 1 && day <= 20 && month == 4) {
        zodiac = 'Ваш зодиак Овен';

    }

    /* Телец  */
    else if (day >= 21 && day <= 30 && month == 4) {
        zodiac = 'Ваш зодиак Телец';
    } else if (day >= 1 && day <= 21 && month == 5) {
        zodiac = 'Ваш зодиак Телец';

    }

    /* Близнецы  */
    else if (day >= 22 && day <= 31 && month == 5) {
        zodiac = 'Ваш зодиак Близнецы';
    } else if (day >= 1 && day <= 21 && month == 6) {
        zodiac = 'Ваш зодиак Близнецы';
    }

    /* Рак  */
    else if (day >= 22 && day <= 30 && month == 6) {
        zodiac = 'Ваш зодиак Рак';
    } else if (day >= 1 && day <= 22 && month == 7) {
        zodiac = 'Ваш зодиак Рак';
    }

    /* Лев  */
    else if (day >= 23 && day <= 31 && month == 7) {
        zodiac = 'Ваш зодиак Лев';
    } else if (day >= 1 && day <= 21 && month == 8) {
        zodiac = 'Ваш зодиак Лев';
    }

    /* Дева  */
    else if (day >= 22 && day <= 31 && month == 8) {
        zodiac = 'Ваш зодиак Дева';
    } else if (day >= 1 && day <= 23 && month == 9) {
        zodiac = 'Ваш зодиак Дева';
    }

    /* Весы  */
    else if (day >= 24 && day <= 30 && month == 9) {
        zodiac = 'Ваш зодиак Весы';
    } else if (day >= 1 && day <= 23 && month == 10) {
        zodiac = 'Ваш зодиак Весы';
    }

    /* Скорпион  */
    else if (day >= 24 && day <= 31 && month == 10) {
        zodiac = 'Ваш зодиак Скорпион';
    } else if (day >= 1 && day <= 22 && month == 11) {
        zodiac = 'Ваш зодиак Скорпион';
    }

    /* Стрелец  */
    else if (day >= 23 && day <= 30 && month == 11) {
        zodiac = 'Ваш зодиак Стрелец';
    } else if (day >= 1 && day <= 22 && month == 12) {
        zodiac = 'Ваш зодиак Стрелец';
    }

    /* Козерог  */
    else if (day >= 23 && day <= 31 && month == 12) {
        zodiac = 'Ваш зодиак Козерог';
    } else if (day >= 1 && day <= 20 && month == 1) {
        zodiac = 'Ваш зодиак Козерог';
    } else {
        zodiac = 'Проверьте правильность введенных данных.';
    }
    return zodiac;
}