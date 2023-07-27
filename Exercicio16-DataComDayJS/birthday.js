const dayjs = require("dayjs");

//Date format to use = YYYY-MM-DD
const birthday = (date) =>{
    const birthday = dayjs(date);
    const today = dayjs();

    const ageInYears = today.diff(birthday, 'year');
    const nextBirthday = birthday.add(ageInYears + 1, 'years')
    const daysUntilNextBirthday = nextBirthday.diff(today, 'day')

    console.log(`Your age: ${ageInYears} Years old`);
    console.log(`Next birthday: ${nextBirthday.format('DD/MM/YYYY')}`);
    console.log(`Days until next birthday: ${daysUntilNextBirthday} day(s)`);
}

birthday('2002-11-13');