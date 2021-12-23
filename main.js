const windowButtons = document.getElementsByClassName('window-btn');

const sourcesContainer = document.querySelector('.sources-container');
const conditionsContainer = document.querySelector('.conditions-container');

const sourceTypeSelect = document.querySelector('.source-type-select');

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

let sourceTypes = [
  'candlestick','highest/lowest','pivot','median', 'value','indicators'
];

////append an option to the source type select 
