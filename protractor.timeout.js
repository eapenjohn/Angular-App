'use strict'

function function1() {
    // stuff you want to happen right away
    console.log('Start delay =>', process.argv[2])
}

function function2() {
    // all the stuff you want to happen after that pause
    console.log('Finish delay =>')
}

// call the first chunk of code right away
function1()

// call the rest of the code and have it execute after 3 seconds
setTimeout(function2, process.argv[2])
