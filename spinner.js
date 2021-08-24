let increment = 0;
while ( increment < 2000) {

setTimeout(() => {
  process.stdout.write('\r|   ');
}, increment);
increment += 200;
setTimeout(() => {
  process.stdout.write('\r/   ');
}, increment);
increment += 200;
setTimeout(() => {
  process.stdout.write('\r-   ');
}, increment);
increment += 200;
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, increment);
}