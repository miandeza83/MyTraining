const windowButtons = document.getElementsByClassName('window-btn');

const sourcesContainer = document.querySelector('.sources-container');
const conditionsContainer = document.querySelector('.conditions-container');

const sourceTypeSelect = document.querySelector('.source-type-select');
const sourceSpecSelect = document.querySelector('.source-spec-select');

let currentButton = ''; ///

//turns off all conatiners from view
const containers = document.getElementsByClassName('container');
for(let i = 0; i < containers.length; i++){
  containers[i].style.display = 'none';
}

function turnAllOff () {
  for (i = 0; i < windowButtons.length; i++){
    windowButtons[i].style.backgroundColor = 'transparent';
  }
}

///turns buttons on and off when clicked also sets the container to be worked on....
for (let i = 0; i < windowButtons.length; i++) {
  windowButtons[i].addEventListener('click', () => {
    turnAllOff();
    windowButtons[i].style.backgroundColor = 'blue';
    currentButton = windowButtons[i].textContent;

    setWindowView();

  });
}
 function setWindowView () {
   if (currentButton === 'sources') {
     sourcesContainer.style.display = 'block';
   } else {
     sourcesContainer.style.display = 'none';
   }
   if (currentButton === 'conditions') {
     conditionsContainer.style.display = 'block';
   } else {
     conditionsContainer.style.display = 'none';
   }
}

///source type select options to be shown

const sourceTypes = [
  'candlestick','highest/lowest','pivot','median', 'value','indicators'
];
const candlestickSpecs = [
  'open','high','low','close','hl2','ohl3','ohlc4'
];
const highestLowestSpecs = [
  'highest','lowest','highest bars','lowest bars'
];
const pivotSpecs = [
  'pivot low','pivot high'
];

////append an option to the source type select 
sourceTypes.forEach(type => {
  //make an optio element
  const createOptionElem = document.createElement('option');
  //give the option text of the type
  createOptionElem.textContent = type;
  //append option to the select ref
  sourceTypeSelect.append(createOptionElem);
});

sourceTypeSelect.onclick = () => {
  //makea  function to clear all spec select option elements
  function clearSpecSelect() {
    while(sourceSpecSelect.length !== 0) {
      sourceSpecSelect[0].replaceWith();
    }
  }

//an iffstateent/switch to set those spect options. 
  switch(sourceTypeSelect.value) {
    case 'candlestick':
      clearSpecSelect();

        candlestickSpecs.forEach(spec => {
          const specOptElem = document.createElement('option');
          specOptElem.textContent = spec;
          sourceSpecSelect.append(specOptElem);
        })
      
      break;
  }
}