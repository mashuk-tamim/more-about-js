const getData = new Promise((resolve, reject) =>{
    // resolve(123);
    // reject('No data available');
    const num = Math.random()*10;
    if(num > 5){
        resolve(num.toFixed(2));
    }
    else{
        reject('Number not valid');
    }
})

// console.log(getData); //Promise { 123 }
// console.log(getData+11); //[object Promise]11
// getData.then(data => console.log(data)); //123
// getData.then(data => console.log(data+11)); //134

getData
    .then(data => console.log(data))
    .catch(err => console.log(err))
