const fs = require('fs');
var timeStart = process.hrtime()

function readBook() {
    const data = fs.readFileSync('./el_quijote.txt');
    let convertedData = data.toString();
    let numberOfLines = convertedData.split("\n");
    console.log(numberOfLines.length - 1);
}

readBook();
console.log('Are we sure?');
readBook();
totalTime = process.hrtime(timeStart)
console.log(`Time: ${totalTime[0]}s  ${totalTime[1]/ 1000000} ms`);
