function dragElement(terrariumElement) { //taking an HTML element to be draggable//
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; //stores the initial and current mouse positions//
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault(); //prevents any default action that might occur when the event is triggered//
    console.log(e); //logs the event object to the console for debugging purposes//
    pos3 = e.clientX; //pos 3 and pos4 store the current mouse position//
    pos4 = e.clientY;
    document.onpointermove = elementDrag; //event listener for dragging - while the pointer is moving//
    document.onpointerup = stopElementDrag; //event listener for stopping the drag - when the pointer is released//
  }

  function elementDrag(e) { //updates the position of the terrariumElement as a user drags it//
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX; 
    pos4 = e.clientY;
    terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
    terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}

dragElement(document.getElementById('plant1')); //calling the function and passing the HTML element with id "terrarium"//
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));