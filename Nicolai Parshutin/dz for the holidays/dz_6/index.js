let averageGrade;
function getAverageGrade(one, two, three, four){
    averageGrade = Math.round((one + two + three + four)/4);
    return averageGrade; 
}

console.log(getAverageGrade(4,4,5,5));




// 6. Написать функцию которая возвращает годовую оценку по любому предмету (функция должна принимать 4 числа);