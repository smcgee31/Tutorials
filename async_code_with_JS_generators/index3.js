//===============================================================  PART ONE  ===================================================================================================================================================

function* createHello() {
  const word = yield;
  console.log(`Hello ${word}`);
}

const hello = createHello();
hello.next();
// ... stuff in here                      // Between one .next() call and another there are any number of things that could happen (async stuff).
hello.throw();                            // How can we tell our generator if something goes wrong in this area? .throw()
                                          // but it also just kills the process, which is not what we want.
hello.next('Max');                        // would log 'Hello Max' without .throw() in there.




//===============================================================  PART TWO  ===================================================================================================================================================



function* createHello2() {
  try {                                   // use a standard try-catch to get any errors that get .throw()n
    const word = yield;
    console.log(`Hello ${word}`);
  } catch (err) {
    console.log('ERROR', err);           // logs 'ERROR Something went wrong' from the message passed into .throw()
  }
}

const hello2 = createHello2();
hello2.next();
hello2.throw('Something went wrong.');    // .throw() is similar to .next() except it throws an error
                                          // so we can pass in an error message that will pass into the catch console.log()