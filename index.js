// program to generate a random message

// at least three different pieces of data that get randomized

function generateRandomMessage() {
  let message1 = () => {
    const elements = ['earth', 'water', 'fire', 'air'];
    let randomElement = elements[Math.floor(Math.random() * elements.length)];
    return `Your element today will be ${randomElement}.`;
  }
  
  let message2 = () => {
    const moods = ['pensive', 'content', 'introspective', 'joyous'];
    let randomMood = moods[Math.floor(Math.random() * moods.length)];
    return `Your mood today will be ${randomMood}.`;
  }

  let message3 = () => {
    const foods = ['croissant', 'cookie', 'danish', 'scone'];
    let randomFood = foods[Math.floor(Math.random() * foods.length)];
    return `Your food today will be ${randomFood}.`;
  }
  return `${message1()} ${message2()} ${message3()}`
}

console.log(generateRandomMessage());