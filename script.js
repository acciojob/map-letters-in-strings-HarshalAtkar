//your JS code here. If required.
function mapLetters(word) {
    const result = {}; // Initialize an empty object to store the result

    // Iterate through each character in the word
    for (let index = 0; index < word.length; index++) {
        const char = word[index];
        // If the character is not already a key in the result object, add it
        if (!result[char]) {
            result[char] = [];
        }
        // Append the index to the existing array for that character
        result[char].push(index);
    }

    return result;
}

// Example usage:
console.log(mapLetters("dodo")); // ➞ { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy")); // ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes")); // ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
