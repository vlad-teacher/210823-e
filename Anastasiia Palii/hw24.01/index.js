// Callback
function processNames(names, callback1, callback2) {
    const fullNames = names.map(name => name + " Smith");
    const callback1Result = callback1(fullNames);
    callback2(callback1Result);
  }
  
  // 1.  array 
  function myFuncName(inputArray) {
    return inputArray.filter((value, index, self) => self.indexOf(value) !== index);
  }
  console.log(myFuncName([1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3])); // [1, 4, 6, 74]
  
  // 2. 
  const randomArray = Array.from({ length: 8 }, () => Array.from({ length: Math.floor(Math.random() * 6) + 1 }, () => Math.floor(Math.random() * 10)));
  const maxSumArray = randomArray.reduce((maxArray, currentArray) => (maxArray.reduce((a, b) => a + b, 0) > currentArray.reduce((a, b) => a + b, 0) ? maxArray : currentArray));
  console.log(maxSumArray);
  
  // 3. 
  const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 90) + 10);
  const evenTwoDigitNumbers = randomNumbers.filter(num => num % 2 === 0 && num >= 10 && num <= 99);
  console.log(evenTwoDigitNumbers);
  
  // 4. 
  
  const fbPlayersByTeams = fbTeam.reduce((acc, player) => {
    const { playerName, team } = player;
    if (!acc[team]) {
      acc[team] = [];
    }
    acc[team].push({ playerName });
    return acc;
  }, {});
  console.log(fbPlayersByTeams);