//selectors
const gridCollection = document.getElementById('grid-collection');
const clearBTN = document.getElementById('clear-btn');
const eraserBTN = document.getElementById('eraser-btn');
const rangeSelector = document.getElementById('range-selector');
const rangeNumber = document.getElementById('range-number');


//BTN selectors
clearBTN.onclick = () => clearArts();
eraserBTN.onclick = () => eraseOnHover();
rangeSelector.onchange = () => rangechanger();

//////////DEFAULT//////////
gridGenerate(16);

//generates the divs
function gridGenerate (gridNumber) {
    gridCollection.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;

    for (i=0; i < gridNumber * gridNumber; i++){
        const oneDiv = document.createElement('div');
        oneDiv.addEventListener('mouseover', () => {oneDiv.classList.add('divHover')});
        oneDiv.classList = 'generated';
        gridCollection.appendChild(oneDiv);
    }
}

//clean all arts
function clearArts() {
   var allColored = document.querySelectorAll('.divHover');
   for(i=0; i < allColored.length; i++){
       allColored[i].classList.remove('divHover');
   };
};

//erase on mouse hover
function eraseOnHover() {
    const dives = document.querySelectorAll('.generated');
        dives.forEach(div => div.addEventListener('mouseover', function() {
            div.classList.toggle('divHover')
        }));
};

//changes the div box number
function rangechanger() {
    rangeSelector.innerHTML = rangeNumber.value;
    rangeSelector.oninput = function() {
        rangeNumber.innerHTML = this.value;
    }
    gridCollection.innerHTML = '';
    gridGenerate(rangeNumber.innerHTML);
};
