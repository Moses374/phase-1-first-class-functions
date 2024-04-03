function receivesAFunction(callback) {
    callback()
  }  
  function returnsANamedFunction() {
    return function named() {
      console.log("Pass me the ball")
    }
  }  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Don\'t pass the ball')
    }
  }