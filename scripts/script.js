let canvasWidth = 720;
let canvasHeight = 480;

let keySize = 50;
let kbX = 75;
let kbY = 75;

keyUpColor = 200;
keyDownColor = 100;

function setup() {
	
	createCanvas(canvasWidth, canvasHeight);
	
}

function draw() {

	background(50, 20, 50);
	
	let inputs = getUserInput();
	
	drawKeyboard(kbX, kbY, inputs);

	
}

function drawKey(kbX, kbY, row, position, letter, color) {
	
	let rowOffsets = [kbX, kbX + 2 * keySize / 7, kbX + keySize];
	
	noFill();
	strokeWeight(2);
	stroke(color);
	rect(rowOffsets[row] + position * (keySize + keySize / 7), kbY + row * (keySize + keySize / 7), keySize, keySize);
	
	textSize(keySize / 2);
	text(letter, rowOffsets[row] + position * (keySize + keySize / 7) + 2 * keySize / 7, kbY + row * (keySize + keySize / 7) + 5 * keySize / 7);
	
}

function drawKeyboard(x, y, inputs) {
	
	let letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
	
	for (let i = 0; i < 10; i++) {
		if (inputs[i]) {
			drawKey(x, y, 0, i, letters[i], keyDownColor);
		} else {
			drawKey(x, y, 0, i, letters[i], keyUpColor);
		}
	}
	
	for (let i = 0; i < 9; i++) {
		if (inputs[10 + i]) {
			drawKey(x, y, 1, i, letters[10 + i], keyDownColor);
		} else {
			drawKey(x, y, 1, i, letters[10 + i], keyUpColor);
		}
	}
	
	for (let i = 0; i < 7; i++) {
		if (inputs[19 + i]) {
			drawKey(x, y, 2, i, letters[19 + i], keyDownColor);
		} else {
			drawKey(x, y, 2, i, letters[19 + i], keyUpColor);
		}
	}
	
}

function getUserInput() {
	
	let inputs = new Array(26);
	inputs.fill(false);
	
	if (keyIsDown(81)) {
		inputs[0] = true;
	}
	if (keyIsDown(87)) {
		inputs[1] = true;
	}
	if (keyIsDown(69)) {
		inputs[2] = true;
	}
	if (keyIsDown(82)) {
		inputs[3] = true;
	}
	if (keyIsDown(84)) {
		inputs[4] = true;
	}
	if (keyIsDown(89)) {
		inputs[5] = true;
	}
	if (keyIsDown(85)) {
		inputs[6] = true;
	}
	if (keyIsDown(73)) {
		inputs[7] = true;
	}
	if (keyIsDown(79)) {
		inputs[8] = true;
	}
	if (keyIsDown(80)) {
		inputs[9] = true;
	}
	if (keyIsDown(65)) {
		inputs[10] = true;
	}
	if (keyIsDown(83)) {
		inputs[11] = true;
	}
	if (keyIsDown(68)) {
		inputs[12] = true;
	}
	if (keyIsDown(70)) {
		inputs[13] = true;
	}
	if (keyIsDown(71)) {
		inputs[14] = true;
	}
	if (keyIsDown(72)) {
		inputs[15] = true;
	}
	if (keyIsDown(74)) {
		inputs[16] = true;
	}
	if (keyIsDown(75)) {
		inputs[17] = true;
	}
	if (keyIsDown(76)) {
		inputs[18] = true;
	}
	if (keyIsDown(90)) {
		inputs[19] = true;
	}
	if (keyIsDown(88)) {
		inputs[20] = true;
	}
	if (keyIsDown(67)) {
		inputs[21] = true;
	}
	if (keyIsDown(86)) {
		inputs[22] = true;
	}
	if (keyIsDown(66)) {
		inputs[23] = true;
	}
	if (keyIsDown(78)) {
		inputs[24] = true;
	}
	if (keyIsDown(77)) {
		inputs[25] = true;
	}
	
	return inputs;
	
}