/* Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. */


const generateRandomPassword = length => {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*?';

    const allChars = upperCaseChars + lowerCaseChars + numberChars + specialChars;
    const passwordArray = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        passwordArray.push(allChars.charAt(randomIndex));
    }

    return passwordArray.join('');
}

const passwordLength = 16;
const result = generateRandomPassword(passwordLength);
console.log(result);
