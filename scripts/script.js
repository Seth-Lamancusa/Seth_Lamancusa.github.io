class Keyboard {
	
	constructor(keySize) {
		
		this.complete = false;
		this.started = false;
		this.time = 0;
		this.keySize = keySize;
		
		this.keyUpColor = 200;
		this.keyDownColor = 100;
		
		this.pressed = new Array(26);
		this.isDown = new Array(27);
		this.prevDown = new Array(27);
		
		this.numbers = new Array(26);
		for (let i = 0; i < 26; i++) {
			this.numbers[i] = i + 1;
		}
		Keyboard.shuffle(this.numbers);
		
		this.expectedNext = 1;
		
	}
	
	static drawKey(kbX, kbY, w, h, offsetX, offsetY, content, color) {
		
		noFill();
		strokeWeight(2);
		stroke(color);
		/* rowOffsets[row] + position * (keySize + keySize / 7), row * (keySize + keySize / 7) */
		rect(kbX + offsetX, kbY + offsetY, w, h);
		
		textSize(keySize / 2);
		text(content, kbX + offsetX + 2 * keySize / 7, kbY + offsetY + 5 * keySize / 7);
		
	}
	
	static shuffle(array) {
		let currentIndex = array.length,  randomIndex;

		/* This is from StackOverflow and I don't know how it works. */
		while (currentIndex != 0) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}
	
	draw(x, y) {
		
		let rowOffsets = [0, 2 * keySize / 7, keySize];
	
		/* draws row 1 of letter keys */
		for (let i = 0; i < 10; i++) {
			if (this.pressed[i]) {
				Keyboard.drawKey(x, y, this.keySize, this.keySize, 
					rowOffsets[0] + i * (this.keySize + this.keySize / 7), 0, 
					this.numbers[i], this.keyDownColor);
			} else {
				Keyboard.drawKey(x, y, this.keySize, this.keySize, 
					rowOffsets[0] + i * (this.keySize + this.keySize / 7), 0, 
					this.numbers[i], this.keyUpColor);
			}
		}
		/* draws row 2 of letter keys */
		for (let i = 0; i < 9; i++) {
			if (this.pressed[10 + i]) {
				Keyboard.drawKey(x, y, this.keySize, this.keySize, 
					rowOffsets[1] + i * (this.keySize + this.keySize / 7), this.keySize + this.keySize / 7, 
					this.numbers[10 + i], this.keyDownColor);
			} else {
				Keyboard.drawKey(x, y, this.keySize, this.keySize, 
					rowOffsets[1] + i * (this.keySize + this.keySize / 7), this.keySize + this.keySize / 7,  
					this.numbers[10 + i], this.keyUpColor);
			}
		}
		/* draws row 3 of letter keys */
		for (let i = 0; i < 7; i++) {
			if (this.pressed[19 + i]) {
				Keyboard.drawKey(x, y, this.keySize, this.keySize, 
					rowOffsets[2] + i * (this.keySize + this.keySize / 7), 2 * (this.keySize + this.keySize / 7), 
					this.numbers[19 + i], this.keyDownColor);
			} else {
				Keyboard.drawKey(x, y, this.keySize, this.keySize,
					rowOffsets[2] + i * (this.keySize + this.keySize / 7), 2 * (this.keySize + this.keySize / 7), 
					this.numbers[19 + i], this.keyUpColor);
			}
		}
		
		/* draws space bar */
		if (!this.started) {
			Keyboard.drawKey(x, y, this.keySize * 5, this.keySize,
				this.keySize * 2.5, 3 * (this.keySize + this.keySize / 7),
				"start", this.keyUpColor);
		} else {
			Keyboard.drawKey(x, y, this.keySize * 5, this.keySize,
				this.keySize * 2.5, 3 * (this.keySize + this.keySize / 7),
				Math.round(this.time / 60 * 100) / 100, this.keyUpColor);
		}
	
	}
	
	updateState(inputs) {
		this.prevDown = this.isDown;
		this.isDown = inputs;
		
		for (let i = 0; i < 26; i++) {
			if (this.started && inputs[i] && this.numbers[i] == this.expectedNext) {
				this.pressed[i] = true;
				this.expectedNext++;
			}
		}
		
		if (this.isDown[26]) {
			this.started = true;
			if (this.complete) {
				this.complete = false;
				this.started = false;
				this.time = 0;
				this.keySize = keySize;
				
				this.keyUpColor = 200;
				this.keyDownColor = 100;
				
				this.pressed = new Array(26);
				this.isDown = new Array(27);
				this.prevDown = new Array(27);
			
				this.numbers = new Array(26);
				for (let i = 0; i < 26; i++) {
					this.numbers[i] = i + 1;
				}
				Keyboard.shuffle(this.numbers);
				
				this.expectedNext = 1;
			}
		}
		
		if (!this.complete && this.started) {
			this.time++;
		} 
		
		if (this.expectedNext == 27) {
			this.complete = true;
		}
	}
	
}





let canvasWidth = 720;
let canvasHeight = 480;

let keySize = 50;

let k = new Keyboard(keySize, 50, 50);

let inputs;

function setup() {
	
	frameRate(60);
	
	createCanvas(canvasWidth, canvasHeight);
	
}

function draw() {

	background(50, 20, 50);
	
	inputs = getUserInput();
	
	k.updateState(inputs);
	k.draw(50, 50);
	
}



function getUserInput() {
	
	let keycodes = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77, 32];
	let inputs = new Array(27);
	inputs.fill(false);
	
	for (let i = 0; i < 27; i++) {
		if (keyIsDown(keycodes[i])) {
			inputs[i] = true;
		}
	}
	
	return inputs;
	
}
