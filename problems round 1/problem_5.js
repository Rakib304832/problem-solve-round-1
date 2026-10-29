function remainingMoney(totalMoney, cakeCost, donutCost) {
  // Subtract the cake first. This can go negative, which is the debt case from Example 3.
  const afterCake = totalMoney - cakeCost;

  // Only buy donuts when there is money left. Math.floor gives the number of
  // whole donuts we can afford, since we can't buy part of a donut.
  // If afterCake is negative, we skip this step so no donuts are bought.
  if (afterCake < 0) {
    return afterCake;
  }

  // Spend on as many whole donuts as possible. Whatever is left over after
  // that is the remainder, which is the value we return.
  const donutsBought = Math.floor(afterCake / donutCost);
  return afterCake - donutsBought * donutCost;
}

// Example 1
console.log(remainingMoney(100, 20, 10)); // 0

// Example 2
console.log(remainingMoney(50, 30, 7)); // 6

// Example 3
console.log(remainingMoney(10, 20, 5)); // -10