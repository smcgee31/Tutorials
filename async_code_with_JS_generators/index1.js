// to run functions in this script use terminal and type node index1.js




function* createLogger() {       // Note: Changed the name to 'what it does' ( it was function* logger() ).
  console.log('Start');
  yield                          // This tells the generator to pause at this point.
  console.log('2nd block');
  yield
  console.log('3rd block');
  yield
  console.log('End');
}

// logger();                        <- using it this way does nothing. 
                                 // Calling a generator returns an instance of itself - not execute.

const logger = createLogger();   // Assign an instance of the generator to a variable to use later.
logger.next();                   // To execute you use next() which exetutes until the next block is over.
                                 // Run it at this point and you only get 'Start' and stays paused, never reaching 'End'
logger.next();                   // Call logger.next() again to resume until the next yield or done. 
                                 // Now run and you get 'Start' and 'End'. Add more yields and you have to run more next()'s.
logger.next();

logger.next();                   // Start
                                 // 2nd block
                                 // 3rd block
                                 // End