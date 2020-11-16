function main() {
  // Put your code here

  let die1 = { Value: 0, dieString: 'unknown' };

  let die2 = { Value: 0, dieString: 'unknown' };

  const dieRoll = (die) => {
    setValue(die);
    setDisplay(die);
  };

  const setValue = (die) => {
    die.Value = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  };

  const setDisplay = (die) => {
    switch (die.Value) {
      case 1:
        die.dieString = '\u2680';

        break;
      case 2:
        die.dieString = '\u2681';

        break;
      case 3:
        die.dieString = '\u2682';

        break;
      case 4:
        die.dieString = '\u2683';

        break;
      case 5:
        die.dieString = '\u2684';

        break;
      case 6:
        die.dieString = '\u2685';

        break;
    }
  };

  const rollTenTimes = () => {
    console.log("Let's roll some dice, baby!");
    console.log('---------------------------');

    for (let index = 0; index <= 10; index++) {
      dieRoll(die1);
      dieRoll(die2);

      let message = `${die1.dieString} + ${die2.dieString} == ${
        die1.Value + die2.Value
      }`;
      if (die1.Value === die2.Value) {
        message += ' DOUBLES!';
      }

      console.log(message);
    }
  };
  rollTenTimes();
}

main();
