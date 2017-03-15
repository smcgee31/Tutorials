//===============================================================  PART ONE  ===================================================================================================================================================

const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';     // Quote of the day API
const fetch = require('node-fetch');                                                      

function* createQuoteFetcher() {                                                          // Generator that gets the quote and author
  const response = yield fetch(url);
  const quote = yield response.json();
  return `${quote.quoteText} -${quote.quoteAuthor}`
}

const quoteFetcher = createQuoteFetcher();                                                // Assigns an instance of the generator
quoteFetcher.next().value                                                                 // Calls the generator and pauses at the first yield. The value 'fetch(url)' is a promise 
  .then(res => quoteFetcher.next(res).value)                                              // The response we get from the value is passed to the .then and to the next yield pause point.
  .then(res => quoteFetcher.next(res).value)                                              // And so on...
  .then(quote => console.log(quote))                                                      // Until we complete the function and get the quote and author. 
  .catch(err => console.log(err))                                                         // This is all very generic.




//===============================================================  PART TWO  ===================================================================================================================================================




const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';     
const fetch = require('node-fetch');                                                      

function* createQuoteFetcher() {                                                          
  const response = yield fetch(url);
  const quote = yield response.json();
  return `${quote.quoteText} -${quote.quoteAuthor}`
}

const coroutine = (gen) => {                                                             // This is a helper function that gets a generator (any generator) 
  const generator = gen();                                                               // and instantiates it.

  const handle = (result) => {                                                           // This is the magic of 'coroutine'. 
    if (result.done) return Promise.resolve(result.value)                                       // The if statement is to keep the recursion from being an infinite loop. It says stop if 'done' is true and return the resolved value.
    return Promise.resolve(result.value)                                                 // It gets the value of the first and passes it BACK to itself and runs generator.next() again.
      .then(res => handle(generator.next(res)))
  }

  return handle(generator.next());                                                       // generator.next() gets the generator going but doesn't keep the generator going recursively
}                                                                                        // so it gets wrapped in 'handle' which is the recursive magic behind the scene to make the quoteFetcher small and easy to read and write.

const quoteFetcher = corouting(createQuoteFetcher);                                       // Use the magic 'coroutine' function and pass our generator to it.
quoteFetcher.then(quote => console.log(quote))                                            // Now this and all of your future calls to your generators can be small and simple and easy to read.


// If you don't want to write this 'coroutine' function everytime you want to use generators
// that's ok since it is built in to an npm module called 'co'

// npm install co --save