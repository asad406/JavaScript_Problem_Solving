/* Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
Example Input: "hello world" Example Output: "dlrow olleh"
 */

const reverseString = inputString => {
    let reverseStr = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reverseStr += inputString.charAt(i);
    }
    return reverseStr;
}

const input = 'hello world';
const result = reverseString(input);
console.log(result)