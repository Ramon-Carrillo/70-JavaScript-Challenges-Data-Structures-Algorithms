function diceGameSimulation(num) {
  let results = [];
  Array.from({ length: num }, () => {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let sum = dice1 + dice2;
    let result = "";
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }
    results.push({ dice1, dice2, sum, result });
  });
  return results;
}

module.exports = diceGameSimulation;
