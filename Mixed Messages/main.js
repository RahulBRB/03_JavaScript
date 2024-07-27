const beginnings = [
    "Believe in yourself,",
    "Never give up,",
    "Stay positive,"
];

const middles = [
    "the future is bright.",
    "hard work pays off.",
    "keep pushing forward."
];

const endings = [
    "Your dreams are within reach.",
    "Success is just around the corner.",
    "Great things are coming your way."
];

// Function to generate a random index for an array
function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

// Function to generate a random message
function generateMessage() {
    const beginIndex = getRandomIndex(beginnings.length);
    const middleIndex = getRandomIndex(middles.length);
    const endIndex = getRandomIndex(endings.length);
    
    const message = `${beginnings[beginIndex]} ${middles[middleIndex]} ${endings[endIndex]}`;
    
    return message;
}

console.log(generateMessage());
