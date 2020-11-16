function main() {
  // Put your code here
  const allSpells = [
    { Name: 'Turn enemy into a newt', IsEvil: true, EnergyReqired: 5.1 },
    {
      Name: 'Conjure some gold for a local charity',
      IsEvil: false,
      EnergyReqired: 2.99,
    },
    {
      Name: 'Give a deaf person the ability to heal',
      IsEvil: false,
      EnergyReqired: 100.0,
    },
    {
      Name: 'Make yourself emperor of the universe',
      IsEvil: true,
      EnergyReqired: 2.99,
    },
    {
      Name: 'Convince your relatives your political views are correct',
      IsEvil: false,
      EnergyReqired: 2921.5,
    },
  ];
  const GoodSpellList = allSpells.filter((spell) => spell.IsEvil != true);

  const EvilSpellList = allSpells.filter((spell) => spell.IsEvil == true);

  const GoodSpellBook = { title: 'Good Book', spellList: GoodSpellList };

  const EvilSpellBook = { title: 'Evil Book', spellList: EvilSpellList };

  const DisplaySpellBook = (spellBook) => {
    console.log(spellBook.title);
    spellBook.spellList.forEach((spell) => {
      console.log(spell.Name);
    });
  };

  // We're calling everything below.
  console.log('Do you believe in magic?');
  console.log('------------------------');
  DisplaySpellBook(GoodSpellBook);
  console.log('');
  DisplaySpellBook(EvilSpellBook);
}

main();
