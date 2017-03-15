function* createCounter() {
  yield 1                                 // While we could simply run console.log(counter.next()) five times 
  yield 2                                 // to get all the numbers, this is quite tedious.
  yield 3
  yield 4
}

const counter = createCounter();
for (i of counter) {                      // We could have built a while loop or for-loop to do this but 
  console.log(i);                         // ES6 has given us a much easier way. The for-of loop.
}