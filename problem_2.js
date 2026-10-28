function countNumbers(numbers) {
  // Start every counter at 0 so the result always has all four properties.
  const result = { even: 0, odd: 0, positive: 0, negative: 0 };

  for (const n of numbers) {
    // n % 2 is 0 for even numbers and -0 or -1 for negative ones, so checking
    // "=== 0" alone would miscount negatives. n % 2 === 0 handles 0 and
    // negative evens like -4 correctly, since -4 % 2 is -0, which equals 0.
    // Odd negatives like -5 give -1, so they fall into the else branch.
    if (n % 2 === 0) {
      result.even++;
    } else {
      result.odd++;
    }

    // Zero is neither positive nor negative, so it needs its own check.
    // Strict > 0 and < 0 keep it out of both counts.
    if (n > 0) {
      result.positive++;
    } else if (n < 0) {
      result.negative++;
    }
  }

  return result;
}

console.log(countNumbers([-5, 0, 3, -4, 1]));
// { even: 2, odd: 3, positive: 2, negative: 2 }
console.log(countNumbers([2, 4, 6, 8, 10]));
// { even: 5, odd: 0, positive: 5, negative: 0 }