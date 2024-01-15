// 5. cоздать функцию getPercentage() которая принимает любой 
// объект из выше перечисленных и возвращает строку с процентом побед и поражений


const valerchik = {
    wins: 231,
    loses: 123
};

const olejik = {
    wins: 512,
    loses: 543
};


function getPercentage ({wins, loses}) {
    const overallGames = wins + loses;
    const overallPercentage = overallGames * 100;

    const percentWins = Math.round(wins / overallPercentage);
    const percentLoses = Math.round(loses / overallPercentage);

    return `Wins ${percentWins}%, loses ${percentLoses}%`;
}


console.log(getPercentage(valerchik));
console.log(getPercentage(olejik));


