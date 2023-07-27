/* Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
Example Input: [2, -5, 10, -3, 7] Example Output: 19
 */

const sumOfPositiveNumbers = numbersArray => {
    let sum = 0;
    for (let num of numbersArray) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

const inputArray = [2, -5, 10, -3, 7];
const result = sumOfPositiveNumbers(inputArray);
console.log(result)