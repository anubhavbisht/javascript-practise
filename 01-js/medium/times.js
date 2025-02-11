/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function sum(n){
    return n*(n+1)/2
}

function calculateTime(n) {
    const start = new Date()
    sum(n)
    const end = new Date()
    console.log(end-start)
}