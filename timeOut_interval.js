
// SET TIMEOUT
// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log('Delayed 3');
// }, 2000);
// console.log(4)
// console.log(5)
// console.log(6)
// output:
// 1
// 2
// 4
// 5
// 6
// Delayed 3

// setInterval
let num = 0;

const intervalId = setInterval(() => {
    console.log(++num);
    if(num===10){
        clearInterval(intervalId);
    }
}, 1000);

const timeOutId = setTimeout(() => {
    console.log();
}, 7000);