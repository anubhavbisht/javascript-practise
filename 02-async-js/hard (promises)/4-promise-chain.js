/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

function calculateTime() {
  return waitOneSecond()
    .then(() => {
      console.log("First promise resolved");
      return waitTwoSecond();
    })
    .then(() => {
      console.log("Second promise resolved");
      return waitThreeSecond();
    })
    .then(() => {
      console.log("Third promise resolved");
      return Promise.resolve('All Promise resolved')
    });
}
const time1 = new Date().getTime();
calculateTime().then((data) => {
  console.log(data);
  const time2 = new Date().getTime();
  console.log((time2 - time1) / 1000, "duration");
});
