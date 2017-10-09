/*let arr = [];

for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

arr = Array.from(new Array(101), (val, index) => index);

const sum = arr.filter(e => e % 2 === 0)
  .reduce((acc, e) => {
    return acc + e;
  }, 0);

console.log(sum);

*/

// setup
// npm install -g @angular/cli
// ng new <Project>
// cd <Project>
// create index.js
// node index.js

const Rx = require('rxjs');

const observable = Rx.Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

observable.subscribe(e => {
  console.log('data: ', e);
})

//console.log(Rx);