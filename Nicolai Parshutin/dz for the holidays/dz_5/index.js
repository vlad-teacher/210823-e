const valerchik = {
    wins: 213,
    loses: 123
};

const olejik = {
    wins: 51,
    loses: 64
};

function getPercentage(obj){
    let sum = obj.loses + obj.wins;
    let percentLoses = obj.loses/sum * 100;
    let percentWins = obj.wins/sum * 100;
    console.log(`процент побед ${percentWins.toFixed(2)}%, процент поражений ${percentLoses.toFixed(2)}%`);
}

getPercentage(valerchik);
getPercentage(olejik);


// 5. Валерчик и Олежик очень любят поиграть в контр страйк,
// Даны два объекта, в которых записано сколько раз побеждал каждый из них
// const valerchik = {
//     wins: 213,
//     loses: 123
// };

// const olejik = {
//     wins: 51,
//     loses: 64
// };

// cоздать функцию getPercentage() которая принимает любой объект из выше перечисленных и возвращает строку с процентом побед и поражений в  виде 
// 'процент побед 45%, процент поражений 55%'