class StringCalculator {
  static add(numbers) {
    // Handle empty input
    if (!numbers) return 0;

    // Default delimiter as comma or newline
    let delimiter = /,|\n/;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2);
      delimiter = parts[0].slice(2);
      numbers = parts[1];
    }

    // Split numbers by the delimiter
    const numberList = numbers.split(delimiter);
    let total = 0;
    const negatives = [];

    // Process each number
    numberList.forEach((numStr) => {
      if (numStr) {
        const num = parseInt(numStr, 10);
        if (num < 0) {
          negatives.push(num);
        } else {
          total += num;
        }
      }
    });

    // Throw error if there are negative numbers
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return total;
  }
}

// Test Cases
console.log("''=>", StringCalculator.add("")); // Output: 0
console.log("1=>", StringCalculator.add("1")); // Output: 1
console.log("1,5=>", StringCalculator.add("1,5")); // Output: 6
console.log("1\n2,3=>", StringCalculator.add("1\n2,3")); // Output: 6
console.log("//;\n1;2=>", StringCalculator.add("//;\n1;2")); // Output: 3
console.log("//^\n1^2=>", StringCalculator.add("//^\n1^2")); // Output: 3
console.log("//$\n1$2=>", StringCalculator.add("//$\n1$2")); // Output: 3
console.log("//*\n1*2=>", StringCalculator.add("//*\n1*2")); // Output: 3
console.log("//:\n1:2=>", StringCalculator.add("//:\n1:2")); // Output: 3
console.log("//|\n1|2=>", StringCalculator.add("//|\n1|2")); // Output: 3
console.log("//+\n1+2=>", StringCalculator.add("//+\n1+2")); // Output: 3
console.log("//&\n1&2&3=>", StringCalculator.add("//&\n1&2&3")); // Output: 6

try {
  console.log("1,-2,3,-4=>", StringCalculator.add("1,-2,3,-4")); // Should throw error
} catch (e) {
  console.error(e.message); // Output: negative numbers not allowed: -2, -4
}
