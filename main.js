const windowButtons = document.getElementsByClassName('window-btn');

const sourcesContainer = document.querySelector('.sources-container');
const conditionsContainer = document.querySelector('.conditions-container');

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

    setWindowView(currentButton);

  });
}


