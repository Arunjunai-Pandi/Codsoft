let outputScreen = document.getElementById('output');
let buttons = document.querySelectorAll('button');
let inputString = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      inputString = eval(inputString);
      outputScreen.value = inputString;
    } 
    else if(e.target.innerHTML==='AC'){
      inputString="";
      outputScreen.value=inputString;

    }
    else if(e.target.innerHTML==='DEL'){
      inputString=inputString.substring(0, inputString.length-1);
      outputScreen.value=inputString;
    }
    else {
      inputString += e.target.innerHTML;
      outputScreen.value = inputString;
    }
  });
});