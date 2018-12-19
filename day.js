// Returns day of the week for a given date
let dayName = (date) => {
	const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", 
												 "Thursday", "Friday", "Saturday"];
	return daysOfTheWeek[date.getDay()];
}

let greeting = (date) => {
	return `Hello, world! Happy ${dayName(now)}.`;
}