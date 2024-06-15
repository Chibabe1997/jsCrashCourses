function isLeapYear(year){
    if (year % 4 === 0){
        return "leap year"
    } else if (year % 100 === 0){
        return "not leap year"
    } else if (year % 400 === 0){
        return "leap year"
    } else {
        return "not leap year"
    }
}
isLeapYear(2024);