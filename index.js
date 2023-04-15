const input = document.getElementById('button');

function addingEventListener(clickAlert) {
    input.addEventListener('click', clickAlert);
    
}




function clickAlert() {
  alert('I was clicked!');
}

