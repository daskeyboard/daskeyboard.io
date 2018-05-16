```js
const os = require('os');


const cpus = os.cpus();
const numberOfCpu = cpus.length;


let percentages = new Array();

for (let i = 0; i < numberOfCpu; i++) {
    const test = cpus[i];
    const timeboot = test.times.user + test.times.idle + test.times.sys + test.times.irq + test.times.nice;
    const usagetime = timeboot - test.times.idle;
    percentages[i] = (usagetime / (timeboot)) * 100 ;
}

let total = 0;

for (let i = 0; i < numberOfCpu; i++) {
    total = total + percentages[i];
}

console.log('total usage: ', total / numberOfCpu);


// look for the max
let max = percentages[0];
for (let i = 0; i < numberOfCpu; i++) {
    if (percentages[i] > max) {
        max = percentages[i];
    }
}

console.log('max usage: ', max);
```