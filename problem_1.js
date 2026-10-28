function getMonthName(monthNumber) {
  // Store the names in order, so the array index for January is 0.
  // This matches the zero-based indexing of arrays.
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  // monthNumber is 1-based (1 = January), but array indices are 0-based.
  // Subtracting 1 converts the month number into the correct index.
  return months[monthNumber - 1];
}

console.log(getMonthName(3));  // "March"
console.log(getMonthName(10)); // "October"