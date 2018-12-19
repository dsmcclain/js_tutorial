// Reverses a string
let reverse = (string) => {
	return Array.from(string).reverse().join("");
}

// Compares a string to its reverse
let palindrome = (string) => {
	let filteredString = string.toLowerCase();
	return filteredString === reverse(filteredString);
} 