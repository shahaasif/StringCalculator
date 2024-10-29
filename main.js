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
