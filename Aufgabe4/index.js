const Rx = require('rxjs');

Rx.Observable.interval(1)
.map(() => {
  return String.fromCharCode(Math.floor(Math.random() * 256));
})
.filter(v => ['a', 'e', 'i', 'o', 'u'].includes(v))
.take(10)
.scan((prev, curr) => prev + curr)
.last()
.subscribe(v => console.log(v));