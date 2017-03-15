//===============================================================  PART ONE  ===================================================================================================================================================

function* createCounter() {
  yield 1;
  yield 2;
  yield* create3to4Counter();         // First of all, adding the * to yield makes it work just like a generator. 3 and 4 get inserted nicely
  yield 5;
}

for (let i of createCounter()) {
  console.log(i);                     // This will log out 1, 2, 5 like we expect. with just the createCounter generator
}


// Lets add something that will insert 3 and 4
function* create3to4Counter() {
  yield 3;
  yield 4;
}


//===============================================================  PART TWO  ===================================================================================================================================================


function* createCounter2() {
  yield 1;
  yield 2;
  const four = yield* create3to4Counter2();
  yield* create3to4Counter2();                  // 
  yield 5;
}

for (let i of createCounter2()) {
  console.log(i);                               // This will log out 1, 2, 5 like we expect. with just the createCounter generator
}


function* create3to4Counter2() {
  yield 3;
  return 4;                                    // Here's an interesting side effect... we can 'return' a value from the delegated generator
}                                              // and then get that value in our other generator