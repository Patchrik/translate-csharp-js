function main() {
  // Put your code here
  const names = [
    'Nashville',
    'Hong Kong',
    'The back yard',
    'Earth',
    'London',
    'The mall',
    'Ryman Auditorium',
    'The Great Wall of China',
  ];

  names.forEach((name) => console.log(name));

  // Need to add a new line.
  console.log('\n');

  // Filter the THE names into a new array to print.
  const theNames = names.filter((name) => name.includes('The'));

  theNames.forEach((name) => console.log(name));
}

main();
