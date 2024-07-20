/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:
*/


const howOld = (age, year) => {
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
  
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}