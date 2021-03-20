"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.on("SIGINT", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  /*
   * Write your code here.
   */
  const timePart = s.slice(0, 8).split(":");
  const amPmPart = s.slice(8, 10);
  if (s === "12:00:00AM") {
    return "00:00:00";
  } else if (s === "12:00:00PM") {
    return "12:00:00";
  } else {
    if (amPmPart === "AM") {
      if (timePart[0] === "12") {
        return `00:${timePart[1]}:${timePart[2]}`;
      } else {
        return `${timePart[0]}:${timePart[1]}:${timePart[2]}`;
      }
    } else {
      if (timePart[0] === "12") {
        return `12:${timePart[1]}:${timePart[2]}`;
      } else {
        return `${parseInt(timePart[0]) + 12}:${timePart[1]}:${timePart[2]}`;
      }
    }
  }
}

function main() {
  const s = readLine();

  let result = timeConversion(s);
  console.log(result);
}
