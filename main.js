const defaultAttributeScores = [15, 14,13, 12, 10, 8];

class Player {
    constructor(charName = 'Virgil') {
        this.name = charName;
        this.attributes = {
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0
        };
        let shuffledResult = shuffleArray(defaultAttributeScores);
        for (const [key, value] of Object.entries(this.attributes)) {
            let attributeValue = shuffledResult.pop();
            this.attributes[key] = attributeValue;
        }
    }

    rollAttributes() {
       for (const key in this.attributes) {
        let results = diceRoller(4, 6);
        results.sort(function(a, b){return a - b});
        results.shift();
        let sum = sumArrayElements(results);
        this.attributes[key] = sum;
       }
    }

    printPlayer() {
        console.log(`NAME: ${this.name}`);
        for (const [key, value] of Object.entries(this.attributes)) {
            console.log(`${key.slice(0, 3).toUpperCase()}: ${value}`);
        }
    }
}

const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Gawain');
player02.rollAttributes();
player02.printPlayer();

// Fisher-Yares algorithm for randomly sorting an array
// from: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// adapted to JS and reconfigured to return a new (non-mutated) array
function shuffleArray(targetArray) {
    let shuffled = Array.from(targetArray);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

function diceRoller(times, sides) {
    let results = [];
    for (let i = 0; i < times; i++) {
        results.push(Math.floor(Math.random() * sides + 1));
    }

    return results;
}

function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[1];
    }

    return sum;
}

