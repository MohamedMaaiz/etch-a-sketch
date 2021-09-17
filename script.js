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
eraserBTN.onclick = () => eraseOnHover();
rangeSelector.onchange = () => rangechanger();
colorPicker.onchange = () => changeColor();

//////////DEFAULT//////////
let defaultColor = '#000000';
let dives;
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

//selecting all the generated dives
function divSelect () {
    dives = document.querySelectorAll('.generated');
}

//change the color on color pick
function changeColor(e) {
    // console.log(colorPicker.value)
    //come back later for the error
    // console.log(e)
    e.target.style.backgroundColor = colorPicker.value;    
}

//clean all arts
function clearArts() {
    divSelect();
    dives.forEach(div => div.style.backgroundColor = '')
};

//erase on mouse hover
// have to chage the menual number
let eraser = false;
function eraseOnHover() {
    let mode;
    if (eraser == true) {
        mode = '#000000';
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

//color Mixer
// let colorMixMode = false;
// function colorMixer(e) {
//     if (colorMixMode == true) {
//         e.target.style.backgroundColor = colorPicker.value;   
//     } else {
//         // dives.style.backgroundColor = "#" + randomColor;
//         // console.log(dives[0])
//     }
//     mixBTN.classList.toggle('buttonActive');
//     divSelect();
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     console.log(randomColor)
//     dives.forEach(div => div.addEventListener('mouseover', function(e) {
//         e.target.style.backgroundColor = randomColor;
//     }));
//     //make a new swith mode function 
// }

//changes the div box number
function rangechanger() {
    rangeSelector.innerHTML = rangeNumber.value;
    rangeSelector.oninput = function() {
        rangeNumber.innerHTML = this.value;
    }
    gridCollection.innerHTML = '';
    gridGenerate(rangeNumber.innerHTML);
};
