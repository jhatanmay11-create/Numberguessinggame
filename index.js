const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    attempts++;
    guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));

    if (isNaN(guess)) {
        window.alert("Please enter only numbers");
    } 
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a number in range");
    } 
    else if (guess < answer) {
        window.alert("Too low");
    } 
    else if (guess > answer) {
        window.alert("Too high");
    } 
    else {
        window.alert(`Congratulations! You guessed the correct number and it only took you ${attempts} attempts`);
        running = false;
    }
}

console.log(answer);
