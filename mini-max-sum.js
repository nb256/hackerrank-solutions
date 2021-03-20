"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  let minSum = 0;
  let maxSum = 0;
  sortedArray.forEach((number, index) => {
    if (index === 0) {
      minSum += number;
    } else if (index === arr.length - 1) {
      maxSum += number;
    } else {
      minSum += number;
      maxSum += number;
    }
  });
  console.log(`${minSum} ${maxSum}`);
}

function main() {
  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
