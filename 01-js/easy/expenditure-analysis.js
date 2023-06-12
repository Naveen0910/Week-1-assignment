/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = {};
  for (const eachTransaction of transactions) {
    const { category, price } = eachTransaction;
    if (categories.hasOwnProperty(category)) {
      categories[category] += price;
    } else {
      categories[category] = price;
    }
  }
  const result = Object.entries(categories).map(([category, totalSpent]) => ({
    [category]: totalSpent,
  }));
  return result;
}

// Trail Input
// console.log(
//   calculateTotalSpentByCategory([
//     { category: "clothing", price: 100 },
//     { category: "Food", price: 200 },
//     { category: "Food", price: 300 },
//   ])
// );

module.exports = calculateTotalSpentByCategory;
