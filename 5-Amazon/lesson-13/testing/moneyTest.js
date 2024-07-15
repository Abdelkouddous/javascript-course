import { formatCurrency } from "../scripts/utils/money.js";

console.log("Convert cents into $$");

for (let i = 0; i <= 1020; i += 120) {
  formatCurrency(i) === (i / 100).toFixed(2).toString()
    ? console.log(
        JSON.stringify(formatCurrency(i)) +
          "\n" +
          JSON.stringify((i / 100).toFixed(2)) +
          `test ${i} passed `
      )
    : console.log(
        JSON.stringify(formatCurrency(i)) +
          "\n" +
          JSON.stringify((i / 100).toFixed(2)) +
          `test ${i} failed `
      );
}

// formatCurrency(0) === "0.00" ? console.log("passed") : console.log("failed");

//edge case : FAIL
let i = 2000.5;
formatCurrency(i) === "20.01"
  ? console.log(i + " passed")
  : console.log(i + " failed");
