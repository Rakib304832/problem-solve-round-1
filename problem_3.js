function checkNine(a, b) {
  // Compute each of the four operations separately so each one is easy to check.
  const sum = a + b;
  const difference = a - b;
  const product = a * b;

  // Division can give a decimal, such as 10 / 4 = 2.5. That's fine here, because
  // a decimal can never equal 9, so the comparison below still works correctly.
  const quotient = a / b;

  // The || operator returns true as soon as any one of these checks is true.
  // Only if none of them equals 9 does the function fall through to "Nein".
  if (sum === 9 || difference === 9 || product === 9 || quotient === 9) {
    return "Nine";
  }
  return "Nein";
}

console.log(checkNine(5, 4));  // "Nine" (sum is 9)
console.log(checkNine(10, 1)); // "Nine" (difference is 9)
console.log(checkNine(2, 3));  // "Nein"