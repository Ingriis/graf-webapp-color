const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');
const colorPicker = document.getElementById('colorPicker');

function updateColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    const hex = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;

    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex.toUpperCase();
    colorPicker.value = hex;

    redValue.value = r;
    greenValue.value = g;
    blueValue.value = b;
}

function updateSliders() {
    red.value = redValue.value;
    green.value = greenValue.value;
    blue.value = blueValue.value;
    updateColor();
}

function updateFromColorPicker() {
    const hex = colorPicker.value;
    hexCode.textContent = hex.toUpperCase();
    colorBox.style.backgroundColor = hex;

    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    red.value = r;
    green.value = g;
    blue.value = b;
    redValue.value = r;
    greenValue.value = g;
    blueValue.value = b;
}

red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);

redValue.addEventListener('input', updateSliders);
greenValue.addEventListener('input', updateSliders);
blueValue.addEventListener('input', updateSliders);

colorPicker.addEventListener('input', updateFromColorPicker);
