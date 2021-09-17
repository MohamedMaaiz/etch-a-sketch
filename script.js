//selectors
const gridCollection = document.getElementById('grid-collection');
const clearBTN = document.getElementById('clear-btn');
const eraserBTN = document.getElementById('eraser-btn');
const rangeSelector = document.getElementById('range-selector');
const rangeNumber = document.getElementById('range-number');
const colorPicker = document.getElementById('color-picker')
const mixBTN = document.getElementById('mix-btn')

//BTN selectors
clearBTN.onclick = () => clearArts();
mixBTN.onclick = () => colorMixer();
// mixBTN.onclick = () => changeColor(currentMode = 'mix');
eraserBTN.onclick = () => eraseOnHover();
rangeSelector.onchange = () => rangechanger();
colorPicker.onchange = () => userColor();

//////////DEFAULT//////////
// let defaultColor = '#000000';
let dives;
let currentMode = 'black';
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
//change the color on color pick
function changeColor() {
    console.log(currentMode)
    
    switch (currentMode) {
        case 'balck':
            this.style.backgroundColor = '#ffffff'
            break;

        case 'mix':
            this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            break;

        case 'user':
            // console.log(colorPicker.value)
            // this.style.backgroundColor = colorPicker.value;
            break;
    
        default:
            this.style.backgroundColor = colorPicker.value
            break;
    }

}

//erase on mouse hover
// have to chage the menual number
let eraser = false;
function eraseOnHover() {
    let mode;
    if (eraser == true) {
        mode = '#ffffff';
        eraser = false;
    } else {
        mode = '';
        eraser = true;
    }
    divSelect();
    eraserBTN.classList.toggle('buttonActive');
    dives.forEach(div => div.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = mode;
    }));
};

//changing the color when user chagnes it
function userColor() {
    currentMode = 'default'
}


//selecting all the generated dives
function divSelect () {
    dives = document.querySelectorAll('.generated');
}


//clean all arts
function clearArts() {
    divSelect();
    dives.forEach(div => div.style.backgroundColor = '')
};

// color Mixer
let colorMixMode = false;
function colorMixer() {
    if (colorMixMode == true) {
        currentMode = 'default'
        colorMixMode = false;
    } else { 
        currentMode = 'mix'
        colorMixMode = true
    }
    mixBTN.classList.toggle('buttonActive');
}

//changes the div box number
function rangechanger() {
    rangeSelector.innerHTML = rangeNumber.value;
    rangeSelector.oninput = function() {
        rangeNumber.innerHTML = this.value;
    }
    gridCollection.innerHTML = '';
    gridGenerate(rangeNumber.innerHTML);
};
