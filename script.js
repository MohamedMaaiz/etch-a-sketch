const grids = document.querySelector('.gridCollection'); //selecting the grids div

for (i=0; i < 256; i++){
    const dive = document.createElement('div'); //creating the divs
    dive.classList = 'divBox';
    grids.appendChild(dive);
}

//selecting the dives 
var dives = document.querySelectorAll('.divBox');
//adding color class to divs
dives.forEach(div => div.addEventListener('mouseover', function() {div.classList.add('divHover')}));

//selecting the eraze button
const clear = document.getElementById('clear');
//erazing
clear.addEventListener('click', () => {
    dives.forEach(div => div.addEventListener('mouseover', function() {div.classList.toggle('divHover')}));
});

//selecting clear button
const clearAllBtn = document.getElementById('clearAllBtn');
//cleaning
clearAllBtn.addEventListener('click', () => {
   var allColored = document.querySelectorAll('.divHover');
   for(i=0; i < allColored.length; i++){
       allColored[i].classList.remove('divHover');
   };
});
//selecting number slider
const divNum = document.getElementById('divNum');
//getting range
var divNumSize = document.getElementById('divNumSize');
//showing the number
divNumSize.innerHTML = divNum.value;
divNum.oninput = function() {
    divNumSize.innerHTML = this.value;
}
