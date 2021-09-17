//selectors
const gridCollection = document.getElementById('grid-collection');
const clearBTN = document.getElementById('clear-btn');
const eraserBTN = document.getElementById('eraser-btn');
const sizeSelector = document.getElementById('size-selector');
const sizeNumber = document.getElementById('size-number');
const colorPicker = document.getElementById('color-picker');
const mixBTN = document.getElementById('mix-btn');
const grayBTN = document.getElementById('gray-btn');

//BTN selectors
grayBTN.onclick = () => shader();
clearBTN.onclick = () => clearArts();
mixBTN.onclick = () => colorMixer();
eraserBTN.onclick = () => eraseOnHover();
sizeSelector.onmousemove = () => sizeChangerTxt();
sizeSelector.onchange = () => sizeChanger();
colorPicker.onchange = () => userColor();

//////////DEFAULT//////////
let currentMode = 'default';
gridGenerate(16);

//generates the divs
function gridGenerate (gridNumber) {
    gridCollection.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    
    for (i=0; i < gridNumber * gridNumber; i++){
        const oneDiv = document.createElement('div');
        oneDiv.addEventListener('mouseover', changeColor);
        oneDiv.classList = 'generated';
        gridCollection.appendChild(oneDiv);
    }
}

//changing the mode
function changeColor() {

    switch (currentMode) {
        case 'mix':
            this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            break;

        case 'shade':
            let colorCode = '';
            if (this.style.backgroundColor.match(/rgb/)){
                colorCode = Number(this.style.backgroundColor.slice(-4, -1));
                this.style.backgroundColor = `rgb(${colorCode-20} ${colorCode-20} ${colorCode-20})`
            } else {
                this.style.backgroundColor = `rgb(${200} ${200} ${200})`
            }
            break;

        case 'erase':
            this.style.backgroundColor = ''
            break;
    
        default:
            this.style.backgroundColor = colorPicker.value
            break;
    }
}

//shading gray
let shadeMode = false;
function shader() {
    if (shadeMode == true){
        currentMode = temp;
        currentMode = 'default';
        grayBTN.classList.remove('buttonActive');
        shadeMode = false;
    } else {
        currentMode = 'shade';
        eraserBTN.classList.remove('buttonActive');
        eraser = false;
        mixBTN.classList.remove('buttonActive');
        colorMixMode = false;
        grayBTN.classList.add('buttonActive');
        shadeMode = true;
    }
}

//erase on mouse hover
let temp = '';
let eraser = false;
function eraseOnHover() {
    if (eraser == true) {
        currentMode = temp;
        eraser = false;
    } else {
        temp = currentMode;
        currentMode = 'erase';
        eraser = true;
    }
    eraserBTN.classList.toggle('buttonActive');
}

//changing the color when user chagnes it
function userColor() {
    currentMode = 'default'
    currentMode = temp;
    grayBTN.classList.remove('buttonActive');
    shadeMode = false;
    mixBTN.classList.remove('buttonActive');
    colorMixMode = false;
    eraserBTN.classList.remove('buttonActive');
    eraser = false;
}

//clean all arts
function clearArts() {
    let dives = document.querySelectorAll('.generated');
    dives.forEach(div => div.style.backgroundColor = '')
}

// color Mixer
let colorMixMode = false;
function colorMixer() {
    if (colorMixMode == true) {
        currentMode = temp;
        mixBTN.classList.remove('buttonActive');
        currentMode = 'default';
        colorMixMode = false;
    } else { 
        currentMode = 'mix'
        grayBTN.classList.remove('buttonActive');
        shadeMode = false;
        colorMixMode = true;
        eraserBTN.classList.remove('buttonActive');
        eraser = false;
        mixBTN.classList.add('buttonActive')
    }
    // mixBTN.classList.toggle('buttonActive');
}

//changes the div box number
function sizeChanger() {
    gridCollection.innerHTML = '';
    gridGenerate(sizeSelector.value)
}

function sizeChangerTxt() {
    sizeNumber.innerHTML = sizeSelector.value + " X " + sizeSelector.value;
}