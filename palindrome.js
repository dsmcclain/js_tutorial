// Reverses a string
let reverse = (string) => {
	return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	//Returns content swithced to lower case
	this.processor = function(string) {
		return string.toLowerCase();
	}

	//Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.processor(this.content);
	}

	//Returns true if the phrase is a palindrome, false otherwise
	this.palindrome = function palindrome() {
		return this.processedContent() === reverse(this.processedContent());
	}
}


//Defines a translatedPhrase object.
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	//Returns translation processed for palindrome testing, overrides Phrase.processedConten
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();