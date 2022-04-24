class Keyboard {
	
	constructor(keySize, x, y) {
		
		this.keySize = keySize;
		this.x = x;
		this.y = y;
		
		this.keyUpColor = 200;
		this.keyDownColor = 100;
		
		this.pressed = new Array(26);
		this.pressed.fill(false);
		
		this.numbers = new Array(26);
		for (let i = 0; i < 26; i++) {
			this.numbers[i] = i + 1;
		}
		Keyboard.shuffle(this.numbers);
		
		this.expectedNext = 1
		
	}
	
	static drawKey(kbX, kbY, row, position, character, color) {
	
		let rowOffsets = [0, 2 * keySize / 7, keySize];
		
		noFill();
		strokeWeight(2);
		stroke(color);
		rect(kbX + rowOffsets[row] + position * (keySize + keySize / 7), kbY + row * (keySize + keySize / 7), keySize, keySize);
		
		textSize(keySize / 2);
		text(character, kbX + rowOffsets[row] + position * (keySize + keySize / 7) + 2 * keySize / 7, kbY + row * (keySize + keySize / 7) + 5 * keySize / 7);
		
	}
	
	static shuffle(array) {
		let currentIndex = array.length,  randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {

			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}
	
	draw() {
	
		for (let i = 0; i < 10; i++) {
			if (this.pressed[i]) {
				Keyboard.drawKey(this.x, this.y, 0, i, this.numbers[i], this.keyDownColor);
			} else {
				Keyboard.drawKey(this.x, this.y, 0, i, this.numbers[i], this.keyUpColor);
			}
		}
		for (let i = 0; i < 9; i++) {
			if (this.pressed[10 + i]) {
				Keyboard.drawKey(this.x, this.y, 1, i, this.numbers[10 + i], this.keyDownColor);
			} else {
				Keyboard.drawKey(this.x, this.y, 1, i, this.numbers[10 + i], this.keyUpColor);
			}
		}
		for (let i = 0; i < 7; i++) {
			if (this.pressed[19 + i]) {
				Keyboard.drawKey(this.x, this.y, 2, i, this.numbers[19 + i], this.keyDownColor);
			} else {
				Keyboard.drawKey(this.x, this.y, 2, i, this.numbers[19 + i], this.keyUpColor);
			}
		}
	
	}
	
	updateState(inputs) {
		for (let i = 0; i < 26; i++) {
			if (inputs[i] && this.numbers[i] == this.expectedNext) {
				this.pressed[i] = true;
				this.expectedNext++;
			}
		}
	}
	
}





let canvasWidth = 720;
let canvasHeight = 480;

let keySize = 50;

let k = new Keyboard(keySize, 50, 50);

function setup() {
	
	createCanvas(canvasWidth, canvasHeight);
	
}

function draw() {

	background(50, 20, 50);
	
	let inputs = getUserInput();
	
	k.updateState(inputs);
	k.draw();
	
}





function getUserInput() {
	
	let keycodes = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77];
	let inputs = new Array(26);
	inputs.fill(false);
	
	for (let i = 0; i < 26; i++) {
		if (keyIsDown(keycodes[i])) {
			inputs[i] = true;
		}
	}
	
	return inputs;
	
}
