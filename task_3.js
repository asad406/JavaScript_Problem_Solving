/* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
 */


const findMostFrequent = arr => {
    const frequentCounter = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    for (let num of arr) {
        frequentCounter[num] = (frequentCounter[num] || 0) + 1;
        if (frequentCounter[num] > maxFrequency) {
            maxFrequency = frequentCounter[num];
            mostFrequentElement = num;
        }
    }
    return mostFrequentElement;
}

const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findMostFrequent(inputArr);
console.log(result)