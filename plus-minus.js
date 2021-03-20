"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
  console.log(inputString);
});

process.on("SIGINT", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  for (const number of arr) {
    if (number > 0) {
      positiveCount++;
    } else if (number < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }
  const positiveRatio = positiveCount / arr.length;
  const negativeRatio = negativeCount / arr.length;
  const zeroRatio = zeroCount / arr.length;
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
