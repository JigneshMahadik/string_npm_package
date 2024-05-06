function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function isPalindrome(string) {
    const reversed = string.split("").reverse().join("");
    return string === reversed;
}

function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

function averageArray(array) {
    return sumArray(array) / array.length;
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function uniqueElements(array) {
    return [...new Set(array)];
}

function truncateString(string, maxLength) {
    if (string.length <= maxLength) {
        return string;
    } else {
        return string.slice(0, maxLength) + "...";
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function deepClone(object) {
    return JSON.parse(JSON.stringify(object));
}



module.exports = {
    capitalize,
    reverseString,
    isPalindrome,
    sumArray,
    averageArray,
    shuffleArray,
    uniqueElements,
    truncateString,
    randomNumber,
    deepClone
};