let increment = 0, index = 0;;
while ( increment < 2200) {
setTimeout(() => {
  index === 0 ? process.stdout.write('\r|   ') : index  === 1 ? process.stdout.write('\r/   ') : 
  index  === 2 ? process.stdout.write('\r-   ') : index  === 3 ? process.stdout.write('\r\\   ') : "";
index++; if (index === 4) index = 0;
}, increment);
increment += 200;
}