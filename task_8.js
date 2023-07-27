/* Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */


const findSecondSmallest = arr => {
    if (arr.length < 2) {
        return "Array should contain at least two elements";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        return "There is no second smallest element in the array";
    }

    return secondSmallest;
}


const array = [7, 2, 3, 1, 4, 5, 6];
const result = findSecondSmallest(array);
console.log(result);
