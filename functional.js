let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function imperativeLengths(elements) {
	let lengths = {};
	elements.forEach(function(element) {
		lengths[element] = element.length;
	});
	return lengths;
}
console.log(imperativeLengths(states));

functionalLengths = (elements) => {
	return elements.reduce((lengths, element) => {
		lengths[element] = element.length;
		return lengths;
	}, {});
}
console.log(functionalLengths(states));

let nums = [1, 2, 3];

product = (nums) => { return nums.reduce((ans, num) => {return ans *= num });
}
console.log(product(nums));