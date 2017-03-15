//===============================================================  PART ONE  ===================================================================================================================================================

function* createHello() {
  yield 'first';                    // By adding something to the yield keyword we are communicating something to the instance
}

const hello = createHello();
console.log(hello.next());          // What you get back is { value: 'first', done: false }  <-done is false because we have not 
                                    // finished executing the generator. We are in fact paused at the yield keyword.
console.log(hello.next());          // To finish executing the generator we simply call the hello.next() again.
                                    // Now the return is { value: undefined, done: true }  <-done is true because we are finished executing.




//===============================================================  PART TWO  ===================================================================================================================================================




function* createHello2() {
  const word = yield;               // To pass a value from our instance to the generator we pass something to the yield from the .next() call.
  console.log(word);                // Then log out what we have passed.
}

const hello2 = createHello2();
console.log(hello2.next());         

console.log(hello2.next('Max'));    // Pass 'Max' to yield and log it out  <- { value: undefined, done: false }
                                    //                                         Max
                                    //                                         { value: undefined, done: true }
                                    // Notice that both yield calls return value: undefined but we got 'Max' from the console.log()