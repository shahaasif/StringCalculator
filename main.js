class StringCalculator {
  static add(numbers) {
    // Handle empty input
    if (!numbers) return 0;

    // Default delimiter as comma or newline
    let delimiter = /,|\n/;

    // Split numbers by the delimiter
    const numberList = numbers.split(delimiter);
    let total = 0;

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

    return total;
  }
}
