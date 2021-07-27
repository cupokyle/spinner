const lineCycle = "|/-\\|/-\\|";
let time = 100;
for (let char of lineCycle) {
  time += 200;
  setTimeout(() =>{
    process.stdout.write(`\r${char}   `);
  }, time);
}