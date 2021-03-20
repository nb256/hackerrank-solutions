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

// Complete the staircase function below.
function staircase(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n - i - 1; j++) {
      line += " ";
    }
    for (let j = 0; j < i + 1; j++) {
      line += "#";
    }
    console.log(line);
  }
}

function main() {
  const n = parseInt(readLine(), 10);

  staircase(n);
}
("");
