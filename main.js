const windowButtons = document.getElementsByClassName('window-btn');
const currentButton = '';

function turnAllOff () {
  for (i = 0; i < windowButtons.length; i++){
    windowButtons[i].style.backgroundColor = 'green';
  }
  }


  for (let i = 0; i < windowButtons.length; i++) {
    windowButtons[i].addEventListener('click', () => {
      turnAllOff();
      windowButtons[i].style.backgroundColor = 'blue';
    })
  }
 
